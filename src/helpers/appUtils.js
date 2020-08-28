import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitterSquare,
  faSkype,
  faAngellist,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

const parseToken = token => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const user = JSON.parse(window.atob(base64));
  return user.user_id;
};

function initFontAwesome() {
  library.add(
    fab,
    faTwitterSquare,
    faSkype,
    faAngellist,
    faStackOverflow,
    faFacebook,
    faLinkedin,
    faGithub,
  );
}

const formatCurrency = amount => amount.toLocaleString('en-US', { style: 'currency', currency: 'UGX' });

export {
  parseToken,
  formatCurrency,
  initFontAwesome,
};

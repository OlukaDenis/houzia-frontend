const parseToken = token => {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const user = JSON.parse(window.atob(base64));
  return user.user_id;
};

const formatCurrency = amount => amount.toLocaleString('en-US', { style: 'currency', currency: 'UGX' });

export {
  parseToken,
  formatCurrency,
};

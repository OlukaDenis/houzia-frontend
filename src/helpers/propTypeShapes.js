import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  id: PropTypes.number,
  username: PropTypes.string,
  email: PropTypes.string,
  admin: PropTypes.bool,
  image: PropTypes.string,
  password_digest: PropTypes.string,
  updated_at: PropTypes.string,
  created_at: PropTypes.string,
});

const houseShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  updated_at: PropTypes.string,
  created_at: PropTypes.string,
});

const favoriteShape = PropTypes.shape({
  id: PropTypes.number,
  house_id: PropTypes.number,
  user_id: PropTypes.number,
  updated_at: PropTypes.string,
  created_at: PropTypes.string,
});

export {
  userShape,
  houseShape,
  favoriteShape,
};

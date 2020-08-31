import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  admin: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  password_digest: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
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
  id: PropTypes.number.isRequired,
  house_id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  updated_at: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
});

export {
  userShape,
  houseShape,
  favoriteShape,
};

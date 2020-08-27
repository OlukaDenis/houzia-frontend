import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  admin: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  password_digest: PropTypes.string.isRequired,
  updated_at: PropTypes.instanceOf(Date),
  created_at: PropTypes.instanceOf(Date),
});

const houseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  updated_at: PropTypes.instanceOf(Date),
  created_at: PropTypes.instanceOf(Date),
});

const favoriteShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  house_id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  updated_at: PropTypes.instanceOf(Date),
  created_at: PropTypes.instanceOf(Date),
})

export {
  userShape,
  houseShape,
  favoriteShape,
};
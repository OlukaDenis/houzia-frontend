import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { userShape } from '../helpers/propTypeShapes';

const AdminButton = props => {
  const [admin, setAdmin] = useState(false);
  const {
    isAdmin, user, updateUser, token,
  } = props;

  useEffect(() => {
    setAdmin(isAdmin);
  }, [isAdmin]);

  const handleClick = () => {
    if (!admin) {
      const userUpdate = {
        username: user.username,
        email: user.email,
        admin: true,
        image: user.image,
      };
      updateUser(token, userUpdate, user.id);
    }
  };

  const text = admin ? 'Already Admin' : 'Make Admin';

  return (
    <button type="button" className="h-btn btn bt-sm h-btn-filled" onClick={handleClick}>{ text }</button>
  );
};

AdminButton.propTypes = {
  token: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  updateUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(userShape).isRequired,
};

export default AdminButton;

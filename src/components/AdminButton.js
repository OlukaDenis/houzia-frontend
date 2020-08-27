import React, { useEffect, useState } from 'react';

const AdminButton = props => {
  const [admin, setAdmin] = useState(false);
  const {
    isAdmin, user, updateUser, token,
  } = props;

  useEffect(() => {
    setAdmin(isAdmin);
  });

  const handleClick = e => {
    if (admin) {
      console.log('I am admin');
    } else {
      const userUpdate = {
        username: user.username,
        email: user.email,
        admin: true,
        image: user.image,
      };

      updateUser(token, userUpdate, user.id);
      console.log(userUpdate);
    }
  };

  const text = admin ? 'Already Admin' : 'Make Admin';

  return (
    <button onClick={handleClick}>{ text }</button>
  );
};

export default AdminButton;

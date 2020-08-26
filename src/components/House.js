import React, { useState } from 'react';

const House = (props) => {

  const {
    house, 
    isFavorite, 
    token,
    favorite,
    houseData, 
    removeHouseFromFavorite, 
    addHouseToFavorite 
  } = props;

  const [buttonText, setButtonText] = useState('');

  // isFavorite ? setButtonText('Remove from Favorite') : setButtonText('Add to favorite');

  const addRemoveFavorite = () => {
    if (isFavorite) {
      removeHouseFromFavorite(token, houseData, favorite.id );
      setButtonText('Remove from Favorite');
    } else {
      addHouseToFavorite(token, houseData);
      setButtonText('Add to Favorites');
    }
  };

  return (
    <div>
      {isFavorite && setButtonText('Remove from Favorite')} 
       {/* {!isFavorite && setButtonText('Add to Favorite')}  */}
      <div className="detailPicture">
        <img
          data-testid="image"
          src={house.image}
          alt={house.name}
        />
        <div className="img-overlay" />
      </div>
      <div>
        <p>
        <span>{house.price}</span>
        <span>monthly</span>
        </p>
      </div>
    <h2>{house.name}</h2>
    <p>{house.description}</p>

    <button onClick={addRemoveFavorite}>{buttonText}</button>
  
    </div>
  )
};

export default House;
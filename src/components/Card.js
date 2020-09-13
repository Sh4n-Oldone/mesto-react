import React from 'react';

const Card = (card) => {

  function handleClick() {
    card.onCardClick(card);
  }

  if(card.ownerId === 'ed99dd7809a559eac419471a') {
    return (
      <li className='card'>
        <button className='card__remove-button button-style__reset'/>
        <img className='card__image' src={card.url} alt={card.description} onClick={handleClick} />
        <div className='card__item'>
          <h3 className='card__title'>{card.description}</h3>
          <div className='card__like-container'>
            <button className='card__like-button button-style__reset'/>
            <p className='card__like-counter'>{card.likes.length}</p>
          </div>
        </div>
      </li>
    )
  } else {
    return (
      <li className='card'>
        <img className='card__image' src={card.url} alt={card.description} onClick={handleClick} />
        <div className='card__item'>
          <h3 className='card__title'>{card.description}</h3>
          <div className='card__like-container'>
            <button className='card__like-button button-style__reset'/>
            <p className='card__like-counter'>{card.likes.length}</p>
          </div>
        </div>
      </li>
    )
  }
};

export default Card;
import React from 'react';
import {owner} from "../utils/utils";

const Card = ({url, description, likes, ownerId, onCardClick, onRemoveClick}) => {

  function handleClick() {
    onCardClick({url, description});
  }


  if(ownerId === owner) {
    return (
      <li className='card'>
        <button className='card__remove-button button-style__reset' onClick={onRemoveClick}/>
        <img className='card__image' src={url} alt={description} onClick={handleClick} />
        <div className='card__item'>
          <h3 className='card__title'>{description}</h3>
          <div className='card__like-container'>
            <button className='card__like-button button-style__reset'/>
            <p className='card__like-counter'>{likes.length}</p>
          </div>
        </div>
      </li>
    )
  } else {
    return (
      <li className='card'>
        <img className='card__image' src={url} alt={description} onClick={handleClick} />
        <div className='card__item'>
          <h3 className='card__title'>{description}</h3>
          <div className='card__like-container'>
            <button className='card__like-button button-style__reset'/>
            <p className='card__like-counter'>{likes.length}</p>
          </div>
        </div>
      </li>
    )
  }
};

export default Card;
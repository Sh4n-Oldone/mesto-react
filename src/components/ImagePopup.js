import React from 'react';

export default function ImagePopup(props) {

  function isOpen() {
    if (props.card) {
      return ' popup_opened'
    } else {
      return ''
    }
  }

  return (
    <section className={`popup popup-${props.name}${isOpen()}`}>
      <div className='popup-image__container'>
        <img src={props.card.url} alt={props.card.description} className='popup-image__image'/>
        <p className='popup-image__title'>{props.card.description}</p>
        <button type='button' className='popup__close-button button-style__reset' onClick={props.onClose}/>
      </div>
    </section>
  )
}
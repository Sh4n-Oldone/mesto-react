import React from 'react';

export default function PopupWithForm(props) {

  function isOpen() {
    if (props.isOpen) {
      return ' popup_opened'
    } else {
      return ''
    }
  }


  return (
    <>
      <section className={`popup popup-${props.name}${isOpen()}`}>
        <div className='popup__container'>
          <h2 className='popup__title'>{props.title}</h2>
          <form className='popup__form' name={props.name}>
            {props.children}
            <button type='submit' className='popup__save-button button-style__reset'>Сохранить</button>
          </form>
          <button type='button' className='popup__close-button button-style__reset' onClick={props.onClose}
                  />
        </div>
      </section>
    </>
  );
}
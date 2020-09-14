import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {

  const [state, setState] = React.useState({
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false,
    isRemoveCardPopupOpen: false
  })
  const [selectedCard, setSelectedCard] = React.useState('')

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setState({...state, isEditProfilePopupOpen: !state.isEditProfilePopupOpen})
  }

  function handleAddPlaceClick() {
    setState({...state, isAddPlacePopupOpen: !state.isAddPlacePopupOpen})
  }

  function handleEditAvatarClick() {
    setState({...state, isEditAvatarPopupOpen: !state.isEditAvatarPopupOpen})
  }
  function handleRemoveCardClick() {
    setState({...state, isRemoveCardPopupOpen: !state.isRemoveCardPopupOpen})
  }

  function closeAllPopups() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    setState({...state, isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      isRemoveCardPopupOpen: false});
    setSelectedCard('')

  }

  return (
    <div className='App'>
      <div className='page'>
        <div className='page__container'>

          <Header/>

          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onRemoveClick={handleRemoveCardClick}
          />

          <PopupWithForm
            name={'profile'}
            title={'Редактировать профиль'}
            isOpen={state.isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <small className='popup__input_type_error input_name_error-message'/>
            <input type='text' name='name' defaultValue={'Жак-Ив Кусто'} placeholder='Ваше имя'
                   className='popup__input popup__input_name' minLength='2' maxLength='40' required/>
            <small className='popup__input_type_error input_title_error-message'/>
            <input type='text' name='job' defaultValue={'Исследователь океана'} placeholder='Ваша работа'
                   className='popup__input popup__input_title' minLength='2' maxLength='200' required/>
          </PopupWithForm>

          <PopupWithForm
            name={'card'}
            title={'Новое место'}
            isOpen={state.isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <small className='popup__input_type_error input_name_error-message'/>
            <input type='text' name='name' defaultValue={''} placeholder='Название' className='popup__input popup__input_name'
                   minLength='1' maxLength='30' required/>
            <small className='popup__input_type_error input_title_error-message'/>
            <input type='url' name='link' defaultValue={''} placeholder='Ссылка на карточку'
                   className='popup__input popup__input_title' required/>
          </PopupWithForm>

          <PopupWithForm
            name={'submit'}
            title={'Вы уверены?'}
            isOpen={state.isRemoveCardPopupOpen}
            onClose={closeAllPopups}
          />

          <PopupWithForm
            name={'avatar'}
            title={'Новый аватар'}
            isOpen={state.isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <small className='popup__input_type_error input_title_error-message'/>
            <input type='url' name='avatar' defaultValue={''} placeholder='Ссылка на аватар'
                   className='popup__input popup__input_title' required/>
          </PopupWithForm>

          <ImagePopup
            card={selectedCard}
            name={'image'}
            onClose={closeAllPopups}
          >
          </ImagePopup>

          <Footer/>


        </div>
      </div>
    </div>
  );

}


import React, {useEffect, useState} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import myApi from "../utils/api";
import avatar from '../images/cousteau.jpg';
import CurrentUserContext from "../context/CurrentUserContext";
import CardsContext from "../context/CardsContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

export default function App() {

  const [state, setState] = useState({
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false,
    isRemoveCardPopupOpen: false
  })
  const [selectedCard, setSelectedCard] = useState('')
  const [currentUser, setCurrentUser] = useState({
    name: 'Жак-Ив Кусто',
    description: 'Исследователь океана',
    avatar: avatar,
    _id: 0
  })
  const [cards, setCards] = useState([]);

  useEffect(() => {
    myApi.getUserData()
      .then((res) => {
        setCurrentUser({
          name: res.name,
          description: res.about,
          avatar: res.avatar,
          _id: res._id
        })
      }).catch((error) => {
      console.log('Я получал данные. Я сломался. Ошибка: ' + error)
    });
  }, []);

  useEffect(() => {
    myApi.getCardsData()
      .then(res => {
        setCards(res);
      })
      .catch((error) => {
        console.log('Я грузил данные карточек. Я сломался. Ошибка: ' + error)
      })
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    myApi.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
  }

  function handleCardDelete(card) {
    myApi.removeCard(card._id)
      .then(() => {
        const newCards = cards.filter(item => card._id !== item._id);
        setCards(newCards);
      });
  }

  function handleUpdateUser(data) {
    myApi.setUserData(data)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          description: res.about,
          avatar: res.avatar,
          _id: res._id
        })
      })
      .then(closeAllPopups())
  }

  function handleUpdateAvatar(data) {
    myApi.setNewAvatar(data)
      .then((res) => {
        setCurrentUser({
          name: currentUser.name,
          description: currentUser.description,
          avatar: res.avatar,
          _id: currentUser._id
        })
      })
      .then(closeAllPopups())
  }

  function handleAddPlaceSubmit(data) {
    myApi.setCardsData(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(closeAllPopups())
  }

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

  function handleRemoveCardClickPopupOpen() {
    setState({...state, isRemoveCardPopupOpen: !state.isRemoveCardPopupOpen})
  }

  function closeAllPopups() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    setState({
      ...state, isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      isRemoveCardPopupOpen: false
    });
    setSelectedCard('')
  }

  return (
    <div className='App'>
      <div className='page'>
        <div className='page__container'>

          <CurrentUserContext.Provider value={currentUser}>
            <CardsContext.Provider value={cards}>

              <Header/>

              <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onRemoveClickPopup={handleRemoveCardClickPopupOpen}
                onLikeClick={handleCardLike}
                onDeleteClick={handleCardDelete}
              />

              <EditProfilePopup
                isOpen={state.isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />

              <EditAvatarPopup
                isOpen={state.isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
              />

              {/*<PopupWithForm*/}
              {/*  name={'card'}*/}
              {/*  title={'Новое место'}*/}
              {/*  isOpen={state.isAddPlacePopupOpen}*/}
              {/*  onClose={closeAllPopups}*/}
              {/*>*/}
              {/*  <small className='popup__input_type_error input_name_error-message'/>*/}
              {/*  <input type='text' name='name' defaultValue={''} placeholder='Название'*/}
              {/*         className='popup__input popup__input_name'*/}
              {/*         minLength='1' maxLength='30' required/>*/}
              {/*  <small className='popup__input_type_error input_title_error-message'/>*/}
              {/*  <input type='url' name='link' defaultValue={''} placeholder='Ссылка на карточку'*/}
              {/*         className='popup__input popup__input_title' required/>*/}
              {/*</PopupWithForm>*/}

              <AddPlacePopup
                isOpen={state.isAddPlacePopupOpen}
                onClose={closeAllPopups}
                handleNewPlace={handleAddPlaceSubmit}
              />

              <PopupWithForm
                name={'submit'}
                title={'Вы уверены?'}
                isOpen={state.isRemoveCardPopupOpen}
                onClose={closeAllPopups}
              />

              <ImagePopup
                card={selectedCard}
                name={'image'}
                onClose={closeAllPopups}
              >
              </ImagePopup>

              <Footer/>

            </CardsContext.Provider>
          </CurrentUserContext.Provider>


        </div>
      </div>
    </div>
  );

}


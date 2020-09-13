import React from 'react';
import '../index.css';
import avatar from '../images/cousteau.jpg';
import avatarPointer from '../images/edit-profile-icon.svg';
import myApi from '../utils/Api';
import Card from '../components/Card.js';

export default function Main(props) {

  const [username, setUsername] = React.useState({userName: 'Жак-Ив Кусто'});
  const [userDescription, setUserDescription] = React.useState({userDescription: 'Исследователь океана'});
  const [userAvatar, setUserAvatar] = React.useState({userAvatar: avatar});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    myApi.getUserData().then((res) => {
      setUsername(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    }).catch((error) => {
      console.log('Я получал данные. Я сломался. Ошибка: ' + error)
    });
  }, []);

  React.useEffect(() => {
    myApi.getCardsData()
      .then(res => {

        const cardItems = res.map(item => ({
          url: item.link,
          description: item.name,
          likes: item.likes,
          id: item._id,
          ownerId: item.owner._id
        }));

        setCards(cardItems);
      })
      .catch((error) => {
        console.log('Я грузил данные карточек. Я сломался. Ошибка: ' + error)
      })
  }, []);

  return (

    <main className='content'>
      <section className='profile'>
        <div className='profile__overlay'>
          <img src={userAvatar} alt={`Фото: ${username}`} className='profile__pic'
               onClick={props.onEditAvatar}/>
          <img src={avatarPointer} alt='edit-icon' className='profile__edit-icon'/>
        </div>
        <div className='profile__info'>
          <div className='profile__wrapper'>
            <h1 className='profile__name'>{`${username}`}</h1>
            <button className='profile__edit-button button-style__reset' onClick={props.onEditProfile}/>
          </div>
          <p className='profile__title'>{`${userDescription}`}</p>
        </div>
        <button className='profile__add-button button-style__reset' onClick={props.onAddPlace}/>
      </section>

      <section className='cards'>
        <ul className='cards__list'>
          {cards.map(card => <Card {...card} key={card.id} onCardClick={props.onCardClick} />)}
        </ul>
      </section>

    </main>

  );
}

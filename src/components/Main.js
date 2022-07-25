import { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onDeleteIconClick, cards, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <a
          className="profile__avatar"
          href="#"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}>
        </a>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Открыть настройки профиля"
              onClick={onEditProfile}>
            </button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Открыть настройки фото"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id}
            card={card}
            onCardClick={onCardClick}
            onDeleteIconClick={onDeleteIconClick}
            onCardLike={onCardLike} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
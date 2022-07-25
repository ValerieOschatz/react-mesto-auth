import { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [place, setPlace] = useState({ place: '', isValid: true, errorText: '' });
  const [link, setLink] = useState({ link: '', isValid: true, errorText: '' });
  const formValidity = place.isValid && link.isValid;
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  function handleChangePlace(evt) {
    setPlace({ place: evt.target.value, isValid: evt.target.validity.valid, errorText: evt.target.validationMessage });
    setButtonDisabled(link.link ? false : true);
  }

  function handleChangeLink(evt) {
    setLink({ link: evt.target.value, isValid: evt.target.validity.valid, errorText: evt.target.validationMessage });
    setButtonDisabled(place.place ? false : true);
  }

  useEffect(() => {
    setPlace({ place: '', isValid: true, errorText: '' });
    setLink({ link: '', isValid: true, errorText: '' });
    setButtonDisabled(true);
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onAddPlace({
      name: place.place,
      link: link.link
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText={isLoading ? "Создание..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={formValidity}
      isButtonDisabled={isButtonDisabled}>
        <label className="popup__form-field">
          <input
            className={`popup__input ${!place.isValid && 'popup__input_type_error'}`}
            type="text"
            id="name"
            name="name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
            onChange={handleChangePlace}
            value={place.place} />
          <span className={`popup__input-error profileName-error ${!place.isValid && 'popup__input-error_visible'}`}>
            {!place.isValid && place.errorText}
          </span>
        </label>
        <label className="popup__form-field">
          <input
            className={`popup__input ${!link.isValid && 'popup__input_type_error'}`}
            type="url"
            id="link"
            name="link"
            placeholder="Ссылка на картинку"
            required
            onChange={handleChangeLink}
            value={link.link} />
          <span className={`popup__input-error profileName-error ${!link.isValid && 'popup__input-error_visible'}`}>
            {!link.isValid && link.errorText}
          </span>
        </label>
    </PopupWithForm>
  );
}
  
export default AddPlacePopup;
import { useState, useEffect, useContext } from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = useState({ name: '', isValid: true, errorText: '' });
  const [description, setDescription] = useState({ description: '', isValid: true, errorText: '' });
  const currentUser = useContext(CurrentUserContext);
  const formValidity = name.isValid && description.isValid;

  function handleChangeName(evt) {
    setName({ name: evt.target.value, isValid: evt.target.validity.valid, errorText: evt.target.validationMessage });
  }

  function handleChangeDescription(evt) {
    setDescription({ description: evt.target.value, isValid: evt.target.validity.valid, errorText: evt.target.validationMessage });
  }

  useEffect(() => {
    setName({ name: currentUser.name, isValid: true, errorText: '' });
    setDescription({ description: currentUser.about, isValid: true, errorText: '' });
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onUpdateUser({
      name: name.name,
      about: description.description
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={formValidity}
      isButtonDisabled={false}>
        <label className="popup__form-field">
          <input
            className={`popup__input ${!name.isValid && 'popup__input_type_error'}`}
            type="text"
            id="profileName"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            onChange={handleChangeName}
            value={name.name || ''}
          />
          <span className={`popup__input-error profileName-error ${!name.isValid && 'popup__input-error_visible'}`}>
            {!name.isValid && name.errorText}
          </span>
        </label>
        <label className="popup__form-field">
          <input
            className={`popup__input ${!description.isValid && 'popup__input_type_error'}`}
            type="text" id="profileInfo"
            name="about"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
            onChange={handleChangeDescription}
            value={description.description || ''} />
          <span className={`popup__input-error profileName-error ${!description.isValid && 'popup__input-error_visible'}`}>
            {!description.isValid && description.errorText}
          </span>
        </label>
    </PopupWithForm>
  );
}
  
export default EditProfilePopup;
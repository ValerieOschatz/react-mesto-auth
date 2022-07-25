import { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const [avatar, setAvatar] = useState({ avatar: '', isValid: true, errorText: '' });
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  function handleChangeAvatar(evt) {
    setAvatar({ avatar: evt.target.value, isValid: evt.target.validity.valid, errorText: evt.target.validationMessage });
    setButtonDisabled(false);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onUpdateAvatar({
      avatar: avatar.avatar
    });
  }

  useEffect(() => {
    setAvatar({ avatar: '', isValid: true, errorText: '' });
    setButtonDisabled(true);
  }, [isOpen]);

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={avatar.isValid}
      isButtonDisabled={isButtonDisabled}>
        <label className="popup__form-field">
          <input
            className={`popup__input ${!avatar.isValid && 'popup__input_type_error'}`}
            type="url"
            id="avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
            value={avatar.avatar}
            onChange={handleChangeAvatar} />
          <span className={`popup__input-error profileName-error ${!avatar.isValid && 'popup__input-error_visible'}`}>
            {!avatar.isValid && avatar.errorText}
          </span>
        </label>
    </PopupWithForm>
  );
}
  
export default EditAvatarPopup;
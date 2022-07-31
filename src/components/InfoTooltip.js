import useClose from "../utils/hooks/useClose";
import img_success from '../images/Union_t.svg';
import img_error from '../images/Union_f.svg';

function InfoTooltip({ name, isOpen, isPositiveAnswer, onClose }) {
  useClose(isOpen, onClose);

  const infoText = `${isPositiveAnswer ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`;

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <img className="popup__info-img" src={isPositiveAnswer ? img_success : img_error} alt={isPositiveAnswer ? "Успешно" : "Ошибка"} />
        <p className="popup__info-text">{infoText}</p>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          >
        </button>
      </div>
    </div>
  );
}
  
export default InfoTooltip;
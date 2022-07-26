import img from '../images/Union_t.svg';

function InfoTooltip() {
  return (
    <div className="popup popup_type_info">
      <div className="popup__container">
        <img className="popup__info-img" src={img} alt="" />
        <p className="popup__info-text">Вы успешно зарегистрировались!</p>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          // onClick={onClose}
          >
        </button>
      </div>
    </div>
  );
}
  
export default InfoTooltip;
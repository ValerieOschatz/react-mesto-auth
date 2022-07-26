import useClose from "../utils/hooks/useClose";

function ImagePopup({ card, onClose }) {
  useClose(card, onClose);

  return (
    <div className={`popup popup_type_full-image ${card && "popup_opened"}`}>
      <div className="popup__container popup__container_image">
        <figure className="popup__figure">
          <img
            className="popup__image"
            src={card?.link}
            alt={card?.name} />
          <figcaption className="popup__image-title">{card?.name}</figcaption>
        </figure>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть окно настроек"
          onClick={onClose}></button>
      </div>
    </div>
  );
}
  
export default ImagePopup;
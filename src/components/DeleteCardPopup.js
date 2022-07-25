import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, onCardDelete, deletedCard }) {

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onCardDelete(deletedCard);
  }

  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={true}
      isButtonDisabled={false} />
  );
}
  
export default DeleteCardPopup;
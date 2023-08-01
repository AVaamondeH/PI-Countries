import style from "./Popup.module.css"

// eslint-disable-next-line react/prop-types
const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.text}>
                    <p>{message}</p>
                </div>
                <div className={style.buttons}>
                    <button onClick={onConfirm}>Aceptar</button>
                    <button onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
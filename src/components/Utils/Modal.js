import './Modal.css';

const Modal = (props) =>{

    if(!props.open) return null
    return(
        <div className="overlayDiv">
            <div className="modalContainer">
                <div className="modalRight">
                    <p className="closeBtn" onClick={props.onClose}>X</p>
                    <h2 className="children">
                        Successfull Logout
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default Modal;

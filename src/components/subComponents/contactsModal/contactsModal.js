import './contactsModal.scss';

const ContactsModal = ({close, text}) => {
    return (
        <div className='modal'>
            <div className='modal__content'>
                <p>{text}</p>
            </div>
            <div>
                <button className='modal_close' onClick={close}>
                    &#10008;
                </button>
            </div>
        </div>
    );
};

export default ContactsModal;
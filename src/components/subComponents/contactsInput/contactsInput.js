import './contactsInput.scss';

const ConstactsInput = ({placeholder, value, onChange, invalid, type, onBlur, name}) => {
    return (
        <input type={type} className={`inputCn ${invalid}`} name={name}
        placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}/>
    );
};

export default ConstactsInput;
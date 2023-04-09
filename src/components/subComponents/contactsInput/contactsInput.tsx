import './contactsInput.scss';

interface IContactsInput {
    value: string | number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    name: string;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const ConstactsInput: React.FC<IContactsInput> = ({
    value, type, onChange, 
    placeholder, name, onBlur
}) => {
    return (
        <input className={`inputCn`} type={type} placeholder={placeholder} 
        name={name} value={value} onChange={onChange} onBlur={onBlur} />
    );
};

export default ConstactsInput;
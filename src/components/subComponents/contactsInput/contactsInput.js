import './contactsInput.scss';

const ConstactsInput = ({value, onChange, ...props}) => {
    return (
        <input type={props.type} className={`inputCn`} name={props.name}
        placeholder={props.placeholder} value={value} onChange={onChange} onBlur={props.onBlur}/>
    );
};

export default ConstactsInput;
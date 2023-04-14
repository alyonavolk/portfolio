import { useRef, useState } from 'react';
import ContactsInput from '../subComponents/contactsInput/contactsInput';
import './contacts.scss';
import ContactsModal from '../subComponents/contactsModal/contactsModal';
import key from '../../resources/emailkey';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { CSSTransition } from 'react-transition-group';


const Contacts = () => {
    const [modal, setModal] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    let messageText = 'Сообщение успешно отправлено';

    const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const form = useRef<HTMLFormElement>(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            tel: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Введите имя'),
            surname: Yup.string().required('Введите фамилию'),
            email: Yup.string().email('Неверный адрес электронной почты').required('Введите адрес электронной почты'),
            tel: Yup.string().matches(phoneReg, 'Неверный номер телефона').required('Введите номер телефона'),
            message: Yup.string().required('Введите сообщение')
        }),
        onSubmit: () => onSubmit()
    })

    const onSubmit = () => {
        emailjs.sendForm(key.SERVICE_ID, key.TEMPLATE_ID, form.current as HTMLFormElement, key.PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            messageText = 'Сообщение успешно отправлено';
            setModal(true);
            formik.values.email = '';
            formik.values.name = '';
            formik.values.surname = '';
            formik.values.tel = '';
            formik.values.message = '';
        }, (error) => {
            console.log(error.text);
            messageText = 'Произошла ошибка';
            setModal(true);
        });
    }

    return (
        <div className='contacts'>
            <h2 className='contacts__title'>
                Связаться <span>со мной</span>
            </h2>
                <CSSTransition nodeRef={modalRef} in={modal} 
                timeout={500} classNames="alert" 
                unmountOnExit>
                    <div ref={modalRef} className='contacts__modal'
                    onClick={() => setModal(false)}>
                        <ContactsModal close={() => setModal(false)} text={messageText} />
                    </div>
                </CSSTransition>
            <form ref={form} id='form' className='form' onSubmit={formik.handleSubmit}>
                <ul className='form__input'>
                    <li>
                        <ContactsInput type='text' placeholder='Имя' 
                        name='name' onChange={formik.handleChange} 
                        value={formik.values.name}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.name && formik.errors.name ? <div className='form_error'>{formik.errors.name}</div> : null}
                    </li>
                    <li>
                        <ContactsInput type='text' placeholder='Фамилия'  
                        name='surname' onChange={formik.handleChange} 
                        value={formik.values.surname}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.surname && formik.errors.surname ? <div className='form_error'>{formik.errors.surname}</div> : null}
                    </li>
                    <li>
                        <ContactsInput type='email' placeholder='Email' 
                        name='email' onChange={formik.handleChange} 
                        value={formik.values.email}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email ? <div className='form_error'>{formik.errors.email}</div> : null}
                    </li>
                    <li>
                        <ContactsInput type='tel' placeholder='Номер телефона' 
                        name='tel' onChange={formik.handleChange} 
                        value={formik.values.tel}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.tel && formik.errors.tel ? <div className='form_error'>{formik.errors.tel}</div> : null}
                    </li>
                </ul>
                <div className='form__mess'>
                    <textarea name='message' className='form__textarea' placeholder='Сообщение' value={formik.values.message} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.message && formik.errors.message ? <div className='form_error'>{formik.errors.message}</div> : null}
                </div>
                
                <button className='contacts__btn'>
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default Contacts;
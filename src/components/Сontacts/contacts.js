import { useRef } from 'react';
import ContactsInput from '../subComponents/contactsInput/contactsInput';
import './contacts.scss';
import key from '../../resource/emailkey';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';


const Contacts = () => {
    const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const form = useRef();

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            tel: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Введите имя'),
            surname: Yup.string().required('Введите фамилию'),
            email: Yup.string().email('Неверный адрес электронной почты').required('Введите адрес электронной почты'),
            tel: Yup.string().matches(phoneReg, 'Неверный номер телефона').required('Введите номер телефона')
        }),
        onSubmit: () => onSubmit()
    })

    const onSubmit = () => {
        emailjs.sendForm(key.SERVICE_ID, key.TEMPLATE_ID, form.current, key.PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            form.reset();
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='contacts'>
            <h2 className='contacts__title'>
                Связаться <span>со мной</span>
            </h2>
            <form ref={form} id='form' className='form' onSubmit={formik.handleSubmit}>
                <ul className='form__input'>
                    <li>
                        <ContactsInput type='text' placeholder='Имя' invalid='' 
                        name='name' onChange={formik.handleChange} 
                        value={formik.values.name}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.name && formik.errors.name ? <div className='form_error'>{formik.errors.name}</div> : null}
                    </li>
                    <li>
                        <ContactsInput type='text' placeholder='Фамилия' invalid='' 
                        name='surname' onChange={formik.handleChange} 
                        value={formik.values.surname}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.surname && formik.errors.surname ? <div className='form_error'>{formik.errors.surname}</div> : null}
                    </li>
                    <li>
                        <ContactsInput type='email' placeholder='Email' invalid='' 
                        name='email' onChange={formik.handleChange} 
                        value={formik.values.email}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email ? <div className='form_error'>{formik.errors.email}</div> : null}
                    </li>
                    <li>
                        <ContactsInput type='tel' placeholder='Номер телефона' invalid='' 
                        name='tel' onChange={formik.handleChange} 
                        value={formik.values.tel}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.tel && formik.errors.tel ? <div className='form_error'>{formik.errors.tel}</div> : null}
                    </li>
                </ul>
                <textarea name='message' className='form__textarea' placeholder='Сообщение' />
                
                <button className='contacts__btn'>
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default Contacts;
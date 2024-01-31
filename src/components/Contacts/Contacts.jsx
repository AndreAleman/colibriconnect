import s from './Contacts.module.scss'
import {useRef, useState} from "react";
import GreenLabel from "@/components/ui/GreenLabel/GreenLabel.jsx";
import Button from "@/components/ui/Button/Button.jsx";
import robotImage from '@/assets/form/robot-desktop.png'

import PhoneInput from 'react-phone-input-pro';
import {toast} from "react-toastify";

const Contacts = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const agreeRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const [number, setNumber] = useState(); // phone number state

  const submitHandler = (e) => {
    e.preventDefault()

    const config =
      {

        To: 'aleman@colibriconnect.io',   // replace this email with your email (to which you will receive letters from the sie)

        SecureToken: '59de8a0d-256f-4cae-a501-b94d2485c887',

        From: "colibri.c34081280@gmail.com",
        Subject: "Message from the site",
        Body: `<b>Message from the site:</b><br><br>
        First name: ${firstNameRef.current.value}<br>
        Last name: ${lastNameRef.current.value}<br>
        Email: ${emailRef.current.value}<br>
        Message: ${messageRef.current.value}<br>
        Agree to private policy: ${agreeRef.current.value === 'on' ? 'Yes' : 'No'}<br>        
        `,
        Port: 2525
      }

    Email.send(config).then(
      message => {
        toast(message)
        setNumber(undefined)
        firstNameRef.current.value = ''
        lastNameRef.current.value =''
        agreeRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''

      }
    ).catch(err=>toast.error(err));
  }

  return (
    <section className={s.contacts}>
      <GreenLabel>Contact</GreenLabel>
      <h2 className={s.title} id="contact">Get in Touch</h2>

      <div className={s.wrapper}>
        <img className={s.image} src={robotImage} alt="image of robot"/>

        <form className={s.form} onSubmit={submitHandler}>
          <h3 className={s.formTitle}>Contact us</h3>
          <p className={s.formText}>Our friendly team would love to hear from you.</p>

          <div className={s.nameInputWrapper}>
            <div className={s.control}>
              <label className={s.inputLabel} htmlFor="firstName">First name</label>
              <input className={s.input} type="text" ref={firstNameRef} placeholder="First name" id="firstName"/>
            </div>

            <div className={s.control}>
              <label className={s.inputLabel} htmlFor="lastName">Last name</label>
              <input className={s.input} type="text" ref={lastNameRef} placeholder="Last name" id="lastName"/>
            </div>
          </div>

          <div className={s.control}>
            <label className={s.inputLabel} htmlFor="email">Email</label>
            <input className={s.input} type="email" ref={emailRef} placeholder="you@company.com" id="email" required/>
          </div>

          <div className={s.control}>
            <label className={s.inputLabel} htmlFor="phone">Phone number</label>

            <PhoneInput
              className={s.myPhoneInput}
              buttonStyle={{backgroundColor: 'blue', color: 'white'}}
              inputStyle={s.customInputStyle}
              dropdownStyle={{border: '1px solid yellow', borderRadius: '4px'}}
              defaultCountry="US"
              placeholder='+1 (555) 000 0000'
              flags={false}
              value={number}
              onchange={(n) => setNumber(n)}
              fullIsoCode={false}
            />
          </div>

          <div className={s.control}>
            <label className={s.inputLabel} htmlFor="message">Message</label>
            <textarea className={s.message} ref={messageRef} placeholder="Leave us a message..." id="message" required/>
          </div>

          <div className={s.checkBoxControl}>
            <input type="checkbox" className={s.checkBox} ref={agreeRef} id="agree"/>
            <label className={s.checkLabel} htmlFor="agree">You agree to Colibri Connect LLC may email you in response to your inquiry. We DO NOT sell any information given.</label>
          </div>
          <Button className={s.button}>Send message</Button>

        </form>
      </div>
    </section>
  );
};

export default Contacts;


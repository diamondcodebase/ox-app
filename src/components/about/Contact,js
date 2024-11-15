import { motion } from "framer-motion"
import { useState } from "react";
import emailjs from 'emailjs-com'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_5apm88q';
            const templateId = 'template_otvlq88';
            const userId = 'VpqNjm7XlyH6d5IFv';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div className="contactform">
            < motion.h1 initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }} className="ContactUs">Contact <span>Us</span></motion.h1>

            <div className="contact-input" id='contact'>
                <motion.img initial={{ opacity: 0, scale: 0, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }} viewport={{ once: true }} src="Group 18.png" alt="image ppl" className="img-ppl" />
                <form className="field" aria-required >
                    <motion.input initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} type="text" className="Name" value={name} placeholder="Full Name" onChange={e => setName(e.target.value)} />
                    <motion.input initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} viewport={{ once: true }} type="email" className="Mail" value={email} name="from_name" placeholder="Mail ID" onChange={e => setEmail(e.target.value)} />
                    <motion.textarea initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }} viewport={{ once: true }} name="contenr" className="message" value={message} rows={4} cols={40} placeholder="Write your Message Here..." onChange={e => setMessage(e.target.value)} />
                    {
                        emailSent ? <button className="Send" style={{ backgroundColor: '#00DFA2' }}>message sent</button> : <motion.button initial={{ opacity: 0, scale: 0, x: -500 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.2 }} whileHover={{ scale: 1.2 }}
                            onHoverStart={_e => { }}
                            onHoverEnd={() => { }} whileTap={{ scale: 0.8 }} viewport={{ once: true }} className="Send from-left" onClick={submit} >Send</motion.button>
                    }


                </form>



            </div>
        </div>
    )
}
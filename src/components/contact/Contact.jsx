import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_hmyd5dg", "template_s2wvxv8", form.current, "pQIOzIRMgAD5b-Sux");

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>infor.letrunghieu@gmail.com</h5>
                        <a href="maito:infor.letrunghieu@gmail.com" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Le Trung Hieu</h5>
                        <a href="https://m.me/infor.trunghieudalat" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>0372061855</h5>
                        <a href="https://api.whatsapp.com/send?phone+84372061855" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send a message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

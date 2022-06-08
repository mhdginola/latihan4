import st from './ContactUsForm4.module.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Router from 'next/router';

export default function ContactUsForm4() {  
    const form = useRef();
    const sendEmail=(e: { preventDefault: () => void; target:any})=>{
        e.preventDefault();

        emailjs.sendForm('service_1bip41o','template_3jp2jk1', e.target ,'ftmRNCj8ds4q86bdL')
        .then((result) => {
            console.log(result.text);
            alert("pesan terkirim");
            Router.reload();
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <>
    
            <div className="container-fluid bg-light overflow-hidden px-lg-0 maig" >
                <div className="container contact px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 ps-lg-0">                                
                                <h6 className="text-primary">Contact Us</h6>
                                <h1 className="mb-4">Get in touch</h1>
                                <p className="mb-4">Deon Inquiry Form</p>
                                <form onSubmit={sendEmail}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="full" placeholder="Your Name" name='full' required/>
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" name='email' required/>
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>                                        
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="pesan" name='pesan'  required></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary rounded-pill py-3 px-5" type="submit" value={"send"}>Send Message</button>
                                        </div>
                                    </div>
                                    {/* <label>Name</label>
                                    <input type="text" name="full" />
                                    <label>Email</label>
                                    <input type="email" name="email" />
                                    <label>Message</label>
                                    <textarea name="pesan" />
                                    <input type="submit" value="Send" /> */}
                                </form>                                
                            </div>
                        </div>
                        {/* <div className="col-lg-6 pe-lg-0" >
                            <div className="position-relative h-100">
                                <iframe className="position-absolute w-100 h-100" 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameborder="0" allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>                                       
        </>
    )
}
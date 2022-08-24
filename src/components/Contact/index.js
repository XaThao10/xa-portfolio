import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Col, Row } from 'react-bootstrap';

const Contact = () => {

    const [letterClass] = useState('text-animate')
    const contactText = ['C','o','n','t','a','c','t',' ','m','e']
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_fymntdq',
                'template_wl6a7qr',
                refForm.current,
                'sTNzvhyiRJJiNst85',
            )
            .then(
                () => {
                    alert("Message successfully sent!")
                    window.location.reload(false)
                },
                () => {
                    alert("Falied to send the message, pase try again.")
                }
            )
    }

    return (
        <>
        <div className='container'>
            <div className='row'>
                    <div className='col-lg'>
                            <h1>
                                <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={contactText}
                                idx={15} 
                                />
                            </h1>
                            <p>
                                If you have any questions or just wanted to chat, feel free to reach out to me! 
                            </p>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type="text" name='from_name' 
                                        id="from_name"
                                        placeholder='Name'
                                        required='True' />
                                    </li>
                                    <li className='half'>
                                        <input type="email" name="reply_to" id="reply_to"
                                        placeholder='Email'
                                        required='True' />
                                    </li>
                                    <li>
                                        <input placeholder=
                                        'Subject'
                                        type="text"
                                        id="from_subject"
                                        name="from_subject"
                                        required />
                                    </li>
                                    <li>
                                        <textarea placeholder='Message' name="message"
                                        id="message"
                                        required></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className='flat-button'
                                        value="SEND" />
                                    </li>
                                </ul>
                            </form>
                    </div>
                    <div className='col-lg'>
                        <div className='map-wrap'>
                            <MapContainer center={[44.977753,-93.261478]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[44.977753,-93.261478]}>
                                    <Popup>I'm here!

                                    </Popup>
                            </Marker>
                            </MapContainer>
                        </div>
                    </div>
            </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact
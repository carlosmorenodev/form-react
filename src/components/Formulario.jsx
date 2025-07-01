import React, { useState } from 'react'
import './Formulario.css'
import { users } from '../data/users.js'

import { FaEyeSlash, FaEye } from "react-icons/fa";


const Formulario = ({ isAuthenticated, setIsAuthenticated }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const [isValid, setIsValid] = useState(true)
    //const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [formSubmited, setFormSubmited] = useState(false)
    const [loginMessage, setLoginMessage] = useState(localStorage.getItem('welcomeMessage') || '')
    //const [loginMessage, setLoginMessage] = useState('')


    const [showPassword, setShowPassword] = useState(false); // Nuevo estado

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (formSubmited) {
            setErrorEmail('')
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        if (formSubmited) {
            setErrorPassword('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmited(true)

        //Validación de email
        if (email.trim() === '') {
            setErrorEmail('El correo no puede estar vacío');
            console.log('El correo no puede estar vacío')
            setIsValid(false);
        } else if (!email.includes('@')) {
            setErrorEmail('El correo debe contener una @');
            console.log('El correo debe contener una @')
            setIsValid(false);
        } else {
            setErrorEmail('')
        }

        //Validación de password
        if (password.trim() === '') {
            setErrorPassword('La contraseña no puede estar vacía')
            console.log('La contraseña no puede estar vacía')
            setIsValid(false);
        } else if (password.length < 5) {
            setErrorPassword('La contraseña tiene que tener más de cinco digitos');
            console.log('La contraseña tiene que tener más de cinco digitos')
            setIsValid(false);
        }
        else {
            setErrorPassword('')
        }

        //Si las validaciones son correctas
        if (isValid) {
            const foundUser = users.find(
                user => user.email === email && user.password === password
            );

            if (foundUser) {
                setIsAuthenticated(true);
                const welcomeMessage = `Bienvenido, ${foundUser.nick}!`;
                setLoginMessage(welcomeMessage);
                localStorage.setItem('welcomeMessage', welcomeMessage);
                setLoginMessage(`Bienvenido, ${foundUser.nick}!`)
                console.log('Usuario encontrado')

            } else {
                setLoginMessage('Datos incorrectos')
                localStorage.removeItem('welcomeMessage')
                console.log('Usuario desconocido')
            }
        } else {
            setLoginMessage('El usuario o la contraseña son incorrectos')
        }
    }

    const handleLogout = () => {
        setIsAuthenticated(false);
        setLoginMessage('');
        localStorage.removeItem('welcomeMessage')
        setEmail('');
        setPassword('');
        setErrorEmail('');
        setErrorPassword('');
        setIsValid(true);
        setFormSubmited(false);
    };


    return (
        <>
            {isAuthenticated ? (
                <>
                    {loginMessage}
                    <button className='logout-button' onClick={handleLogout}>Cerrar sesion</button>

                </>
            ) : (
                <>
                    <form noValidate onSubmit={handleSubmit} className='formulario'>
                        <div className="email-input-container">
                            <input
                                value={email}
                                type="email"
                                onChange={handleEmailChange}
                                placeholder=''
                            />

                            <label>Correo</label>

                            {formSubmited && errorEmail && (
                                <p className='error-message'>{errorEmail}</p>
                            )}

                        </div>

                        <div className="password-input-container">
                            <input
                                value={password}
                                type={showPassword ? "text" : "password"}
                                onChange={handlePasswordChange}
                                placeholder=""
                            />
                            <label>Contraseña</label>
                            <button
                                className='show-pass-button'
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {formSubmited && errorPassword && (
                                <p className='error-message'>{errorPassword}</p>
                            )}
                        </div>



                        <button className='submit-button' type="submit">Enviar</button>

                        {loginMessage && (
                            <p className={loginMessage.includes('Bienvenido') ? 'success' : 'error'}>{loginMessage}</p>)}
                    </form>

                </>
            )}

        </>
    )
}




export default Formulario


import React, { useState } from 'react'
import './Login.css'
import { useSelector, useDispatch } from 'react-redux';
import { sendFormData, sendLoginData } from '../../redux/login-register-data/loginRegister';
import backgroundImage from '../../assets/gym.jpg'


function Login() {
    useSelector(state => state.form);
    const dispatch = useDispatch();

    const [isLogin, setIsLogin] = useState(true)

    const handleToggleForm = () => {
        setFormData({
            email: "",
            password: "",
        })
        setRegisterData({
            name: "",
            email: "",
            password: ""
        })
        setIsLogin(!isLogin);
    }

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(sendLoginData(formData))

    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // console.log('Form data being dispatched:', registerData);
        dispatch(sendFormData(registerData));
    }

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleRegisterChange = (e) => {
        setRegisterData(() => ({
            ...registerData,
            [e.target.name]: e.target.value
        }))


    }

    return (
        <div>
            {isLogin ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='loginForm'>
                                <h1>LOGIN</h1>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        name='email'
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                    <input type="password"
                                        className="form-control"
                                        name='password'
                                        id="exampleFormControlInput1"
                                        value={formData.password}
                                        onChange={handleChange} />
                                </div>
                                <div className='buttons'>
                                    <div className="btn btn-primary" onClick={handleSubmit}>Submit</div>
                                    <div className="btn btn-primary toggle" onClick={handleToggleForm}>Register</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="image-container">
                                <img src={backgroundImage} alt="Background" className="background-image" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (

                <div className='col-md-6'>
                <div className='loginForm'>
                    <h1>REGISTER</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email"
                            className="form-control"
                            name='name'
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            value={registerData.name}
                            onChange={handleRegisterChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email"
                            className="form-control"
                            name='email'
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            value={registerData.email}
                            onChange={handleRegisterChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password"
                            className="form-control"
                            name='password'
                            id="exampleFormControlInput1"
                            value={registerData.password}
                            onChange={handleRegisterChange} />
                    </div>
                    <div className='buttons'>
                        <div className="btn btn-primary" onClick={handleRegisterSubmit}>Submit</div>
                        <div className="btn btn-primary toggle" onClick={handleToggleForm}>Login</div>
                    </div>
                    </div>
                    
                    <div className="image-container">
                        <img src={backgroundImage} alt="Background" className="background-image" />
                    </div>
                </div>

                
                )}

        </div>

    )
}

export default Login

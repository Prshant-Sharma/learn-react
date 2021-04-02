import React, { useState } from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function UserForm() {
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onsubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // if(password !== '' && confirmPass !== '') {
        //     if(password.length >= 4) {
        //         if(password === confirmPass) {
        //             console.log(password);
        //         } else {
        //             alert("Password didn't match");
        //         }
        //     } else {
        //         alert('Password must be at least 4 characters long');
        //     }
        // } else {
        //     alert('Please enter password fields..');
        // }
    }

    const showPass = <FontAwesomeIcon icon={faEye} />
    const hidePass = <FontAwesomeIcon icon={faEyeSlash} />
    
    return (
        <div>
            <form className="user-form" onSubmit={onsubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" value={formData.userName} placeholder="Enter your full name" onChange={handleChange} required/>
                </div>
                <div className="form-control">
                    <label>Email Id</label>
                    <input type="email" value={formData.email} placeholder="Enter your email" onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type={showPassword1 ? 'text' : 'password'} value={password} placeholder="Enter your password" onChange={e => setPassword(e.target.value)}/>
                    <i onClick={() => setShowPassword1(!showPassword1) }>{showPassword1 ? showPass : hidePass}</i>
                </div>
                <div className="form-control">
                    <label>Confirm password</label>
                    <input type={showPassword2 ? 'text' : 'password'} value={confirmPass}  placeholder="Re-enter your password" onChange={e => setConfirmPass(e.target.value)}/>
                    <i onClick={() => setShowPassword2(!showPassword2) }>{showPassword2 ? showPass : hidePass}</i>
                </div>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default UserForm

<<<<<<< HEAD
import React, {useState} from "react";

const RegistrationForm = () => {
    const [username, setUsername] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [error, setError] =useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError('All fields are required');
            return;
        }

        setError('');
    }
return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
             <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );

};

export  default RegistrationForm;
=======
import React, {useState} from "react";

const RegistrationForm = () => {
    const [username, setUsername] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [error, setError] =useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        [ "if (!username)", "if (!email)", "if (!password)",setErrors"
    ]
return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
             <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );

};

export  default RegistrationForm;
>>>>>>> 52b6f7c4bba2e9bbb3a9d1897d8c784af775f0e9

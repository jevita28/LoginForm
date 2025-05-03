import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "../src/form.css";                                         

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    
    const res = await axios.get(`http://localhost:3001/users?email=${email}`);
    if (res.data.length > 0) {
      alert('User already exists.');
    } else {
     
      await axios.post('http://localhost:3001/users', {
        name,
        age,
        email,
        password,
      });
      alert('Registered Successfully!');
      navigate('/');  
    }
  };

  return (
    
    <div style={{ textAlign: 'center', marginLeft: '450px', width:"500px",  backgroundColor:"#d444d4"}}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /><br /><br />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleRegister}>Register</button><br /><br />
      <h5>Already have an account?</h5>
      <button><Link to="/">Back to Login</Link></button> 
    </div>
  );
};

export default RegisterPage;
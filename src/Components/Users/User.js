import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const User = () => {
const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
});
const { name, username, email, phone, website } = user;
const {id} = useParams();
useEffect(() => {
    loadUser();
}, []);
const loadUser = async () =>{
    const res = await axios.get(`http://localhost:3002/users/${id}`)
    setUser(res.data);
}




    return (
        <div>
            <div className="container py-5">
                <Link className="btn btn-primary" to="/">Back to Home</Link>
                <h1 className="display-4">User Id: {id} </h1>
                <hr/>
                <ul className="list-group w-50">
                    <li className="list-group-item">Name: {name}</li>
                    <li className="list-group-item">Username: {username}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                    <li className="list-group-item">Website: {website}</li>
                </ul>
            </div>
        </div>
    )
}

export default User

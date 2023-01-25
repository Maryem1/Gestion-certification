import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register_Instructor() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div>
        
        <div >
     
   <h1> <h4 >WELCOME TO OUR TEAM </h4></h1>

 </div>
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register To Become A Part Of Us</h2>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

<input type="text" name="Prenom" required
                placeholder="Prenom" value={user.Prenom} onChange={onChangeInput} />
               
               <input type="text" name="nom_cours" required
                placeholder="Prenom" value={user.Prenom} onChange={onChangeInput} />
                
                <input type="text" name="Numero Telephone" required
                placeholder="Numero Telephone" value={user.Numero_Telephone} onChange={onChangeInput} />



                <input type="text" name="Nom Cours" required
                placeholder="Nom Cours" value={user.Nom_Cours} onChange={onChangeInput} />

           <input type="text" name="category" required
                placeholder="Category" value={user.category} onChange={onChangeInput} />


                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Register_Instructor
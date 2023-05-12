import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [pseudo,setPseudo]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit = (event) => {
        event.preventDefault();}

  return (
    <>
    <div className='user-connexion'>
        <div className='login-user'>   
    <h2>Connecte toi pour retrouver tes meilleurs scores !</h2>
        <div className='form-container'>
         <form onSubmit={handleSubmit}>
            <div className='form-group'>
             <label> Pseudo : </label>
             <input type="text" value={pseudo} onChange={(event) => setPseudo(event.target.value)}/>
            </div>
            <div className='form-group'>
             <label>Mot de Passe : </label>
             <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className='form-group'>
            <button className='send' type="submit">Envoyer</button>
            </div>
         </form>
         <Link to='/register'>
         <span>Tu n'as pas encore de compte ? crée le ici !</span>
        </Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login
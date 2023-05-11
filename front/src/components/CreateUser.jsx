import { useState } from 'react';
import './CreateUser.css';

const CreateUser = () => {

    const [pseudo,setPseudo]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit = (event) => {
        event.preventDefault();}

  return (
    <div className='user-container'>
        <div className='create-user'>
             <h2>Créer ton compte pour enregistrer et retrouver tes meilleurs résultats !</h2>
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
                <span>Tu as déja un compte ? connecte toi ici</span>
            </div>
        </div>
    </div>
  )
}

export default CreateUser
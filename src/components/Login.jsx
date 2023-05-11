

const Login = () => {
  return (
    <>
    <div className='user-connexion'>
    <h2>Connecte toi pour retrouver tes meilleurs score !</h2>
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
        </div>
    </div>
    </>
  )
}

export default Login
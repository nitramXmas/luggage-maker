import './UserProfile.css'

const users = {
  pseudo: 'Capybara',
  password: 'tototata',
  img: 'https://fastly.picsum.photos/id/372/200/300.jpg?hmac=Ng2Fl0_1eMGEpJhcZtvsqTvSOF7vxR0fxsPI6hPm_nk',
  scores: [{
    id: '1',
    country: 'France',
    score: '100'
  },{
    id: '2',
    country: 'Japan',
    score: '200'
  }
  ,{
    id: '3',
    country: 'Colombia',
    score: '10'
  }
  ,{
    id: '4',
    country: 'Australia',
    score: '190'
  }]
}


const UserProfile = () => {
  
   const scores = users.scores;

  return (
  <div className='user-page'>
    <div className='user-infos'>
      <img className='user-picture' src={users.img} alt={users.pseudo} />
      <h1>{users.pseudo}</h1>
    </div>
    <h2>Tes meilleurs scores par pays: </h2>
    <div className='scores'>
    {
      scores &&
      scores.map(score => 
        <div key={score.id} className='score'>
        <p>{score.country}</p> 
        <p>{score.score}</p>
      </div>)}
    </div>
  </div>);
};

export default UserProfile;
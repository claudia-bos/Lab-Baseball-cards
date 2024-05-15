import React from 'react';
import playerData from './playerData.js';
import {useState} from 'react';

function BaseballCard(props) { 
  
    const [showPicture, setShowPicture] = useState(true)

    const toggleCard = () => {
      setShowPicture(!showPicture)
    }

  if(showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imUrl}/>
      </div>
    ) 
  } else {
    const statsDisplay = []

    for(const [statName, statValue] of Object.entries(props.stats)) {
      statsDisplay.push(
        <p key={statName}>
          {statName}: {statValue}
        </p>
      )
    }
  
    return(
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <p>Team: {props.team}</p>
        <p>Position: {props.position}</p>
        {statsDisplay}
      </div>
    )
    // this part of the code was solve previous of the creation of useStates
    // beacuse of the loop we place it after the else statement as a resul of whether or not 
    //the if statement true
  }

  
// this was previouly there but we commet it out so we can 
// use it inside the useState variable

//  return (
//     <div className="card">
//       <h2>{props.name}</h2>
//       <img src={props.imUrl}/>
//     </div>
//   );
}

function App() {

  const cards = playerData.map((player) => <BaseballCard
  name={player.name}
  team={player.team}
  position={player.position}
  stats={player.stats}
  imUrl={player.imgUrl}
  key={player.cardId}
  
  />)

  return (   
    <>
    {cards}    
    </>
 );
}

export default App;

import React, {useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@material-ui/core'

function TinderCards() {

    const [people,setPeople] = useState([
        {
        name:"Elon Musk",
        url:"https://media.gettyimages.com/photos/elon-musk-founder-and-ceo-of-spacex-participates-in-a-press-at-the-picture-id1215628293?s=2048x2048"
    },
    {
        name:"Jeff Bezos",
        url:"https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
    },
])

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
}

const outOfFrame = (name) => {
    console.log(name + " left the screen!")
}
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>

            {people.map((person) => (
            <TinderCard 
            className='swipe'
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}

            >
                <div style={{backgroundImage:`url(${person.url})` }}
                className="card"
                >
                <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>

        
    </div>
  )
}

export default TinderCards
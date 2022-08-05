import React, { useState } from 'react';
import "./styles/variables.css";

var data = require("./data/sampleData");
function App() {

   // the value of the search field 
   const [name, setName] = useState('');

   // the search result
   const [foundCards, setFoundCards] = useState(data.sampleData);
const filter = (e) => {
  const enteredCardName = e.target.value;

  if (enteredCardName !== '') {
    const results = data.sampleData.filter((card) => {
      return card.name.toLowerCase().startsWith(enteredCardName.toLowerCase());
    });
    setFoundCards(results);
  } else {
    setFoundCards(data.sampleData);
    // If the text field is empty, show all users
  }

  setName(enteredCardName);
};
  return (
    <div className="App">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <div>
      <input type="text" value={name} onChange={filter} className="input" placeholder="Filter By Name"/>
        <div className="row">
        {foundCards && foundCards.length > 0 ? (
          foundCards.map((card) => (
            <div className="column">
            <div className='card' key={card.id}>
           <div className="header"> {card.originType==='automated'? <p style={{color: "#2ebf26"}}> Automated Origin</p> :<p style={{color: "blue"}}> Manual Origin</p> }</div>
           <p className="title">{card.name}</p>
           <p className="header">{card.intents} Intents</p>
           <button className="button viewButton">View</button>
           <button className="button removeButton">Remove</button>
           <p className="footer">Last Updated: {new Date(card.dateUpdated).toDateString()} </p>
         </div>
       </div>
          ))
        ) : (
          <h1>No Cards found!</h1>
        )}
      
       </div>
      </div>
    </div>
  );
}

export default App;

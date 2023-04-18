import logo from './logo.svg';
import './App.css';
import React from 'react';
import lexus from './lexus lc 500.jpeg'

function App(){
  
  
return(
    <div id='container'>
      <img id='image' src={lexus} alt='2023 lexus lc 500'></img>
        <p>The Lexus LC500 interior is a special place, with a great driving position, rich materials, beautiful craftsmanship, excellent front seats, and loads of technology. Some of its ergonomics can be fussy in practice, but the overall ambience suits the LC's concept-car looks. Fit-and-finish is excellent and the optional sport seats are true thrones of spinal support. Certain elements require some acclimation, including the funky, Toyota Prius–like electronic shift lever. The LC's compact trunk and the non-folding rear seats limit its storage space to 5 cubic feet, which is only enough for holding two of our carry-on cases. As attractive as the LC's cabin is, there are not many cubbies for stashing loose items. The center console, however, is adequately sized, and its lid can be adjusted to reveal a second cupholder.</p>
      <button id='alert' onClick={() => alert('You clicked this button')}>Click Me</button>




    </div>


  )}





export default App;

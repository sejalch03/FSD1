import React from 'react';
import './App.css';

import Student from "./Student"
import MyUseEffect from './MyUseEffect';
function App() {
  const h1=<h1>hello world</h1>;
const mystyle={
  color:'yellow',
  backgroundColor:'red'
}
    return (
      // <div style={{backgroundColor:'tomato'}}>
      //   {h1}
      //   <div style={mystyle}>
      //     ABES ENGINEERING COLLEGE
      //   </div>
      //   <div>
      //     <><Student college="ABES ENGG COLLEGE" name="sejal" branch="cse" section="B" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
      //     <><Student college="ABES ENGG COLLEGE" name="swati" branch="cse" section="B" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
      //     <><Student college="ABES ENGG COLLEGE" name="srishh" branch="cse" section="B" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
      //     <><Student college="ABES ENGG COLLEGE" name="tithaye" branch="cse" section="A" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
          
      //   </div>
      // </div>
       
      <div>
        <MyUseEffect/>
      </div>
    )
}
 
export default App;
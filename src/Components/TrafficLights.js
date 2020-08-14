
import React, { useEffect } from 'react'
import styled from 'styled-components'




var trafficStyle = {
    red: {
    backgroundColor: "red"
  },
    yellow: {
    backgroundColor: "yellow"
  },
    green: {
    backgroundColor: "green"
  },
    black: {
    backgroundColor: "black"
  }
};

const TrafficLights = props => {
    const [red, changeRed] = React.useState(trafficStyle.black);
    const [yellow, changeYellow] = React.useState(trafficStyle.black)
    const [green, changeGreen] = React.useState(trafficStyle.black)
    const [next, changeNext] = React.useState("red")

   
    useEffect(() => {
      let interval;
      console.log(props.playing);
      if(props.playing){
       interval =  setTimeout(() => {
        
        changeHandle()
  
         }, 3000)
        }else{
          changeRed(trafficStyle.black);
          changeYellow(trafficStyle.black);
          changeGreen(trafficStyle.black);
          changeNext("red");
         
        }
        return () => {
          clearTimeout(interval);
        };
      },[props.playing,next])

      useEffect(() => {
        if (!props.playing) {
          return;
        }
      },[props.playing])
      

    const changeHandle=()=> {

     if(!props.playing){
    
       return;
     }
    
      switch (next) {
        case "red":
      
            changeRed(trafficStyle.red) 
            changeYellow(trafficStyle.black) 
            changeGreen(trafficStyle.black)
            changeNext("yellow")
        
          break;
        
        case "yellow":
        
            changeRed(trafficStyle.black) 
            changeYellow(trafficStyle.yellow) 
            changeGreen(trafficStyle.black)
            changeNext("green")
       
          break;
        
          
        case "green":

          changeRed(trafficStyle.black) 
          changeYellow(trafficStyle.black) 
          changeGreen(trafficStyle.green)
          changeNext("red")
        
          break;
      }
  
    
    }
  
    return (
        <TrafficLightsBox>
        <TrafficLight style={red}></TrafficLight>
        <TrafficLight style={yellow}></TrafficLight>
        <TrafficLight style={green}></TrafficLight>
        </TrafficLightsBox>
    )
  }

  
  export default TrafficLights
  
  const TrafficLightsBox = styled.div`
  height:10vh;
  padding-top: 0px;
  width: 330px;
  margin-left:auto;
  margin-right:auto;
  background-color:Black;

  display: flex;
  justify-content: center;
  align-items: center;
  `

  const TrafficLight = styled.div`
  margin-top: 25%;
  border: 1px solid #000;
  width: 100px;
  height: 100px;
  float: left;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  margin-left: 5px;
  
  `


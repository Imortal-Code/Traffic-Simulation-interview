
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Play from '../Components/Play'
import Pause from '../Components/Pause'
import TrafficLights from '../Components/TrafficLights'



function TrafficLightsContainer () {
    const [playing, togglePlay] = React.useState(false);
    


    useEffect(() => {
  
      },[])

    
   const handlePlayerClick = () => {
        if (!playing) {
            togglePlay(true);
        } else {
            togglePlay(false);
        }
      }
  
  
    return (
        <div>
        <Box>
           <TrafficLights playing={playing}/>
           <div style={{height:'8%',width:'10%',marginTop:'50%',marginLeft:'50%'}}>{playing? <Pause onPlayerClick={handlePlayerClick} /> : <Play onPlayerClick={handlePlayerClick} />}</div>
       </Box>
       <div><h6 style={{marginLeft:'44%',color:'green'}}>(Click the play icon to start the simulation!)</h6></div>
       </div>
    )
  }

  
  export default TrafficLightsContainer
  
  const Box = styled.div`
  height:80vh;
  padding-top: 0px;
  width: 600px;
  margin-left:auto;
  margin-right:auto;
  background-color:Violet
  
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


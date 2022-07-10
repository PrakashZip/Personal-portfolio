import pr1 from "./images/to-do.png"
import pr2 from './images/tic-tac-toe.png'
import pr3 from './images/keep-app.png'
import pr4 from './images/calc.png'
import pr5 from './images/ui-ux.png'
import pr6 from './images/weatherapp-01.png'
const Projects =({mode})=>{
    return (
        <>
      
      <div className="container-fluid cardback">  
      <h3 className={mode?"skilldark":"skill"}>Projects</h3>
       <div className="project">
            <div id="first" className={mode?"card cardsdark":"card cards"}>
                <div className="cardbody text-center">
                
                <img className={mode?"projectsizedark":"projectsize" }src={pr1}></img>
              <div className="displayinmobile">
              <h3>Online Examination System</h3>
               <button className="viewproject"><i className="fas fa-link link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
              </div>
            </div>
            </div>
            <div className="displayinpc ">
            <div id="sixth" className={mode?"card cardsdark":"card cards"}style={{width:"18rem"}}>
               <h3>Online Examination System</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
            </div>
            </div>
    </div>
        
        
    <div className="project">
    <div className="displayinpc">
            <div id="seventh" className={mode?"card cardsdark":"card cards"} style={{width:"18rem"}}>
               <h3>College Management System</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
            </div>
            </div>
            <div id="second" className={mode?"card cardsdark":"card cards"}>
                <div className="cardbody text-center">
                
                <img className={mode?"projectsizedark":"projectsize" }src={pr2}></img>
                <div className="displayinmobile">
              <h3>College Management System</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
              </div>
            </div>
            </div>
          
    </div>
    <div className="project">
            <div id="third" className={mode?"card cardsdark":"card cards"}>
                <div className="cardbody text-center">
                
                <img className={mode?"projectsizedark":"projectsize" }src={pr3}></img>
                <div className="displayinmobile">
              <h3>Discussion Fourm</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
              </div>
            </div>
            </div>
            <div className="displayinpc">
            <div id="eightth" className={mode?"card cardsdark":"card cards"} style={{width:"18rem"}}>
               <h3>Discussion Fourm</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
            </div>
            </div>
    </div>
    <div className="project">
                <div className="displayinpc">
                        <div id="nineth" className={mode?"card cardsdark":"card cards"} style={{width:"18rem"}}>
                        <h3>Calculator</h3>
                        <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
                        </div>
                        </div>
            <div id="fourth" className={mode?"card cardsdark":"card cards"}>
                <div className="cardbody text-center">
                
                <img className={mode?"projectsizedark":"projectsize" }src={pr4}></img>
                <div className="displayinmobile">
              <h3>Calculator</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
              </div>
            </div>
            </div>
     </div>     
                <div className="project">
            <div id="fifth" className={mode?"card cardsdark":"card cards"}>
                <div className="cardbody text-center">
                
                <img className={mode?"projectsizedark":"projectsize" }src={pr5}></img>
                <div className="displayinmobile">
              <h3>Portfolio UI/UX Design</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
              </div>
            </div>
            </div>
            <div className="displayinpc">
            <div id="tenth" className={mode?"card cardsdark":"card cards"} style={{width:"18rem"}}>
               <h3>Portfolio UI/UX Design</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
            </div>
            </div>
    </div>
      <div className="project">
                <div className="displayinpc">
                        <div id="weatherlink" className={mode?"card cardsdark":"card cards"} style={{width:"18rem"}}>
                        <h3>Weather App</h3>
                        <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
                        </div>
                        </div>
            <div id="weather" className={mode?"card cardsdark":"card cards"}>
                <div className="cardbody text-center">
                
                <img className={mode?"projectsizedark":"projectsize" }src={pr6}></img>
                <div className="displayinmobile">
              <h3>Weather App</h3>
               <button className="viewproject"><i className="fas fa-link"></i> <a href="https://github.com/prakashZip" target="_blank">Source Code</a></button>
              </div>
            </div>
            </div>
     </div>
  
  
    </div>
        </>
    )
} 

export default Projects;
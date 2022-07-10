


const Section2=({mode})=>{
	return(
        <>
        <div id="1st"></div>
	<div className="container aboutme">

		<div className="row justify-content-center aboutbox" >
		
            <div  className="col-md-4 about text-right">
				<a>ABOUT ME</a>
	           </div>
             
	          
	         
	            <div  className="col-md-6 py-md-1 hii"><a>Hi, This is Satya Prakash Sahoo. I am a <strong className={mode?"highdark":"highlight"}>professional Event Planner</strong> and <strong className={mode?"highdark":"highlight"}>Front-end developer</strong>.
				I'm having experience in Hr Management,Event Planning and management having an experience of 2 years organizing 30+ events and connecting 40+ Student organization along with 20+ Universities.
			</a></div>
           
			</div>
			
		</div>
	
        </>
    )
}

export default Section2;
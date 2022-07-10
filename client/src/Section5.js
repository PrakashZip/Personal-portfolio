import cert from './images/sqkas.jpg'
import cert2 from './images/godhuli group.png'
import cert3 from './images/iirwu education.jpeg'

const Section5=({mode})=>{
return (
    <>
   <div id={mode?"interndark":"intern"} className="section"  >
   <div className={mode?"sectitledark":"sectitle"}>
				<a>Work Experience</a>
			</div>
	<div className="container-fluid internback">
		
        
        <div className="row justify-content-center text-center">
			
			<div className="col-md-3 one" >
				<div className={mode?"internshipdark":"internship"}>
					<a><h1>Dy CEO and Director of Human Resources</h1></a>
					<h4>Pentaomnia Pvt. Ltd.</h4>
					<p>3 years+</p>
					<span><a href="" download=""></a></span><br/><br/>
					<a className="a" href="https://www.facebook.com/pentaomnia/" target="_blank">About Team</a>


				</div>
				 	

			</div>
			<div className="col-md-3 two">
				<div className={mode?"internshipdark":"internship"}>
					<a><h1>Chief Operating Officer</h1></a>
					<h4>Tanzanite</h4>
					<p>5 months</p>
					<span className="cer"><a  className="a" href={cert} download="">Experience</a></span><br/><br/>
					<a  className="a" href="https://www.instagram.com/tanzanite.lpu" target="_blank">About Company</a><br/>
					
				</div>
				 	
			</div>
		
		</div>
		
		<div className="row justify-content-center text-center">
			
			<div className="col-md-3 three" >
				<div className={mode?"internshipdark":"internship"}>
					<a><h1 >Advisor</h1></a>
					<h5 className="font">Event Arvisory Services</h5>
					<p>3+ years</p>
					<span className="cer"><a  className="a" href={cert2} download="">Experience</a></span><br/><br/>
					<a  className="a" href="#" target="_blank">About Company</a>
				</div>


			</div>
			<div className="col-md-3 four">
				<div className={mode?"internshipdark":"internship"}>
				<a><h1>Student Placement Coordinator</h1></a>
					<h4>Lovely Professional University</h4>
					<p>6 months</p>
					<span className="cer"><a  className="a" href={cert3} download="">Experience</a></span><br/><br/>
					<a  className="a" href="https://lpu.in" target="_blank">About LPU </a>
				</div>
			</div>
		
		</div>
	</div>
<div id="gall"></div>
	
</div>
    </>
)
}

export default Section5;
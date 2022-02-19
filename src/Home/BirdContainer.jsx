
import { makeStyles } from "@mui/styles";

import './BirdContainer.css';

const useStyle = makeStyles ({
    head: {
		fontFamily: `'Ephesis', cursive`,
	color: 'rgb(24, 36, 29)',
	fontSize: '8rem',
	letterSpacing: '-2px',
	position: 'relative',
	zIndex: '4',
    mixBlendMode: "screen",
    animation: 'fadeIn 2.5s linear forwards',
	},
	
		// "":{
		// 	boxSizing:"border-box"
		// },
		// before:{
		// 	boxSizing:"border-box"
		// },
		// after: {
		// 	boxSizing:"border-box"
		// },
		// container: {
		// 	zIndex:"1",
		// 	position:"relative",
		// 	overflow:"hidden",
		// 	display:"flex",
		// 	alignItems:"center",
		// 	justifyContent:"center",
		// 	minHeight:"40rem",
		// 	backgroundImage:"linear-gradient(to bottom,  rgba(4, 168, 154, 0.577) 0%,rgba(5, 25, 55, 0.577) 100%), url('https://images.unsplash.com/photo-1446824505046-e43605ffb17f')",
		// 	backgroundBlendMode:"soft-light",
		// 	backgroundSize:"cover",
		// 	backgroundPosition:"center center",
		// 	padding:"2rem"
		// },
		// bird:
		// {
		// 	backgroundImage:"url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg)",
		// 	backgroundSize: "auto 100%",
		// 	width: "88px",
		// 	height:"125px",
		// 	willChange:"background-position",
		// 	animationName:"fly-cycle",
		// 	animationTimingFunction: "steps(10)",
		// 	animationIterationCount: "infinite"
		// },
		// bird__one: {
		// 	animationDuration: "1s",
		// 	animationDelay: "1s"
		// },
		// bird__two:{
		// 	animationDuration: "0.9s",
		// 	animationDelay:"-0.75s"
		// },
		// bird__three: {
		// 	animationDuration:"1.25s",
		// 	animationDelay: "-0.25s"
		// },
		// bird__four:{ 
		// 	animationDuration:"1.1s",
		// 	animationDelay:"-0.5s"
		// },
		// bird_container:
		// {
		// 	animationDuration:"14.6s",
		// 	animationDelay:"9.5s" 
		// },
		// bird_container__one:{
		// 	animationDuration:"15s",
		// 	animationDelay:"0"
		// },
		// bird_container__two: {
		// 	animationDuration:"16s",
		// 	animationDelay:"1s"
		// },
		// bird_container__four: {
		// 	animationDuration:"16s",
		// 	animationDelay: "10.25s"}
		
});
const BirdContainer = () => {
  
    const classes = useStyle();

    return(
        <div class="container">
			
	<h1 className={classes.head}>Make Space for Nature</h1>
	
	
	<div class="bird-container bird-container--one">
		<div class="bird bird--one"></div>
	</div>
	
	<div class="bird-container bird-container--two">
		<div class="bird bird--two"></div>
	</div>
	
	<div class="bird-container bird-container--three">
		<div class="bird bird--three"></div>
	</div>
	
	<div class="bird-container bird-container--four">
		<div class="bird bird--four"></div>
	</div>
	
</div>

    );
}


export default BirdContainer;
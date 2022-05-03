import intro from '@Home/IntroCard/Introcard.module.css';


export default function IntroCard() {
	return (
		<div className="inner cover">
			<span className='cover-heading d-flex'>
				Hi, I am
				<h1>Jod</h1>
			</span>
			<h4 className='lead'>Full-Stack Developer | Freelancer</h4>
			<div className='introSocial'></div>
		</div>
	)
}
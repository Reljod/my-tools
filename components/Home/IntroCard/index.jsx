import intro from '@Home/IntroCard/Introcard.module.css';


export default function IntroCard() {
	return (
		<div className={intro.introcard}>
			<span>
				<p>Hi, I am</p>
				<h2>Jod</h2>
			</span>
			<h4>Full-Stack Developer | Freelancer</h4>
			<div className='introSocial'></div>
		</div>
	)
}
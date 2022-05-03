import intro from '@Home/IntroCard/Introcard.module.css';
import styles from './Introcard.module.css'


export default function IntroCard() {
	return (
		<div className="d-flex flex-column align-items-center justify-content-end">
			<div>
				<span className={`lead display-4 ${styles.greetings}`}>
					Hi, I am 
				</span>
				<span className={`lead display-1 mx-2 ${styles.name}`}>
					Jod
				</span>
			</div>
			<h4 className={`${styles.title}`}>Full-Stack Developer | Freelancer</h4>
			<div className='introSocial'></div>
		</div>
	)
}
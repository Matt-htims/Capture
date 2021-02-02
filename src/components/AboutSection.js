import home1 from '../img/home1.png';
import Wave from './Wave';

import { S_CONTAINER, S_DESCRIPTION, S_HIDE, S_IMAGE } from '../styles';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';

const AboutSection = () => {
	return (
		<S_CONTAINER>
			<S_DESCRIPTION>
				<motion.div>
					<S_HIDE>
						<motion.h2 variants={titleAnimation}>We work to make</motion.h2>
					</S_HIDE>
					<S_HIDE>
						<motion.h2 variants={titleAnimation}>
							your <span>dreams</span> come
						</motion.h2>
					</S_HIDE>
					<S_HIDE>
						<motion.h2 variants={titleAnimation}>true.</motion.h2>
					</S_HIDE>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</S_DESCRIPTION>
			<S_IMAGE>
				<motion.img
					variants={photoAnimation}
					initial="hidden"
					animate="show"
					src={home1}
					alt="Man with a camera"
				/>
			</S_IMAGE>
			<Wave />
		</S_CONTAINER>
	);
};

//Styled Components

export default AboutSection;

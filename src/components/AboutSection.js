import home1 from '../img/home1.png';

import { S_CONTAINER, S_DESCRIPTION, S_HIDE, S_IMAGE } from '../styles';

//Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => {
	return (
		<S_CONTAINER>
			<S_DESCRIPTION>
				<motion.div>
					<S_HIDE>
						<motion.h2>We work to make</motion.h2>
					</S_HIDE>
					<S_HIDE>
						<motion.h2>
							your <span>dreams</span> come
						</motion.h2>
					</S_HIDE>
					<S_HIDE>
						<motion.h2>true.</motion.h2>
					</S_HIDE>
				</motion.div>
				<p>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</p>
				<button>Contact Us</button>
			</S_DESCRIPTION>
			<S_IMAGE>
				<img src={home1} alt="Man with a camera" />
			</S_IMAGE>
		</S_CONTAINER>
	);
};

//Styled Components

export default AboutSection;

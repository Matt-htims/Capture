import React from 'react';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';

import styled from 'styled-components';

const ContactUs = () => {
	return (
		<S_CONTACT
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
			style={{ background: '#fff' }}
		>
			<S_TITLE>
				<S_HIDE>
					<motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
				</S_HIDE>
			</S_TITLE>
			<div>
				<S_HIDE>
					<S_SOCIAL variants={titleAnimation}>
						<S_CIRCLE />
						<h2>Send us a message</h2>
					</S_SOCIAL>
				</S_HIDE>
				<S_HIDE>
					<S_SOCIAL variants={titleAnimation}>
						<S_CIRCLE />
						<h2>Email</h2>
					</S_SOCIAL>
				</S_HIDE>
				<S_HIDE>
					<S_SOCIAL variants={titleAnimation}>
						<S_CIRCLE />
						<h2>Social Media</h2>
					</S_SOCIAL>
				</S_HIDE>
			</div>
		</S_CONTACT>
	);
};

const S_CONTACT = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;

	@media (max-width: 1300px) {
		padding: 2rem;
		min-height: 87.5vh;
	}
`;

const S_TITLE = styled.div`
	margin-bottom: 4rem;
	color: black;

	@media (max-width: 1300px) {
		margin-top: 5rem;
	}
`;

const S_HIDE = styled.div`
	overflow: hidden;
`;

const S_CIRCLE = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #353535;
`;

const S_SOCIAL = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`;

export default ContactUs;

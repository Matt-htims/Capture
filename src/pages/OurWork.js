import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//Animations
import { motion } from 'framer-motion';
import {
	pageAnimation,
	fade,
	photoAnimation,
	lineAnimation,
	slider,
	sliderContainer,
} from '../animation';

import { useScroll } from '../components/useScroll';

const OurWork = () => {
	const [element, controls] = useScroll();
	const [element2, controls2] = useScroll();
	return (
		<S_WORK
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
			style={{ background: '#fff' }}
		>
			{/* <motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div> */}
			<S_MOVIE>
				<motion.h2 variants={fade}>The Athlete</motion.h2>
				<motion.div variants={lineAnimation} className="line"></motion.div>
				<Link to="/work/1">
					<S_HIDE>
						<motion.img variants={photoAnimation} src={athlete} alt="athlete" />
					</S_HIDE>
				</Link>
			</S_MOVIE>
			<S_MOVIE
				ref={element}
				variants={fade}
				animate={controls}
				initial="hidden"
			>
				<h2>The Racer</h2>
				<motion.div variants={lineAnimation} className="line"></motion.div>
				<Link to="/work/2">
					<img src={theracer} alt="theracer" />
				</Link>
			</S_MOVIE>
			<S_MOVIE
				ref={element2}
				variants={fade}
				animate={controls2}
				initial="hidden"
			>
				<h2>Good Times</h2>
				<motion.div variants={lineAnimation} className="line"></motion.div>
				<Link to="/work/3">
					<img src={goodtimes} alt="goodtimes" />
				</Link>
			</S_MOVIE>
		</S_WORK>
	);
};

const S_WORK = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;

	@media (max-width: 1300px) {
		padding: 2rem 1.5rem;
	}
	h2 {
		padding: 1rem 0rem;
	}
`;

const S_MOVIE = styled(motion.div)`
	padding-bottom: 10rem;
	.line {
		height: 0.25rem;
		background: #23d997;
		margin-bottom: 3rem;
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const S_HIDE = styled.div`
	overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`;

const Frame2 = styled(Frame1)`
	background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
	background: #8effa0;
`;

export default OurWork;

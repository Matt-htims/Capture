import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const OurWork = () => {
	return (
		<S_WORK
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
			style={{ background: '#fff' }}
		>
			<S_MOVIE>
				<h2>The Athlete</h2>
				<div className="line"></div>
				<Link to="/work/1">
					<img src={athlete} alt="athlete" />
				</Link>
			</S_MOVIE>
			<S_MOVIE>
				<h2>The Racer</h2>
				<div className="line"></div>
				<Link to="/work/2">
					<img src={theracer} alt="theracer" />
				</Link>
			</S_MOVIE>
			<S_MOVIE>
				<h2>Good Times</h2>
				<div className="line"></div>
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
	h2 {
		padding: 1rem 0rem;
	}
`;

const S_MOVIE = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.25rem;
		background: #cccccc;
		margin-bottom: 3rem;
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

export default OurWork;

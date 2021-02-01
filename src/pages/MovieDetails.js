import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import { MovieState } from '../movieState';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetails = () => {
	const { id } = useParams();

	//State
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState({}); //Could be good idea to put a placeholder img and title to stop any errors if there is nothing matching id

	//useEffect
	useEffect(() => {
		const currentMovie = movies.find(m => m.id === id);
		setMovie(currentMovie);
	}, [movies, id]);

	return (
		<S_DETAILS
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
		>
			<S_HEADLINE>
				<h2>{movie.title}</h2>
				<img src={movie.mainImg} alt="movie" />
			</S_HEADLINE>
			<S_AWARDS>
				{!movie.awards ? (
					<Load />
				) : (
					movie.awards.map(a => (
						<Award key={a.title} title={a.title} description={a.description} />
					))
				)}
			</S_AWARDS>
			<S_IMAGE_DISPLAY>
				<img src={movie.secondaryImg} alt="movie" />
			</S_IMAGE_DISPLAY>
		</S_DETAILS>
	);
};

const S_DETAILS = styled(motion.div)`
	color: white;
`;

const S_HEADLINE = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const S_AWARDS = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
`;

const S_AWARD = styled.div`
	padding: 5rem;
	h3 {
		font-size: 2rem;
	}
	.line {
		width: 100%;
		background: #23d997;
		height: 0.25rem;
		margin: 1rem 0rem;
	}
	p {
		padding: 2rem 0rem;
	}
`;

const S_IMAGE_DISPLAY = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

//components
const Load = () => {
	return (
		<div>
			<p>loading...</p>
		</div>
	);
};

//Award Component
const Award = ({ title, description }) => {
	return (
		<S_AWARD>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</S_AWARD>
	);
};

export default MovieDetails;

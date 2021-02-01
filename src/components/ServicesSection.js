import React from 'react';

//Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

//styled
import styled from 'styled-components/macro';
import { S_CONTAINER, S_DESCRIPTION, S_IMAGE } from '../styles';

const ServicesSection = () => {
	return (
		<S_SERVICES>
			<S_DESCRIPTION>
				<h2>
					High <span>quality</span> service.
				</h2>
				<S_CARDS>
					<S_CARD>
						<div className="icon">
							<img src={clock} alt="icon" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</S_CARD>
					<S_CARD>
						<div className="icon">
							<img src={teamwork} alt="icon" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</S_CARD>
					<S_CARD>
						<div className="icon">
							<img src={diaphragm} alt="icon" />
							<h3>Pro Grade Gear</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</S_CARD>
					<S_CARD>
						<div className="icon">
							<img src={money} alt="icon" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</S_CARD>
				</S_CARDS>
			</S_DESCRIPTION>
			<S_IMAGE>
				<img src={home2} alt="Camera" />
			</S_IMAGE>
		</S_SERVICES>
	);
};

const S_SERVICES = styled(S_CONTAINER)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 3rem 0rem 4rem 0rem;
	}
`;

const S_CARDS = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const S_CARD = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;

		h3 {
			margin-left: 1rem;
			background: white;
			color: black;
			padding: 1rem;
		}
	}
`;

export default ServicesSection;

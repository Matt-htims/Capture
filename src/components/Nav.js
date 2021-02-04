import React from 'react';
import styled from 'styled-components/macro';

import { motion } from 'framer-motion';

import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
	return (
		<S_NAV>
			<h1 id="logo">
				<Link to="/">Capture</Link>
			</h1>
			<ul>
				<li>
					<NavLink activeClassName="selected" to="/aboutus">
						About Us
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/work">
						Our Work
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/contact">
						Contact Us
					</NavLink>
				</li>
			</ul>
		</S_NAV>
	);
};

const S_NAV = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 10;

	a {
		color: white;
		text-decoration: none;
	}

	ul {
		display: flex;
		list-style: none;
	}

	#logo {
		font-weight: lighter;

		a {
			font-size: 1.7rem;
		}
	}

	li {
		padding-left: 10rem;
		position: relative;
	}

	@media (max-width: 1300px) {
		flex-direction: column;
		padding: 1rem;
		ul {
			padding: 2rem;
			justify-content: space-around;
			width: 100%;
		}
		li {
			padding: 0;
		}

		#logo {
			padding-right: 1.1rem;
			margin: 2rem;
		}
	}

	.selected {
		border-bottom: solid 2px #23d997;
	}
`;

export default Nav;

import React from 'react';
import styled from 'styled-components/macro';

import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
	return (
		<S_NAV>
			<h1>
				<Link to="/">Capture</Link>
			</h1>
			<ul>
				<li>
					<NavLink to="/">1. About Us</NavLink>
				</li>
				<li>
					<NavLink to="/work">2. Our Work</NavLink>
				</li>
				<li>
					<NavLink to="/contact">3. Contact Us</NavLink>
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
	background-color: #282828;

	a {
		color: white;
		text-decoration: none;
	}

	ul {
		display: flex;
		list-style: none;
	}

	#logo {
		font-size: 1.5rem;
		font-weight: lighter;
	}

	li {
		padding-left: 10rem;
		position: relative;
	}
`;

export default Nav;

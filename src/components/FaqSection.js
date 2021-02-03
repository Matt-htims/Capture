import React, { useState } from 'react';

import Toggle from './Toggle';

import { AnimateSharedLayout } from 'framer-motion';

import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

//styled
import styled from 'styled-components/macro';
import { S_CONTAINER } from '../styles';

const FaqSection = () => {
	const [element, controls] = useScroll();
	return (
		<S_FAQ
			variants={scrollReveal}
			ref={element}
			animate={controls}
			initial="hidden"
		>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="How Do I Start?">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
							rerum.
						</p>
					</div>
				</Toggle>
				<Toggle title="Daily Schedule">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
							rerum.
						</p>
					</div>
				</Toggle>
				<Toggle title="Different Payment Methods">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
							rerum.
						</p>
					</div>
				</Toggle>
				<Toggle title="What Products Do You Offer?">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
							rerum.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</S_FAQ>
	);
};

const S_FAQ = styled(S_CONTAINER)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}

	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default FaqSection;

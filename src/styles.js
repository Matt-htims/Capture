import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const S_CONTAINER = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;

export const S_DESCRIPTION = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
`;

export const S_IMAGE = styled.div`
	flex: 1;
	overflow: hidden;

	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

export const S_HIDE = styled.div`
	overflow: hidden;
`;

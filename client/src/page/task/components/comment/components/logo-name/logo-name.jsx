import styled from 'styled-components';

const LogoNameContainer = ({ className, children }) => {
	const firstLetter = children ? children.charAt(0) : ''

	return <div className={className}>{firstLetter}</div>;
};

export const LogoName = styled(LogoNameContainer)`
	width: 10px;
	height: 10px;
	border: 1px solid #563de4;
	border-radius: 50%;
	padding: 10px;
	font-size: 24px;
	font-weight: bold;
	background-color: #563de4;
	color: white;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 10px 0 0;
`;

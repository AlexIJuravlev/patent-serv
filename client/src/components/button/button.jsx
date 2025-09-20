import styled from "styled-components";

const ButtonContainer = ({ className , children, width, size, ...props}) => {
	return (
		<button className={className} {...props} width={width} size={size}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ size = '18px' }) => size};
	height: 32px;
	background-color: #eee;
	border: 1px solid black;
	text-decoration: none;
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

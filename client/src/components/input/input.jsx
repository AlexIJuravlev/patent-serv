import { forwardRef } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/display-name
const InputContainer = forwardRef(({ className,width, ...props }, ref) => {
	return <input className={className} {...props} width={width} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: 40px;
	padding: 10px;
	border: 1px solid black;
	border-radius: 20px;
	margin: 0 0 10px;
	font-size: 18px;
`;

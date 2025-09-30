import styled from "styled-components"
import { Bar, ControlPanel } from "./components";

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Bar/>
			<ControlPanel/>
		</header>
	);
}

export const Header = styled(HeaderContainer)`
	background-color: #563de4;
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 100%;
	height: 50px;
	z-index: 100;


`;

import styled from "styled-components"
import { Button } from "../../../../components"
import { Link } from "react-router"

const EnterContainer = ({className}) => {
	return (
		<div className={className}>
			<Button>
				<Link to='/login'>Авторизация</Link>
			</Button>
		</div>
	)
}

export const Enter = styled(EnterContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	height: 100vh;
	width: 150px;

	button {
		border-radius: 15px;
		background-color: #563de4;
		transition: 0.2s;
	}

	button:hover {
		box-shadow: 6px 9px 9px -6px black;
		transition: 0.2s;
	}

	a {
		text-decoration: none;
		color: white;
		font-size: 16px;
		transition: 0.2s;
	}

	a:hover {
		font-size: 17px;
		transition: 0.2s;
	}
`;

import styled from "styled-components"
import { Link } from "react-router";

const BurgerContainer = ({className, setIsOpenMenu}) =>{
	return (
		<div className={className}>
			<Link to='/' onClick={() => setIsOpenMenu(false)}>
				Главная
			</Link>
			<Link to='/newTodo' onClick={() => setIsOpenMenu(false)}>
				Создать задачу
			</Link>
			<Link to='/users' onClick={() => setIsOpenMenu(false)}>
				Все сотрудники
			</Link>
		</div>
	);
}

export const Burger = styled(BurgerContainer)`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 100%;
	left: 0;
	border: 1px solid black;
	a {
		background-color: #563de4;
		border: 1px solid white;
		border-collapse: collapse;
	}
`;

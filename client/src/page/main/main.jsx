import styled from 'styled-components';
import { ROLE } from '../../constant';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { Enter, MainTodo } from './components';
import { TodoList } from '../todo-list/todo-list';

const MainContainer = ({ className }) => {
	const roleId = useSelector(selectUserRole);

	return (
		<div className={className}>
			{roleId === ROLE.GUEST ? (
				<Enter />
			) : roleId === ROLE.READ ? (
				<TodoList />
			) : (
				<MainTodo />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)``;

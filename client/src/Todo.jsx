import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import { Header } from './components';
import { Authoriation, Main, NewTask, Register, Task, TodoList, Users, Error } from './page';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './action';

const App = styled.div`
	display: flex;
	background-color: white;

`;
const Page = styled.div`
	padding: 50px 0 20px;
	width: 1200px;
	margin: 0 auto;
	background-color: white;
`;

export const Todo = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const tokenJSON = sessionStorage.getItem('userData');

		if (!tokenJSON) {
			return;
		}

		const token = JSON.parse(tokenJSON);

		dispatch(
			setUser({
				...token,
			}),
		);
	}, [dispatch]);

	return (
		<App>
			<Header />
			<Page>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/login' element={<Authoriation />} />
					<Route path='/register' element={<Register />} />
					<Route path='/todos/:userId' element={<TodoList />} />
					<Route path='/todos/:userId/:todoId' element={<Task />} />
					<Route path='/todos/:userId/:todoId/edit' element={<Task />} />
					<Route path='/newTodo' element={<NewTask />} />
					<Route path='/users' element={<Users />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Page>
		</App>
	);
};

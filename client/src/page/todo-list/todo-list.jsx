import styled from 'styled-components';
import { TableList, TaskUser } from './components';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import {request} from '../../utils/request'
import { Loader } from '../../components';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../selectors';

const TodoListContainer = ({ className }) => {
	const params = useParams();
	const [todoListUser, setTodoListUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate()
	const userId = useSelector(selectUserId)


	useEffect(() => {
		setIsLoading(true);
			request(`/api/todos/${params.userId || userId}`)
				.then((loadedTodo) => {
					if (loadedTodo.error) {
						console.error(loadedTodo.error);
					}
					if (
						JSON.stringify(loadedTodo?.todo) !== JSON.stringify(todoListUser)
					) {
						setTodoListUser(loadedTodo.todo);
					}
				})
				.catch(() => {
					navigate('/*');
				})
				.finally(() => {
					setIsLoading(false);
				});
	}, [ params.id, todoListUser, navigate, userId]);



	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<TableList />
					{todoListUser.map(
						({
							id,
							deadline,
							content,
							published_at,
							title,
							done,
							userId,
						}) => (
							<TaskUser
								key={id}
								id={id}
								deadline={deadline}
								content={content}
								published_at={published_at}
								title={title}
								done={done}
								userId={userId}
							/>
						),
					)}
				</>
			)}
		</div>
	);
};

export const TodoList = styled(TodoListContainer)`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
`;

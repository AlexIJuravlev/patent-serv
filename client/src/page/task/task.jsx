import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import { todoTodoSelect } from '../../selectors';
import { useEffect, useLayoutEffect, useState } from 'react';
import { deleteTodos, loadTodoData } from '../../action';
import { TaskInfo, Comments, TaskForm } from './components';
import { Loader } from '../../components';

const TaskContainer = ({ className }) => {
	const todo = useSelector(todoTodoSelect);
	const [isLoading, setIsLoading] = useState(true);
	const isEditing = useMatch('/todos/:userId/:todoId/edit');
	const navigate = useNavigate()
	const {userId, todoId} = useParams()

	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		dispatch(deleteTodos())
		setTimeout(() => {
			dispatch(loadTodoData(userId, todoId))
				.then(() => {
					setIsLoading(false);
				})
				.catch(() => {
					setIsLoading(false);
					navigate('/*');
				});
		}, 300);

	}, [dispatch, navigate]);


	const SpecialFormTask = isEditing ? (
		<TaskForm todo={todo} />
	) : (
		<div className={className}>
			<TaskInfo todo={todo} />
			<Comments comment={todo.comment} id={todo.id} />
		</div>
	);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
SpecialFormTask
			)}
		</>
	);
};

export const Task = styled(TaskContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

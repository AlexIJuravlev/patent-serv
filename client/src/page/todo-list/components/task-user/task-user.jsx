import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { upgradeTodoAsync } from '../../../../action/upgrade-todo-async';

const TaskUserContainer = ({
	className,
	id: todoId,
	deadline,
	content,
	title,
	done,
	userId,
}) => {
	const [isCheked, setIsCheked] = useState(done);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleChech = () => {
		const newCheked = !isCheked;
		setIsCheked(newCheked);
		dispatch(upgradeTodoAsync(userId, todoId, { done: newCheked }));
	};

	const pageOfTask = () => {
		navigate(`/todos/${userId}/${todoId}`);
	};

	return (
		<div className={className}>
			<div className='box-task'>
				<button className='box-btn'>
					<div className='box-title' onClick={pageOfTask}>
						{title}
					</div>
				</button>
				<div className='box-deadline'>{deadline}</div>
				<div className='box-content'>{content}</div>
				<input
					className='box-check'
					type='checkbox'
					checked={isCheked}
					onChange={handleChech}
				/>
			</div>
		</div>
	);
};
export const TaskUser = styled(TaskUserContainer)`
	display: flex;
	margin: 30px auto;
	max-width: 85%;

	position: relative;

	a {
		text-decoration: none;
		color: white;
		border: 1px solid black;
		border-radius: 25px;
		background-color: #563de4;
		padding: 5px 0 5px 5px;
	}

	.box-btn {
		color: white;
		font-size: 16px;
		background-color: #563de4;
		border-radius: 25px;
		width: 150px;
		height: 50px;
		cursor: pointer;
	}

	.box-task {
		border: 1px solid black;
		border-radius: 25px;
		display: flex;
		align-items: center;
		text-align: center;
		margin: 0 30px;
		padding: 5px 40px;
	}

	.box-deadline {
		width: 100px;
		margin: 0 20px 0 30px;
	}

	.box-check {
		margin: 0 0 0 100px;
	}

	.box-content {
		width: 450px;
		margin: 0 auto;
		font-size: 18px;
		text-align: center;
		border: none;
		resize: none;
	}
`;

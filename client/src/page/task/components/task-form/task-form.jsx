import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { todoCheckSelect } from '../../../../selectors';
import { useState } from 'react';
import { ControlUnit } from '../task-info/components';
import { upgradeTodoAsync } from '../../../../action';
import { useNavigate } from 'react-router';

const TaskFormContainer = ({
	className,
	todo: {id: todoId, title, content, deadline, publishedAt, userId },
}) => {
	const check = useSelector(todoCheckSelect);

	const [titleTask, setTitleTask] = useState(title);
	const [deadlineDateTask, setDeadlineDateTask] = useState(deadline.slice(0, 10));
	const [deadlineTimeTask, setDeadlineTimeTask] = useState(deadline.slice(11, 16));
	const [contentTask, setСontentTask] = useState(content);
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const newTitleTask = ({ target }) => setTitleTask(target.value);
	const newDeadlineDateTask = ({ target }) => setDeadlineDateTask(target.value);
	const newDeadlineTimeTask = ({ target }) => setDeadlineTimeTask(target.value);
	const newContentTask = ({ target }) => setСontentTask(target.value);
	const deadlineTask = deadlineDateTask + ' ' + deadlineTimeTask

	const data = {
		title: titleTask,
		deadline: deadlineTask,
		content: contentTask,
	};


	const saveEditTido = () => {
		dispatch(upgradeTodoAsync(userId, todoId, data));
		navigate(`/todos/${userId}/${todoId}`)
	}


	return (
		<div className={className}>
			<ControlUnit icon={'fa-save'} onClick={saveEditTido}/>

			<div className='task_box'>
					<input
						className='title_task'
						onChange={newTitleTask}
						value={titleTask}
						placeholder='Название задачи...'
					/>

				<div className='task_time'>
					<div className='published_at'>
						<div>Дата создания</div>
						<div className='published_at_content'>{publishedAt}</div>
					</div>
					<div className='deadline'>
						<div>Срок выполнения</div>
						<input
							type='date'
							className='deadline_date'
							onChange={newDeadlineDateTask}
							value={deadlineDateTask}
							placeholder='Срок задачи'
						/>
						<input
							type='time'
							className='deadline_time'
							onChange={newDeadlineTimeTask}
							value={deadlineTimeTask}
							placeholder='Срок задачи'
						/>
					</div>
				</div>
				<div className='task_info'>
					<div>
						<div>Описание задачи</div>
						<textarea
							className='content'
							onChange={newContentTask}
							value={contentTask}
							placeholder='Описание'
						/>
					</div>
					<div className='done'>
						<div>Статус выполнения</div>
						<input
							type='checkbox'
							className='done_check'
							checked={check}
							readOnly
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const TaskForm = styled(TaskFormContainer)`
	width: 70%;
	margin: 50px auto;
	border: 1px solid black;

	.task_box {
		margin: 40px;
	}

	.title_task {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: bold;
		font-size: 24px;
		margin: 20px 0 40px;
	}
	.task_time {
		display: flex;
		justify-content: space-between;
		text-align: center;
		margin: 20px 80px;
	}

	.task_info {
		display: flex;
		justify-content: space-between;
		margin: 50px 80px;
	}

	.content {
		width: 200px;
		overflow-wrap: break-word;
		margin: 10px 0 0 0;
		border: 1px solid black;
		resize: none;
	}

	.done {
		text-align: center;
	}

	.done_check {
		margin: 10px 0 0 0;
	}

	.published_at {
		margin: 0 0 0 15px;
	}
	.published_at_content {
		margin: 10px 0 0 0;
	}

	.deadline {
		margin: 0 10px 0 0;
	}

	.deadline_date{
		width: 100px;
		height: 20px;
	}

`;

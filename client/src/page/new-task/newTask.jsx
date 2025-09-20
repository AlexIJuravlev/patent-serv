import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ControlUnit } from '../task/components/task-info/components';
import { request } from '../../utils/request';
import { ROLE } from '../../constant';
import { useDispatch } from 'react-redux';
import { newTodoAsync } from '../../action';

const NewTaskContainer = ({ className }) => {
	const [titleTask, setTitleTask] = useState('');
	const [deadlineDateTask, setDeadlineDateTask] = useState('');
	const [deadlineTimeTask, setDeadlineTimeTask] = useState('');
	const [contentTask, setСontentTask] = useState('');
	const deadlineTask = deadlineDateTask + ' ' + deadlineTimeTask;

	const navigate = useNavigate();
	const [selectUser, setSelectUser] = useState([]);
	const [user, setUser] = useState('');
	const dispatch = useDispatch()




	const newTitleTask = ({ target }) => setTitleTask(target.value);
	const newDeadlineDateTask = ({ target }) => setDeadlineDateTask(target.value);
	const newDeadlineTimeTask = ({ target }) => setDeadlineTimeTask(target.value);
	const newContentTask = ({ target }) => setСontentTask(target.value);


	useEffect(() => {
		request('/api/users').then((loadedUser) => {
			setSelectUser(loadedUser.data);
		});
	}, []);


	const saveEditTodo = () => {
				dispatch(
					newTodoAsync({
						content: contentTask,
						title: titleTask,
						deadline: deadlineTask,
						userId: user,
					}),
				).then((todoData) => {
					if (todoData && todoData.userId && todoData.id) {
						navigate(`/todos/${todoData.userId}/${todoData.id}`);
					}
				});
	};

	const selectValue = ({target}) => {
		setUser(target.value)
	}

		const filterName = selectUser.filter((user) => user.roleId !== ROLE.ADMIN);


	return (
		<div className={className}>
			<ControlUnit icon={'fa-save'} onClick={saveEditTodo} />

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
						<div className='published_at_content'></div>
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
					<div className='select'>
						<div>Ответственный сотрудник</div>
						<select
							className='select_user'
							value={user}
							onChange={selectValue}
						>
							{filterName.map(({ id: userId, login }) => (
								<option key={userId} value={userId}>
									{login}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export const NewTask = styled(NewTaskContainer)`
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

	.select {
		text-align: center;
	}

	.select_user {
		margin: 10px 0 0 0;
		text-transform: capitalize;
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

	.deadline_date {
		width: 100px;
		height: 20px;
	}
`;

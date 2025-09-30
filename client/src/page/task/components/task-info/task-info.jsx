import styled from 'styled-components';
import { ControlUnit } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { useNavigate, useParams } from 'react-router';
import { ROLE } from '../../../../constant';
import { useState } from 'react';
import { updateDoneTodo } from '../../../../action';


const TaskInfoContainer = ({
	className,
	todo: { title, content, deadline, publishedAt, done },
}) => {
	const [isCheked, setIsCheked] = useState(done)
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const dispatch = useDispatch()
	const {userId, todoId} = useParams()



		const handleChech = () => {
			const newCheked = !isCheked
			setIsCheked(newCheked);
			dispatch(updateDoneTodo(userId, todoId, { done: newCheked }));
		};


	const editPage = () => {
		navigate('./edit');
	};

	return (
		<div className={className}>
			{roleId === ROLE.ADMIN ? (
				<ControlUnit onClick={editPage} icon={'fa-pencil-square-o'} />
			) : (
				''
			)}

			<div className='task-box'>
				<h2>{title}</h2>
				<div className='task-time'>
					<div className='published_at'>
						<div>Дата создания</div>
						<div className='published_at_content'>{publishedAt}</div>
					</div>
					<div className='deadline'>
						<div>Срок выполнения</div>
						<div className='deadline_content'>{deadline}</div>
					</div>
				</div>
				<div className='task-info'>
					<div>
						<div>Описание задачи</div>
						<div className='content'>{content}</div>
					</div>
					<div className='done'>
						<div>Статус выполнения</div>
						<input
							type='checkbox'
							className='done_check'
							checked={isCheked}
							onChange={handleChech}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const TaskInfo = styled(TaskInfoContainer)`
	width: 70%;
	margin: 50px auto;
	border: 1px solid black;

	.task-box {
		margin: 40px;
	}

	h2 {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 20px 0 40px;
	}
	.task-time {
		display: flex;
		justify-content: space-between;
		text-align: center;
		margin: 20px 80px;
	}

	.task-info {
		display: flex;
		justify-content: space-between;
		margin: 50px 80px;
	}

	.content {
		width: 200px;
		margin: 10px 0 0 0;
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

@media (max-width: 550px) {
		width: 90%;
		max-width: 350px;
		margin: 20px auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.task-box {
			margin: 20px;
			width: 100%;
		}

		h2 {
			width: 100%;
			margin: 10px 0 30px;
			text-align: center;
		}

		.task-time {
			flex-direction: column;
			margin: 20px 0;
			gap: 20px;
		}

		.task-info {
			flex-direction: column;
			margin: 30px 0;
			gap: 30px;
			align-items: center;
		}

		.content {
			width: 100%;
			max-width: 280px;
			word-wrap: break-word;
			margin: 10px 0 0 0;
			text-align: center;
		}

		.published_at,
		.deadline {
			margin: 0;
			text-align: center;
		}

		.published_at_content,
		.deadline_content {
			margin: 5px 0 0 0;
			font-weight: bold;
		}

		.done_check {
			margin: 15px 0 0 0;
			transform: scale(1.8);
		}
	}
`;

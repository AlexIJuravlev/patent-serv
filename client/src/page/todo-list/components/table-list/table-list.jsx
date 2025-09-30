import styled from 'styled-components';

const TableListContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className='task'>Задача</div>
			<div className='deadline'>Срок</div>
			<div className='comment'>Коментарий</div>
			<div className='done'>Исполнено</div>
		</div>
	);
};
export const TableList = styled(TableListContainer)`
	display: flex;
	text-align: center;
	margin: 60px auto;
	width: 73%;

	.task {
		min-width: 150px;
	}

	.deadline {
		min-width: 150px;
	}

	.done {
		min-width: 210px;
	}
	.comment {
		min-width: 450px;
	}

	@media (max-width: 550px) {
		display: none;
	}

	@media (max-width: 780px) {
		margin: 30px 0 0;

		.task {
			min-width: 100px;
			margin: 0 0 0 20px;
		}

		.deadline {
			min-width: 100px;
			margin: 0 0 0 40px;
		}

		.done {
			min-width: 100px;
		}
		.comment {
			min-width: 200px;
			margin: 0 0 0 40px;
		}
	}
`;

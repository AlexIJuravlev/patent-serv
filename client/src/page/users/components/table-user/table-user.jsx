import styled from 'styled-components';

const TableUserContainer = ({ className }) => {
	return (
		<div className={className}>
			<h2>Сотрудники</h2>
			<div className='info'>
				<div>Пользователь</div>
				<div>Роль</div>
				<div>Сохранить</div>
				<div>Удалить</div>
			</div>
		</div>
	);
};

export const TableUser = styled(TableUserContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 15px -10px;

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40px 0 20px;
	}

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 95%;
		margin: 0 0 0 20px;
	}

	@media (max-width: 550px) {
		.info {
			width: 95%;
		}

		h2 {
			margin: 40px 0 20px 20px;
		}
	}
`;

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
	flex-direction: column;
	margin: 15px -10px;
	h2 {
		display: flex;
		justify-content: center;
		margin: 40px 0 20px;
	}

	.info {
		display: flex;
		justify-content: space-between;
		margin: 0 10px;
		width: 100%;
	}


`;

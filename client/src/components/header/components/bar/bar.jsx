import styled from 'styled-components';
import { Link, useNavigate } from 'react-router';
import { Icon } from '../../../icon/icon';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constant';

const BarContainer = ({ className }) => {
	const navigate = useNavigate()
	const role = useSelector(selectUserRole)

	return (
		<div className={className}>
			{role === ROLE.GUEST ? (
				<></>
			) : (
				<>
					<Icon
						id='fa-arrow-circle-left'
						margin='0 0 0 0px'
						color='white'
						size='20px'
						onClick={() => navigate(-1)}
					/>
					{role === ROLE.ADMIN ? (
						<>
							<Link to='/'>Главная</Link>
							<Link to='/newTodo'>Создать задачу</Link>
							<Link to='/users'>Все сотрудники</Link>
						</>
					) : (
						<Link to='/'>Главная</Link>
					)}
				</>
			)}
		</div>
	);
};

export const Bar = styled(BarContainer)`
	display: flex;
	align-items: center;
	width: 25%;
	margin: 0 0 0 60px;

	a {
		position: relative;
		text-decoration: none;
		color: white;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
	}

	a:after,
	a:before {
		content: '';
		position: absolute;
		bottom: -5px;
		width: 0;
		height: 1px;
		transition: width 0.2s ease;
		background-color: white;
	}

	a:before {
		left: 50%;
	}

	a:after {
		right: 50%;
	}

	a:hover:before,
	a:hover:after {
		width: 50%;
	}
`;

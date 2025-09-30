import styled from 'styled-components';
import { Link, useNavigate } from 'react-router';
import { Icon } from '../../../icon/icon';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constant';
import { useState } from 'react';
import { Burger } from '../burger/burger';

const BarContainer = ({ className }) => {
	const navigate = useNavigate()
	const role = useSelector(selectUserRole)
	const [isOpenMenu, setIsOpenMenu] = useState(false)

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
					{role === ROLE.ADMIN || role === ROLE.MODERATOR ? (
						<>
							<div className='burger'>
								<Icon
									id='fa-bars'
									margin='0 0 0 20px'
									color='white'
									size='20px'
									onClick={() => setIsOpenMenu(!isOpenMenu)}
								/>
								{isOpenMenu ? <Burger setIsOpenMenu={setIsOpenMenu}/> : ''}
							</div>
							<div className='dekstop'>
								<Link to='/'>Главная</Link>
								<Link to='/newTodo'>Создать задачу</Link>
								<Link to='/users'>Все сотрудники</Link>
							</div>
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

	.burger {
		display: none;
	}

	.dekstop {
		display: flex;
		justify-content: center;
		align-items: center;
	}

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

	@media (max-width: 550px) {
		margin: 0 0 0 20px;
		.dekstop {
			display: none;
		}
		.burger {
			display: flex;
		}
	}
`;

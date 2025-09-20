import styled from 'styled-components';
import { ROLE } from '../../../../constant';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserRole,
	selectUserName,
	selectUserJobTitle,
} from '../../../../selectors';
import { Icon } from '../../../icon/icon';
import { logout } from '../../../../action';

const UserName = styled.div`
	color: white;
	text-transform: uppercase;
	margin: 0 0 0 55px;
	font-size: 20px;
`;

const JobTitle = styled.div`
	color: white;
	font-size: 20px;
	margin: -5px 15px 0 0;
`;

const ControlPanelContainer = ({ className }) => {
	const roleId = useSelector(selectUserRole);
	const user = useSelector(selectUserName);
	const jobTitle = useSelector(selectUserJobTitle);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogout = () => {
		dispatch(logout());
		navigate('/');
		sessionStorage.clear();
	};

	return (
		<div className={className}>
			{roleId === ROLE.GUEST ? (
				<div className='welcom'>Добро пожаловать</div>
			) : (
				<>
					<div className='data'>
						<UserName>{user}</UserName>
						<JobTitle>{jobTitle}</JobTitle>
					</div>
					<Icon
						id='fa-sign-out'
						margin='7px 50px 0 20px'
						color='white'
						onClick={onLogout}
					/>
				</>
			)}
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;

	.welcom {
		color: white;
		font-size: 22px;
		margin: 7px 60px 0 0;
	}

	button {
		margin: 10px 50px 0 0;
		padding: 15px;
		border-radius: 10px;
		transition: 0.2s;
	}

	.data {
		display: flex;
		flex-direction: column;
	}

	a {
		position: relative;
		text-decoration: none;
		display: flex;
		justify-content: space-between;
		padding: 0 5px;
	}

	a:after,
	a:before {
		content: '';
		position: absolute;
		bottom: 1px;
		width: 0;
		height: 2px;
		transition: width 0.2s ease;
		background-color: #563de4;
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

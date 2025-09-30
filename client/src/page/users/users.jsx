import styled from 'styled-components';
import { TableUser, User } from './components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constant';
import { request } from '../../utils/request';


const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const userRole = useSelector(selectUserRole);

	const loadUserAndRole = () => {
Promise.all([request('/api/users/roles'), request('/api/users')]).then(
			([roleRes, userRes]) => {
				if (roleRes.error || userRes.error) {
					setErrorMessage(roleRes.error || userRes.error);
					return;
				}


				setRoles(roleRes.data);
				setUsers(userRes.data);
			},
		);
	}

	useEffect(() => {

		loadUserAndRole()

	}, [userRole]);


	return (
		<div className={className}>
			<TableUser />
			{errorMessage ? (
				<div className='error'>Ошибка прав доступа</div>
			) : (
				users.map(({ login, id, roleId }) => (

						<User
							key={id}
							id={id}
							roles={roles.filter((role) => Number(role.id) !== ROLE.GUEST)}
							login={login}
							role_id={roleId}
							loadUsers={loadUserAndRole}
						/>
				))
			)}
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	max-width: 500px;

	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		color: red;
		font-size: 22px;
	}

	@media (max-width: 550px) {
		width: 85%;
		margin: 0 10px;
	}
`;

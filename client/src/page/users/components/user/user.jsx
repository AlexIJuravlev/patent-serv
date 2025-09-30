import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { request } from '../../../../utils/request';

const UserContainer = ({ className, login, role_id, roles, id, loadUsers }) => {
	const [selectRoleId, setSelectRoleId] = useState(role_id);
	const [initialRole, setInitialRole] = useState(role_id);
	const [selectJobId, setSelectJobId] = useState('');

	const compareMeaning = selectRoleId === initialRole;

	useLayoutEffect(() => {
		const roleName = roles.find(({ id }) => Number(id) === selectRoleId);
		setSelectJobId(roleName.name);
	}, [roles, selectRoleId]);

	const onJobChange = ({ target }) => {
		setSelectRoleId(Number(target.value));
	};

	const saveRole = () => {
		request(`/api/users/${id}`, 'PATCH', {
			roleId: selectRoleId,
			job: selectJobId,
		}).then(() => setInitialRole(selectRoleId));
	};

	const deleteUser = () => {
		request(`/api/users/${id}`, 'DELETE').then((res) => {
			if(!res.error){
				loadUsers()
			}
		});
	};

	return (
		<div className={className}>
			<>
				<div className='login'>{login}</div>
				<select value={selectRoleId} onChange={onJobChange}>
					{roles.map(({ id: roleId, name }) => {
						return (
							<option key={roleId} value={roleId}>
								{name}
							</option>
						);
					})}
				</select>
			</>
			<Icon
				id='fa-floppy-o'
				margin='0 20px 0 -40px'
				color={compareMeaning ? '#ccc' : 'black'}
				onClick={compareMeaning ? null : saveRole}
				disabled={compareMeaning}
			/>
			<Icon
				id='fa-window-close'
				margin='0 30px 0 0px'
				onClick={deleteUser}
				color={'black'}
			/>
		</div>
	);
};

export const User = styled(UserContainer)`
	display: flex;
	justify-content: space-between;
	margin: 10px 10px;
	padding: 5px 15px;
	border: 1px solid black;
	width: 100%;

	select {
		display: flex;
		justify-content: center;
		margin: 0 20px;
	}

	.login {
		text-transform: capitalize;
		width: 50px;
	}

	@media (max-width: 550px) {
		width: 95%;
	}
`;

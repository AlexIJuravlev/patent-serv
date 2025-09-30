import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UsersCard } from './components';
import { ROLE} from '../../../../constant';
import { Loader } from '../../../../components';
import { request } from '../../../../utils/request';

const MainTodoContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		setTimeout(()=>{
			request('/api/users')
				.then((loadedUsers) => {
					setUsers(loadedUsers.data);
				})
				.catch((error) => {
					console.error(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}, 300)
	}, []);

	const filterName = users.filter((user) => user.roleId !== ROLE.ADMIN);





	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{' '}
					{filterName.map(({ login, id }) => (
						<UsersCard key={id} id={id} login={login} />
					))}
				</>
			)}
		</div>
	);
};

export const MainTodo = styled(MainTodoContainer)`
	display: flex;
	margin: 50px 50px;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

`;

import { Link } from 'react-router';
import styled from 'styled-components';

const UsersCardContainer = ({ className, id, login }) => {

	return (
		<div className={className}>
			<Link to={`/todos/${id}`}>
				<div className='box'>
					<div className='box-login'>{login}</div>
				</div>
			</Link>
		</div>
	);
};

export const UsersCard = styled(UsersCardContainer)`
	display: flex;
	margin: 50px 30px 0 0;
	padding: 15px;
	flex-wrap: wrap;
	text-align: center;

	a {
		display: flex;
		text-decoration: none;
		color: #6b6b6b;
		text-transform: capitalize;
		margin: 0 auto;
		background-color: #d9d9d9;
		transition: 0.2s;
	}

	a:hover {
		font-size: 20px;
		transition: 0.2s;
	}

	.box {
		width: 200px;
		height: 150px;
		border: 1px black solid;
	}

	.box-login {
		margin: 60px auto;
	}

	@media (max-width: 550px) {
		margin: 20px auto;

	}
`;

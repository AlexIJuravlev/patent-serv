import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { useMatch, useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAsync } from '../../../../../../action';

const ControlUnitContainet = ({ className, onClick, icon }) => {
	const dispatch = useDispatch();
	const navigete = useNavigate();
	const {userId, todoId} = useParams()
	const isCreating = useMatch('/newTodo')


	const deleteTask = () => {
		dispatch(deleteTaskAsync(userId, todoId));
		navigete(`/todos/${userId}`);
	};

	return (
		<div className={className}>
			<Icon id={icon} margin='10px 10px 0 10px' color='black' onClick={onClick} />
			{isCreating ? (
				''
			) : (
				<Icon
					id='fa-trash'
					margin='10px 20px 0 10px'
					color='black'
					onClick={deleteTask}
				/>
			)}
		</div>
	);
};

export const ControlUnit = styled(ControlUnitContainet)`
display:flex;
right: 0;
float: right;
`;

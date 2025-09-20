import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { LogoName } from '../logo-name/logo-name';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentAsync, loadTodoData } from '../../../../../../action';
import { useParams } from 'react-router';
import { selectUserId, selectUserRole } from '../../../../../../selectors';
import { ROLE } from '../../../../../../constant';

const CommentContainer = ({ className, id, content, author, publishedAt }) => {
	const dispatch = useDispatch();
	const {userId, todoId} = useParams()
	const roleId = useSelector(selectUserRole)


	const deleteComment = () => {
		dispatch(deleteCommentAsync(userId, todoId, id))
	};


	return (
		<div className={className}>
			<div className='comment'>
				<div className='comment_box'>
					<div className='author_text'>
						<LogoName>{author}</LogoName>
						{author}
					</div>
					<div className='published_at'>
						{publishedAt}
						<Icon id='fa-calendar' color='black' margin='0 10px 0 10px ' />
					</div>
				</div>
				<div className='content'>{content}</div>
			</div>
			{roleId === ROLE.READ ? (
				''
			) : (
				<Icon
					id='fa-trash'
					color='black'
					margin='0 10px 0 5px '
					onClick={deleteComment}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	margin: 10px 0;
	display: flex;

	.comment {
		border: 1px solid black;
		width: 100%;
	}

	.comment_box {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		margin: 10px;
	}

	.author_text {
		text-transform: capitalize;
		margin: 0 0 0 10px;
		display: flex;
		align-items: center;
	}

	.published_at {
		display: flex;
		margin: 0 20px 0;
		align-items: center;
	}

	.content {
		display: flex;
		margin: 20px;
	}
`;

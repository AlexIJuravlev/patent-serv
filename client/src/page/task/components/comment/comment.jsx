import { useState } from 'react';
import { Comment } from './components';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';
import { addCommentAsync } from '../../../../action';
import { useParams } from 'react-router';


const CommentsContainer = ({ className, comment, id }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch()
	const {userId, todoId} = useParams()


	const addNewComment = () => {
		dispatch(addCommentAsync(userId, todoId, { content: newComment }));
		setNewComment('');
	};



	return (
		<div className={className}>
			<div className='new-comment'>
				<textarea
					name='comment'
					placeholder='Комментарий...'
					className='text'
					value={newComment}
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id='fa-space-shuttle'
					margin='0 0 0 10px'
					color='black'
					onClick={addNewComment}
				/>
			</div>
			{comment.map(({ id, content, author, publishedAt, todos_id }) => (
				<Comment
					id={id}
					key={id}
					todos_id={todos_id}
					content={content}
					author={author}
					publishedAt={publishedAt}
				/>
			))}
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	width: 55%;
	margin: 10px;

	.new-comment {
		display: flex;
		margin: 0 0 20px 0;
	}
	.text {
		height: 80px;
		width: 100%;
		resize: none;
	}
`;

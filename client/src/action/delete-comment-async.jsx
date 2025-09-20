import { request } from "../utils/request";
import { deleteComment } from "./delete-Comment";


export const deleteCommentAsync = (userId, todoId, commentId) => (dispatch) =>{
	request(`/api/todos/${userId}/${todoId}/comment/${commentId}`, 'DELETE').then(
		(todoData) => {
			dispatch(deleteComment(todoData.deletedCommentId));
		}
	)
}

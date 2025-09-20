import { request } from "../utils/request";
import { addComment } from "./addComment";

export const addCommentAsync = (userId, todoId, comment) => (dispatch) =>
	request(`/api/todos/${userId}/${todoId}/comment`, 'POST', comment).then(
		(todoData) => {
			dispatch(addComment(todoData.data));
		},
	);


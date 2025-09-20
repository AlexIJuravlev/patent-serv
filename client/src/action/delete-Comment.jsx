import { ACTION_TYPE } from "./action-type"

export const deleteComment = (comment) => ({
	type: ACTION_TYPE.DELETE_COMMENT,
	payload: comment,
});

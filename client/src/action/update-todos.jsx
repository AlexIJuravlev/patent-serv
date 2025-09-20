import { ACTION_TYPE } from "./action-type"

export const updateTodoData = (update) => ({
	type: ACTION_TYPE.UPDATE_TODOS,
	payload: update,
});

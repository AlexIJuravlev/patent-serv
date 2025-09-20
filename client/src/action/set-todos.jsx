import { ACTION_TYPE } from "./action-type"

export const setTodoData = (taskData) => ({
	type: ACTION_TYPE.SET_TODOS,
	payload: taskData,
});

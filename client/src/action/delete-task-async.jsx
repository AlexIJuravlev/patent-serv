import { request } from "../utils/request";

export const deleteTaskAsync = (userId, taskId) => () =>
	request(`/api/todos/${userId}/${taskId}`, "DELETE");


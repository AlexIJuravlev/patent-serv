import { request } from '../utils/request';
import { updateTodoData } from './update-todos';

export const updateDoneTodo = (userId, todoId, data) => (dispatch) =>
	request(`/api/todos/${userId}/${todoId}`, 'PATCH', data).then((todoData) => {
		if (todoData.todo) {
			dispatch(updateTodoData(todoData.todo));
		}
		return todoData;
	});


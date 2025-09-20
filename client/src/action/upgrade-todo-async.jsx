import { request } from '../utils/request';
import { setTodoData } from './set-todos';

export const upgradeTodoAsync = (userId, todoId, data) => (dispatch) =>
	request(`/api/todos/${userId}/${todoId}`, 'PATCH', data).then((todoData) => {
		if (todoData.todo) {
			dispatch(setTodoData(todoData.todo));
		}
		return todoData;
	});


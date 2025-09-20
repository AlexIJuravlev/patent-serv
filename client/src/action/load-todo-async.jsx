import { request } from '../utils/request';
import { setTodoData } from './set-todos';

export const loadTodoData = (userId, todoId) => (dispatch) =>
	request(`/api/todos/${userId}/${todoId}`).then((todoData) => {
		if (todoData.todo) {
			dispatch(setTodoData(todoData.todo[0]));
		}
		return todoData;
	})
;


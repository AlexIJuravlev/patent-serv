import { request } from '../utils/request';
import { setTodoData } from './set-todos';

export const newTodoAsync = (data) => (dispatch) =>
	request(`/api/todos`, 'POST', data).then((todoData) => {
		if (todoData.todo) {
			dispatch(setTodoData(todoData.todo));
		}
		return todoData.todo;
	});

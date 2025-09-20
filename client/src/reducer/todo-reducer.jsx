import { ACTION_TYPE } from '../action';

const initialTodoState = {
	id: '',
	title: '',
	content: '',
	publishedAt: '',
	deadline: '',
	userId: '',
	done: false,
	comment: [],
};

export const todoReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_TODOS:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.UPDATE_TODOS:
			return {
				...state,
				done: action.payload
			};
		case ACTION_TYPE.ADD_COMMENT:
			return {
				...state,
				comment: [...state.comment, action.payload],
			};
		case ACTION_TYPE.DELETE_COMMENT:
			return {
				...state,
				comment: state.comment.filter((comment) => comment.id !== action.payload),
			};
		case ACTION_TYPE.DELETE_TODOS:
			return initialTodoState;
		default:
			return state;
	}
};

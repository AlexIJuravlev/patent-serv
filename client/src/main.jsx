import { createRoot } from 'react-dom/client';
import './index.css';
import { Todo } from './Todo.jsx';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store.jsx';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Todo />
		</Provider>
	</BrowserRouter>,
);

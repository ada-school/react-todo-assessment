import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'
import { HomePage } from './pages/HomePage'
import { TodoList } from './pages/TodoList'
import { AboutUs } from './pages/AboutUs'
import { TaskDetail } from './pages/TaskDetail'

export function App() {
	return (
		<Router>
			<Menu />

			<Routes>
				<Route path='/' exact element={<HomePage />} />
				<Route path='/todo-list' element={<TodoList />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/task/:taskId' element={<TaskDetail />} />
			</Routes>
		</Router>
	)
}

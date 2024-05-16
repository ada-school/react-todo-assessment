import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./page/HomePage";
import { TodoList } from "./page/TodoList";
import { AboutUs } from "./page/AboutUs";
import { TaskDetail } from "./page/TaskDetail";

export function App() {
  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/task/:taskId" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

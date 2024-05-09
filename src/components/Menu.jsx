import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <h1>Todo List App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo-list">Todo List</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

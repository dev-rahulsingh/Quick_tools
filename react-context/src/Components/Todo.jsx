import { useSelector } from "react-redux";

function Todo() {
  const data = useSelector((state) => state.todos);
  console.log(data);
  return (
    <div>
      <h1>Todo</h1>
    </div>
  );
}

export default Todo;

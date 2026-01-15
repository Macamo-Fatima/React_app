import React from "react";
import { CheckCheckIcon, ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  // console.log(props);
  const navigate = useNavigate();
  function onSeeDetailClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <div className="mt-2">
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-left flex items-center gap-2 text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckCheckIcon></CheckCheckIcon>}
              {task.title}
            </button>
            <Button onClick={() => onSeeDetailClick(task)}>
              <ChevronRight></ChevronRight>
            </Button>
            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <Trash2></Trash2>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;

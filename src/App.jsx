import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import { tarefas } from "./utils/taskList";

// import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // const URL = "https://dummyjson.com/products";

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     try {
  //       //Chamada de API
  //       const response = await fetch(URL);
  //       if (!response.ok) {
  //         throw new Error(`Erro HTTP: ${response.status}`);
  //       }
  //       //pegar dados retornados
  //       const data = await response.json();
  //       console.log(data);
  //       //Aqui usariamos o hook para armazenar os dados recuperados
  //       //Ex:setProducts(data)
  //     } catch (error) {
  //       console.error("Erro na requisição: ", error.message);
  //     }
  //   };
  //   getAllProducts();
  // }, []);

  useEffect(() => {
    // console.log("Tasks foi alterado");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //Preciso atualizar esta tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Não preciso atualizar esta tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className=" w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

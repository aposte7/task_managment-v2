import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
function TaskHome() {
  const [showForm, setShowForm] = useState(false);

  function handleOpen() {
    setShowForm((bool) => !bool);
  }
  return (
    <main className="col-start-2 w-full overflow-y-scroll bg-blue-50 px-4">
      <div className="flex items-center justify-between px-5 py-4">
        <h1 className="text-3xl font-medium">Tasks</h1>

        <button
          onClick={() => {
            handleOpen();
          }}
          className="cursor-pointer"
        >
          <CirclePlus size={28} color="#3784bf" />
        </button>
      </div>
      {showForm && <CreateTask handleOpen={handleOpen} />}

      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] justify-items-center">
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
    </main>
  );
}

export default TaskHome;

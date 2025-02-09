import TaskList from "./TaskList";
import CreateTask from "./CreateTask";

function TaskHome() {
  return (
    <main className="col-start-2 w-full overflow-y-scroll bg-blue-50 px-4">
      <div className="px-5 py-4">
        <h1 className="text-3xl font-medium">Tasks</h1>
      </div>
      {/* <CreateTask /> */}

      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] justify-items-center">
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
    </main>
  );
}

export default TaskHome;

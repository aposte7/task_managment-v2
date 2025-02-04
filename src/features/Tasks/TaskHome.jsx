import TaskList from "./TaskList";

function TaskHome() {
  return (
    <main className="relative col-start-2 w-full bg-blue-50 px-4">
      <div className="px-5 py-4">
        <h1 className="text-3xl font-medium">Tasks</h1>
      </div>

      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] justify-items-center">
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
    </main>
  );
}

export default TaskHome;

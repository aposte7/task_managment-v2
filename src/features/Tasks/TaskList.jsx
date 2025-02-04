import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="relative flex h-fit w-fit flex-col gap-3 px-2 py-3">
      <div className="text-lg font-medium">
        <p className=""> Completed</p>
        <span className="text-secondary-2 -translate-y-[ px] block text-sm font-medium">
          10 Tasks
        </span>
      </div>

      <TaskItem />
    </div>
  );
}

export default TaskList;

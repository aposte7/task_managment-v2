import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TaskHome from "../features/Tasks/TaskHome";

function TaskLayout() {
  return (
    <div className="grid h-dvh grid-cols-[16rem_minmax(0,_1fr)] grid-rows-[auto_1fr]">
      <SideBar />

      <NavBar />

      <TaskHome />
    </div>
  );
}

export default TaskLayout;

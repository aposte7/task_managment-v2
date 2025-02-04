import SubTaskItem from "./SubTaskItem";

function SubTaskList() {
  return (
    <div className="m-auto w-[98%] space-y-1 border-x border-blue-200 pt-1">
      <SubTaskItem />
      <SubTaskItem />
      <SubTaskItem />
    </div>
  );
}

export default SubTaskList;

import { Plus, SquarePen } from "lucide-react";
import SubTaskList from "../SubTask/SubTaskList";
import Tag from "../../components/Tag";

function TaskItem() {
  return (
    <>
      <div className="grid max-w-[23rem] min-w-[20rem] grid-cols-[1fr_minmax(1rem,2rem)_6rem] grid-rows-[2rem_3rem_2rem] items-center rounded-sm bg-white px-4 py-2 shadow-sm">
        <p className="text-primary w-40 text-xl font-medium">Working Out</p>
        <p className="text-primary col-span-2 col-start-2 justify-self-end text-lg">
          <span className="text-base font-medium">Sub-Task</span> 1/10
        </p>

        <p className="text-secondary-2 col-span-3 row-start-2 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="col-span-2 col-start-1 row-start-3 flex gap-1">
          <Tag>School</Tag>
          <Tag title="Fellow" />
        </div>
        <div className="col-start-3 row-start-3 justify-self-end">
          <div className="h-6 w-20 rounded-full bg-black"></div>
        </div>
      </div>
    </>
  );
}

export default TaskItem;

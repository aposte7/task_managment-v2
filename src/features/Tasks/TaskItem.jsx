import { Plus, SquarePen } from "lucide-react";
import SubTaskList from "../SubTask/SubTaskList";
import Tag from "../../components/Tag";

function TaskItem() {
  return (
    <>
      <div className="grid max-w-[23rem] min-w-[20rem] grid-cols-[1fr_minmax(0rem,2rem)_6rem] grid-rows-[2.4rem_2.4rem_minmax(0px,max-content)_2rem_minmax(0rem,max-content)_2rem_2rem] items-center gap-y-3 rounded-sm bg-white px-6 py-4 shadow-sm">
        <p className="text-primary w-40 text-xl font-medium">Working Out</p>

        <p className="text-primary col-span-2 col-start-2 justify-self-end">
          <span className="font-medium">Sub-Task</span> 1/10
        </p>

        <p className="col-start-1 row-start-2 row-end-3 self-center">
          last update: <span className="text-xs font-medium">2/4/2025</span>
        </p>
        <a
          href=""
          className="col-start-3 row-start-2 row-end-3 flex h-fit w-fit gap-2 self-center justify-self-end rounded-sm"
        >
          <SquarePen size={26} color="#3d64da" />
        </a>

        {/* Description (clipped at 3rem height)  */}

        <div className="col-span-full col-start-1 row-start-3 row-end-4 h-full py-1">
          <p className="max-h-30 overflow-hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            asperiores incidunt et modi eum maiores, quisquam
          </p>
        </div>

        {/* Button/Priority (clipped at 5rem height) */}

        <div className="col-span-full col-start-1 row-start-4 row-end-5 flex h-full items-center justify-between overflow-hidden">
          <p className="flex items-center gap-1.5 rounded-sm px-0 py-1">
            {/* <span>Sub task</span>  */}
            <Plus size={25} />
          </p>
          <Tag title="High" />
        </div>
        <div className="col-span-full col-start-1 row-start-5 row-end-6 max-h-30 overflow-hidden py-1">
          <SubTaskList />
        </div>
        <div className="col-span-2 col-start-1 row-start-6 row-end-7 flex gap-1">
          <Tag title="School" />
          <Tag title="Fellow" />
        </div>
        <div className="col-span-full col-start-1 row-start-7 row-end-8 flex justify-between">
          <div className="flex gap-1.5 rounded-sm bg-blue-600 px-3 py-1 text-white">
            Close
          </div>
          <div className="flex gap-1.5 rounded-sm bg-blue-600 px-3 py-1 text-white">
            Complete
          </div>
        </div>
      </div>

      <div className="grid max-w-[23rem] min-w-[20rem] grid-cols-[1fr_minmax(1rem,2rem)_6rem] grid-rows-[2rem_3rem_2rem] items-center rounded-sm bg-white px-4 py-2 shadow-sm">
        <p className="text-primary w-40 text-xl font-medium">Working Out</p>
        <p className="text-primary col-span-2 col-start-2 justify-self-end text-lg">
          <span className="text-base font-medium">Sub-Task</span> 1/10
        </p>

        <p className="text-secondary-2 col-span-3 row-start-2 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="col-span-2 col-start-1 row-start-3 flex gap-1">
          <Tag title="School" />
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

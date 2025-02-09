import { LayoutDashboard, ListTodo } from "lucide-react";
import NavLink from "./NavLink";

function SideBar() {
  return (
    <aside className="sticky top-0 left-0 col-span-1 row-span-2 h-dvh divide-y-1 divide-solid divide-gray-200 self-start overflow-y-scroll bg-white px-8 py-3">
      <a href="#" className="block py-2 text-3xl font-semibold">
        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-3xl font-medium text-transparent">
          Dalagaa
        </span>
      </a>

      <div className="relative space-y-8 pt-14">
        <span className="f absolute top-4 -left-0 text-base">main-menu</span>
        <div className="task">
          <div className="flex items-center gap-2 rounded-sm bg-blue-100 px-2 py-1">
            <ListTodo size={20} color="#4B5563" />
            <div className="text-lg font-medium text-gray-700">Task</div>
          </div>

          <div className="relative mx-auto w-30 space-y-2 px-2 pt-3 before:absolute before:top-0 before:-left-3 before:h-[104%] before:w-[1px] before:bg-zinc-300">
            <div className="relative font-semibold text-blue-500 before:absolute before:top-0 before:-left-[20.5px] before:z-20 before:h-full before:w-[2px] before:bg-blue-500">
              All
            </div>
            <div className="relative -left-4 text-xs">filter by</div>
            <NavLink>Date</NavLink>
            <NavLink>Status</NavLink>
            <NavLink>Priority</NavLink>
          </div>
        </div>
        <div className="task translate-x-2">
          <div className="flex items-center gap-2 px-2 py-1">
            <LayoutDashboard size={20} color="#4B5563" />
            <div className="text-lg font-medium text-gray-800">Dashboard</div>
          </div>

          <div className="mx-auto w-30 space-y-2 px-2 pt-3">
            <NavLink>Report</NavLink>
            <NavLink>Tools</NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;

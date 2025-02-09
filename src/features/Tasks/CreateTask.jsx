import DateInput from "./components/DateInput";

function CreateTask() {
  return (
    <div className="div">
      <div className="absolute top-0 left-0 z-50 h-screen w-full bg-blue-950/35 blur-xs"></div>

      <div className="fixed top-1/2 left-1/2 z-[100] h-fit w-[28rem] -translate-1/2 rounded-2xl bg-white px-10 py-6">
        <form className="w-full">
          <legend className="pb-2 text-xl font-medium">New Task</legend>
          <div className="w-full space-y-1 py-2">
            <label className="block text-sm font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              placeholder="New Task here ..."
              className="block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="w-[45%] space-y-1 py-2">
              <label className="block text-sm font-semibold text-gray-700">
                Due Date
              </label>
              {/* <button className="block w-full appearance-none rounded-lg border border-gray-800 bg-transparent px-3 py-1.5 text-start text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none">
                13/04/025
              </button> */}
              <DateInput />
            </div>
            <div className="w-[45%] space-y-1 py-2">
              <label className="block text-sm font-semibold text-gray-700">
                Priority
              </label>
              <button className="block w-full appearance-none rounded-lg border border-gray-800 bg-transparent px-3 py-1.5 text-start text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none">
                Normal
              </button>
            </div>
          </div>

          <div className="w-full space-y-1 pt-2 pb-2">
            <label className="block text-sm font-semibold text-gray-700">
              Sub-Task
            </label>
            <input
              type="text"
              placeholder="New Task here ..."
              className="mb-0 block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
            />

            <div className="m-auto h-18 w-[98%] space-y-1 overflow-y-clip border-x border-blue-200 pt-1">
              <div className="relative mx-auto flex h-8 w-[97%] items-center justify-between rounded-lg bg-blue-100 px-2 py-1">
                <p className="group inline-block w-[16.5rem] truncate">
                  <span className="inline-block w-full truncate">
                    Complete the Responsive of the mmmmmmmmmm nb hftdgfg jgg
                  </span>

                  {/* Tooltip */}
                  <span className="absolute -bottom-[0rem] left-0 z-50 hidden max-w-[100%] rounded-md bg-gray-800 px-3 py-1.5 text-sm break-words whitespace-normal text-white opacity-0 shadow-lg transition-all duration-300 group-hover:-bottom-[3.3rem] group-hover:block group-hover:opacity-100">
                    Complete the Responsive of the mmmmmmmmmm nb hftdgfg jgg
                  </span>
                </p>
                <input type="checkbox" className="h-4.5 w-4.5" />
              </div>
              <div className="relative mx-auto flex h-8 w-[97%] items-center justify-between rounded-lg bg-blue-100 px-2 py-1">
                <p className="group inline-block w-[16.5rem] truncate">
                  {/* Visible (truncated) text */}
                  <span className="inline-block w-full truncate">
                    Complete the Responsive of the mmmmmmmmmm nb hftdgfg jgg
                  </span>

                  {/* Tooltip */}
                  <span className="absolute top-[2rem] left-0 z-50 hidden max-w-[100%] rounded-md bg-gray-800 px-3 py-1.5 text-sm break-words whitespace-normal text-white opacity-0 shadow-lg transition-all duration-300 group-hover:block group-hover:opacity-100">
                    hftdgfg jgg Complete the Responsijggve of the nb hftdgfg jgg
                    Complete the Responsive of the nb hftdgfg{" "}
                  </span>
                </p>
                <input type="checkbox" className="h-4.5 w-4.5" />
              </div>
            </div>
          </div>

          <div className="w-full space-y-1 py-2">
            <label className="block text-sm font-semibold text-gray-700">
              Tag
            </label>
            <div className="z-50 flex w-full items-center gap-1">
              <input
                type="text"
                placeholder="New Task here ..."
                className="block w-33 appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
              />
              <div className="scrollbar-custom flex gap-1 overflow-scroll py-1.5">
                <div className="h-6 w-20 shrink-0 rounded-full bg-black"></div>
                <div className="h-6 w-20 shrink-0 rounded-full bg-black"></div>
                <div className="h-6 w-20 shrink-0 rounded-full bg-black"></div>
                <div className="h-6 w-20 shrink-0 rounded-full bg-black"></div>
                <div className="h-6 w-20 shrink-0 rounded-full bg-black"></div>
                <div className="h-6 w-20 shrink-0 rounded-full bg-black"></div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-1 py-2">
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              className="block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
              id="description"
              rows="3"
            ></textarea>
          </div>

          <div className="flex w-full justify-between space-y-1 pt-7">
            <button className="h-10 rounded-lg bg-gray-700 px-4 py-1 text-lg text-gray-50">
              Cancel
            </button>
            <button className="h-10 rounded-lg bg-blue-600 px-4 py-1 text-lg text-gray-100">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;

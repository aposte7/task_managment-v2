function SubTaskItem() {
  return (
    <div className="relative mx-auto flex h-8 w-[97%] items-center justify-between rounded-sm bg-blue-100 px-2 py-1">
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
  );
}

export default SubTaskItem;

import { CircleUser } from "lucide-react";

function NavBar() {
  return (
    <div className="sticky top-0 left-0 flex w-full items-center justify-between bg-blue-500 px-8 py-2">
      <input
        type="search"
        id="search"
        name="q"
        className="block w-72 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
        placeholder="Task title | Id"
        required
      />

      <div className="h-12 w-12 rounded-full">
        <CircleUser size={48} color="#D1D5DB" />
      </div>
    </div>
  );
}

export default NavBar;

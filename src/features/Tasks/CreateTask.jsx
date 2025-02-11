import { X } from "lucide-react";
import Tag from "../../components/Tag";
import DateInput from "./components/DateInput";
import InputContainer from "./components/InputContainer";
import { useForm } from "react-hook-form";
import { useState } from "react";

const tempTags = [
  "School",
  "fellow",
  "Project",
  "workout",
  "life",
  "Friends",
  "Work",
];
function CreateTask({ handleOpen }) {
  const [task, setTask] = useState("");
  const [tag, setTag] = useState("");
  const [filteredTags, setFilteredTags] = useState(tempTags);

  const { register, handleSubmit, watch, control, setValue } = useForm({
    defaultValues: {
      duedate: new Date("2025-04-13"),
      subtasks: [],
      tags: [],
    },
  });

  const subTasks = watch("subtasks");
  const tags = watch("tags");

  const addSubTasks = () => {
    if (task.trim()) {
      setValue("subtasks", [task, ...subTasks], { shouldValidate: true });
      setTask("");
      console.log("Subtasks:", subTasks);
    }
  };

  const deleteTask = (indexToRemove) => {
    setValue(
      "subtasks",
      subTasks.filter((item, index) => index !== indexToRemove),
    );
  };
  const addTags = (tagValue = "") => {
    if (tag.trim() && !tagValue.length > 0) {
      setValue("tags", [tag, ...tags], { shouldValidate: true });
      setTag("");
    } else if (tagValue.length > 0) {
      setValue("tags", [tagValue, ...tags], { shouldValidate: true });
      setTag("");
    }
  };
  const deleteTag = (indexToRemove) => {
    setValue(
      "tags",
      tags.filter((item, index) => index !== indexToRemove),
    );
  };

  const filterTags = (e) => {
    const value = e.target.value.trim();
    const filteredArray = tempTags.filter((item, index) => {
      const found = item.toLowerCase().indexOf(value.toLowerCase(), 0);
      if (found != -1) {
        return true;
      } else {
        return false;
      }
    });
    console.log(filteredArray);
    setFilteredTags(filteredArray);
    setTag(value);
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };
  return (
    <div className="div">
      <div className="absolute top-0 left-0 z-50 h-screen w-full bg-blue-950/35 blur-xs"></div>

      <div className="fixed top-1/2 left-1/2 z-[100] h-fit w-[28rem] -translate-1/2 rounded-2xl bg-white px-10 py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex items-center justify-between">
            <legend className="pb-2 text-xl font-medium">New Task</legend>

            <button
              type="button"
              onClick={() => {
                handleOpen();
              }}
              className="cursor-pointer"
            >
              <X size={28} color="#3784bf" />
            </button>
          </div>

          <InputContainer label="Title" full={true}>
            <input
              {...register("title")}
              id="title"
              name="title"
              type="text"
              placeholder="New Task here ..."
              className="block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
            />
          </InputContainer>

          <div className="flex w-full items-center justify-between">
            <InputContainer label="Due Date">
              <DateInput name="duedate" control={control} />
            </InputContainer>

            <InputContainer label="Priority">
              <input
                {...register("priority")}
                name="priority"
                id="priority"
                placeholder="high"
                className="block w-full appearance-none rounded-lg border border-gray-800 bg-transparent px-3 py-1.5 text-start text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
              />
            </InputContainer>
          </div>

          <InputContainer label="Sub-task" full={true} className="relative">
            <>
              <input
                type="text"
                id="subtasks"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                autoComplete="off"
                placeholder="New Task here ..."
                className="mb-0 block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 pr-[4.2rem] text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
              />
              <input name="subtasks" type="hidden" {...register("subtasks")} />
              <button
                type="button" // Important: prevent default submit behavior
                onClick={addSubTasks}
                className="absolute top-[2.19rem] right-[.19rem] rounded-md bg-indigo-800 px-4 py-1 text-white"
              >
                Add
              </button>
            </>
          </InputContainer>

          <div className="m-auto h-fit max-h-24 w-[98%] space-y-1 overflow-y-scroll border-x border-blue-200 pt-1">
            {subTasks.map((subTask, index) => (
              <div
                key={index}
                className="relative mx-auto flex h-8 w-[97%] items-center justify-between rounded-lg bg-blue-100 px-2 py-1"
              >
                <p className="group inline-block w-[100%] truncate">
                  <span className="inline-block w-full truncate">
                    {subTask}
                  </span>
                </p>
                <button
                  onClick={() => deleteTask(index)}
                  type="button"
                  className="cursor-pointer px-1"
                >
                  <X size={23} color="#3784bf" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <InputContainer label="Tags" className="relative">
              <>
                <input
                  onChange={(e) => filterTags(e)}
                  value={tag}
                  name="tags"
                  id="tags"
                  autoComplete="off"
                  type="text"
                  placeholder="New Task here ..."
                  className="block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
                />
                <input type="hidden" {...register("tags")} />

                {tag && (
                  <div className="absolute bottom-13 left-0 h-fit w-full rounded-lg bg-white px-1 py-1 shadow-sm shadow-gray-400">
                    <ul className="max-h-37.5 overflow-y-scroll">
                      <li
                        onClick={() => addTags("")}
                        className="cursor-pointer px-3 py-1 hover:bg-gray-200"
                      >
                        {tag}
                      </li>
                      {filteredTags.length > 0 &&
                        filteredTags.map((value, index) => (
                          <li
                            onClick={() => addTags(value)}
                            key={index}
                            className="cursor-pointer px-3 py-1 hover:bg-gray-200"
                          >
                            {value}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </>
            </InputContainer>

            <div className="scrollbar-custom my-2.5 flex max-w-[53%] gap-1.5 self-end overflow-scroll py-1.5">
              {tags.map((value, index) => (
                <Tag
                  className="flex items-center justify-between"
                  title={value}
                  key={`${value}_${index}`}
                >
                  <div
                    onClick={() => deleteTag(index)}
                    className="ml-1 cursor-pointer"
                  >
                    <X size={18} />
                  </div>
                </Tag>
              ))}
            </div>
          </div>

          <InputContainer full={true} label="Description">
            <textarea
              {...register("description")}
              id="description"
              name="description"
              className="block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
              rows="3"
            ></textarea>
          </InputContainer>

          <div className="flex w-full justify-between space-y-1 pt-7">
            <button className="rounded-full bg-gray-700 px-4 py-1 text-gray-50">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-blue-600 px-4 py-1 text-gray-100"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;

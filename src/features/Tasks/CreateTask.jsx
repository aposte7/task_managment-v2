import { X } from "lucide-react";
import Tag from "../../components/Tag";
import DateInput from "./components/DateInput";
import InputContainer from "./components/InputContainer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../components/Button";

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

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
    setValue,
  } = useForm({
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
    const filteredArray = tempTags.filter((item) => {
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

          <InputContainer label="Title" full={true} className="relative">
            <>
              <input
                {...register("title", {
                  required: { value: true, message: "title is required" },
                  maxLength: { value: 10, message: "maxLength title 10" },
                })}
                type="text"
                placeholder="New Task here ..."
                className="-gray-300 block w-full appearance-none rounded-lg border bg-transparent px-2 py-1.5 text-sm text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
              />
              {errors.title && (
                <p className="absolute -bottom-[0.4rem] left-0 w-full truncate text-sm text-rose-500">
                  {errors.title.message}
                </p>
              )}
            </>
          </InputContainer>

          <div className="relative">
            <div className="flex w-full items-center justify-between">
              <InputContainer
                label="Due Date"
                lassName="relative"
                className="relative"
              >
                <DateInput name="duedate" control={control} />
              </InputContainer>

              <InputContainer label="Priority" className="relative">
                <>
                  <input
                    {...register("priority", {
                      maxLength: {
                        value: 10,
                        message: "maxLength priority 10",
                      },
                    })}
                    placeholder="high"
                    className="block w-full appearance-none rounded-lg border border-gray-800 bg-transparent px-3 py-1.5 text-start text-sm text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
                  />
                </>
              </InputContainer>
            </div>

            {(errors.duedate || errors.priority) && (
              <div className="relative py-1.5">
                {errors.duedate && (
                  <p className="absolute -top-[.75rem] left-0 m-0 w-full truncate p-0 text-sm text-rose-500">
                    {errors.duedate.message}{" "}
                  </p>
                )}

                {errors.priority && (
                  <p className="absolute -bottom-[.8rem] left-0 m-0 w-full truncate p-0 text-sm text-rose-500">
                    {errors.priority.message}{" "}
                  </p>
                )}
              </div>
            )}
          </div>

          <InputContainer label="Sub-task" full={true} className="relative">
            <>
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                autoComplete="off"
                placeholder="New Task here ..."
                className="mb-0 block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 pr-[4.2rem] text-sm text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
              />
              <input name="subtasks" type="hidden" {...register("subtasks")} />
              <Button
                onClick={addSubTasks}
                variant="small"
                className="absolute top-[2.55rem] right-[2.5px] bg-blue-500 text-white"
              >
                Add
              </Button>
              {errors.subtasks && (
                <p className="absolute -bottom-[.5rem] left-0 m-0 w-full truncate p-0 text-sm text-rose-500">
                  {errors.subtasks.message}{" "}
                </p>
              )}
            </>
          </InputContainer>

          <div className="m-auto h-fit max-h-24 w-[98%] space-y-1 overflow-y-scroll border-x border-blue-200 pt-1">
            {subTasks.map((subTask, index) => (
              <div
                key={index}
                className="relative mx-auto flex h-8 w-[97%] items-center justify-between rounded-lg bg-blue-100 px-2 py-1"
              >
                <p className="group inline-block h-fit w-[100%] truncate">
                  {subTask}
                </p>
                <Button
                  onClick={() => deleteTask(index)}
                  type="button"
                  variant="deleteX"
                  className="duration-300 hover:bg-blue-300/90"
                >
                  <X size={21} color="#3784bf" />
                </Button>
              </div>
            ))}
          </div>

          <div className="relative flex items-center gap-1">
            <InputContainer label="Tags">
              <>
                <input
                  onChange={(e) => filterTags(e)}
                  value={tag}
                  autoComplete="off"
                  type="text"
                  placeholder="New Task here ..."
                  className="block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-sm text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
                />
                <input
                  type="hidden"
                  {...register("tags", {
                    required: {
                      value: true,
                      message: "atleast one tag is required",
                    },
                  })}
                />

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

                {errors.tags && (
                  <p className="absolute -bottom-[.4rem] left-0 m-0 w-full truncate p-0 text-sm text-rose-500">
                    {errors.tags.message}
                  </p>
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

          <InputContainer full={true} label="Description" className="relative">
            <>
              <textarea
                {...register("description")}
                id="description"
                name="description"
                className="block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2 py-1.5 text-sm text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
                rows="3"
              ></textarea>
              {errors.description && (
                <p className="absolute -bottom-[.4rem] left-0 m-0 w-full truncate p-0 text-sm text-rose-500">
                  {errors.description.message}{" "}
                </p>
              )}
            </>
          </InputContainer>

          <div className="flex w-full justify-between pt-7">
            <Button type="button" className="bg-rose-500 text-white">
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 text-white">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;

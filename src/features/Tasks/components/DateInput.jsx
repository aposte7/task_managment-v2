import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.css";

// Define the custom input with forwardRef
const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="block w-full appearance-none rounded-lg border border-gray-800 bg-transparent px-3 py-1.5 text-start text-gray-700 focus:border focus:border-blue-500 focus:shadow-sm focus:outline-none"
    style={{ width: "100%" }}
    ref={ref}
  >
    {value}
  </button>
));
CustomInput.displayName = "CustomInput";

// DateInput now accepts a control and a name prop from its parent.
function DateInput({ name, control }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref } }) => (
        <DatePicker
          selected={value}
          onChange={onChange}
          customInput={<CustomInput ref={ref} />}
          wrapperClassName="w-full"
          calendarClassName="custom-calendar"
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            //   decreaseMonth,
            //   increaseMonth,
            //   prevMonthButtonDisabled,
            //   nextMonthButtonDisabled,s
          }) => (
            <div className="flex items-center justify-between px-2 py-1">
              <div className="relative">
                <select
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) => changeYear(value)}
                  className="custom-scrollbar mx-1 max-h-32 overflow-auto rounded border border-gray-300 p-1"
                >
                  {Array.from({ length: 3 }, (_, i) => (
                    <option key={i} value={2025 + i}>
                      {2025 + i}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={date.getMonth()}
                  onChange={({ target: { value } }) => changeMonth(value)}
                  className="custom-scrollbar mx-1 max-h-32 overflow-auto rounded border border-gray-300 p-1"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>
                      {new Date(0, i).toLocaleString("default", {
                        month: "long",
                      })}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        />
      )}
    />
  );
}

export default DateInput;

import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.css"; // Import custom CSS for additional styling

/**
 * CustomInput is a React forwardRef component that renders a button styled as an input field.
 * It accepts a value to display and an onClick handler to trigger when the button is clicked.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.value - The value to display inside the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {React.Ref} ref - The ref to forward to the button element.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
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

function DateInput() {
  const [date, setDate] = useState(new Date("2025-04-13"));

  return (
    <div style={{ width: "100%" }}>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        customInput={<CustomInput />}
        wrapperClassName="w-full"
        calendarClassName="custom-calendar" // Add custom class for calendar
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          //   decreaseMonth,
          //   increaseMonth,
          //   prevMonthButtonDisabled,
          //   nextMonthButtonDisabled,
        }) => (
          <div className="flex items-center justify-between px-2 py-1">
            <div className="relative">
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
                className="custom-scrollbar mx-1 max-h-32 overflow-auto rounded border border-gray-300 p-1"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={2020 + i}>
                    {2020 + i}
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
    </div>
  );
}

export default DateInput;

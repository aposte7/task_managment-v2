function InputContainer({ children, label, full = false, className = "" }) {
  const width = full ? "w-full" : "w-[47%]";
  return (
    <div className={`${width} ${className} space-y-1 py-2.5`}>
      <label htmlFor={children.props.id} className="block text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}

export default InputContainer;

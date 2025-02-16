function Button({
  children,
  type = "button",
  className = "",
  variant = "large",
  onClick = () => {},
}) {
  const styles = {
    large: "rounded-md px-4 py-1",
    small: "rounded-md px-2.5 py-[2.5px]",
    deleteX: "rounded-sm px-0.5 py-[1.5px]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[variant]} ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;

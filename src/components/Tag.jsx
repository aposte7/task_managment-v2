function Tag({ children, title = "", className = "" }) {
  const label = title.length > 7 ? `${title.slice(0, 7)}...` : title;
  return (
    <div
      className={`${className} h-[24px] w-fit rounded-full bg-sky-600 px-[10px] text-center text-[16px] text-white lowercase`}
    >
      <div className="h-fit">{label}</div>
      <div className="h-fit">{children}</div>
    </div>
  );
}

export default Tag;

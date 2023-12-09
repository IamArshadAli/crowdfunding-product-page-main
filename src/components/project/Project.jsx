import { useState } from "react";
import "./Project.css";

const Project = () => {
  const [bookmark, setBookmark] = useState(false);

  const Bookmark = () => {
    return (
      <button
        className="flex items-center gap-4 rounded-full bg-[#EEE]"
        onClick={() => setBookmark((prev) => !prev)}
      >
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle
              fill={bookmark ? "hsl(176, 72%, 28%)" : "#2F2F2F"}
              cx="28"
              cy="28"
              r="28"
            />
            <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
          </g>
        </svg>
        <span
          className={`hidden pr-[1.6rem] font-medium md:block ${
            bookmark && "font-bold text-DarkCyan"
          }`}
        >
          {bookmark ? "Bookmarked" : "Bookmark"}
        </span>
      </button>
    );
  };

  return (
    <div
      className="w-full rounded-lg border bg-white px-1 py-6 text-center before:absolute before:-top-7 before:left-1/2 before:-translate-x-1/2 md:px-6 lg:px-9 xl:px-[2.9rem] xl:py-8"
      id="project"
    >
      <h1 className="mx-auto mb-4 mt-7 max-w-[15rem] text-xl font-bold leading-6 tracking-[0.0025em] md:max-w-none xl:mb-[1.2rem] xl:mt-[1.8rem] xl:text-[1.75rem]">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="mb-6 text-sm leading-6 text-DarkGray md:mb-7 lg:mb-8 xl:mb-[2.3rem] xl:text-base">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-center space-x-2 pb-4 md:justify-between">
        <button className="rounded-full bg-ModerateCyan px-[2.9rem] py-2 font-medium text-white transition-colors hover:bg-DarkCyan xl:px-[2.57rem]">
          Back this project
        </button>
        <Bookmark />
      </div>
    </div>
  );
};

export default Project;

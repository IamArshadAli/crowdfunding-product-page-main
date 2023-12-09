/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Stats.css";

const Stat = ({ value, description, className, backed }) => {
  return (
    <section className={`${className}`}>
      <h1 className="text-[2rem] font-bold leading-loose md:leading-relaxed xl:leading-relaxed">
        {backed && "$"}
        {value.toLocaleString()}
      </h1>
      <p className="text-sm text-DarkGray xl:text-[0.95rem]">{description}</p>
    </section>
  );
};

const Stats = () => {
  const [data, setData] = useState({
    backedAmount: 89914,
    totalBackers: 5007,
    daysLeft: 56,
  });

  const totalQuote = 100000;

  function getProgress() {
    return (data.backedAmount / totalQuote) * 100;
  }

  const progress = `before:w-[78%]`;

  return (
    <div className="w-full rounded-lg border bg-white px-[1.35rem] py-4 md:px-6 md:py-9 lg:px-9 xl:px-[2.9rem] xl:py-[2.5rem]">
      <div className="mb-6 flex flex-col items-center gap-4 text-center md:flex-row md:justify-evenly xl:mb-9 xl:justify-normal xl:gap-11 xl:text-left">
        <Stat
          value={data.backedAmount}
          description={`of $${totalQuote.toLocaleString()} backed`}
          backed={true}
        />
        <div className="divider"></div>
        <Stat value={data.totalBackers} description="total backers" />
        <div className="divider xl:ml-12"></div>
        <Stat
          value={data.daysLeft}
          description="days left"
          className="xl:ml-0.5"
        />
      </div>
      <div
        className={`relative h-3 w-full overflow-hidden rounded-full bg-[#F4F4F4] before:absolute before:left-0 before:h-full before:rounded-full before:bg-ModerateCyan ${progress} md:mb-1 mb-2`}
      ></div>
    </div>
  );
};

export default Stats;

import React, { useEffect } from "react";
import Search from "./Search";
import { getTask } from "../utils/api";

const TaskContainer = () => {
  useEffect(() => {
    const allTasks = async () => {
      const response = await getTask();
      console.log("Fetched data", response.allData);
    };

    allTasks();
  }, []);

  return (
    <div className="bg-[#7dccbe] h-full mx-50 border-7 border-[#53908a] mb-4 flex flex-col justify-center items-center pb-10 pt-10 px-40">
      <Search />
      <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_1fr] size-full gap-2">
        <div />
        <div className="h-20 border-4 border-foreground flex justify-center items-center bg-white">
          <p className="font-bold uppercase">Urgent</p>
        </div>
        <div className="size-full border-4 border-foreground flex justify-center items-center bg-white">
          <p className="font-bold uppercase">Not Urgent</p>
        </div>
        <div className="h-full w-20 border-4 border-foreground flex items-center justify-center bg-white">
          <span className="-rotate-90 font-bold uppercase">Important</span>
        </div>
        <div className="size-full border-4 border-foreground bg-[#daf7ef]"></div>
        <div className="size-full border-4 border-foreground bg-[#daf7ef]"></div>
        <div className="h-full w-20 border-4 border-foreground flex items-center justify-center bg-white">
          <span className="-rotate-90 font-bold uppercase whitespace-nowrap">
            Not Important
          </span>
        </div>
        <div className="size-full border-4 border-foreground bg-[#daf7ef]"></div>
        <div className="size-full border-4 border-foreground bg-[#daf7ef]"></div>
      </div>
    </div>
  );
};

export default TaskContainer;

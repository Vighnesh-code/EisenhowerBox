import React from "react";

const TaskContainer = () => {
  return (
    <div className="bg-pink-200 h-full mx-50 border-7 border-[#53908a] mb-4 flex justify-center items-center py-30 px-40">
      <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_1fr] size-full gap-2">
        <div></div>
        <div className="size-full border-4 border-foreground px-1/2">
          <p>Urgent</p>
        </div>
        <div className="size-full border-4 border-foreground">Not Urgent</div>
        <div className="size-full border-4 border-foreground">Important</div>
        <div className="size-full border-4 border-foreground"></div>
        <div className="size-full border-4 border-foreground"></div>
        <div className="size-full border-4 border-foreground">
          Not Important
        </div>
        <div className="size-full border-4 border-foreground"></div>
        <div className="size-full border-4 border-foreground"></div>
      </div>
    </div>
  );
};

export default TaskContainer;

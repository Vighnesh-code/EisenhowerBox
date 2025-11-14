import React, { useEffect } from "react";
import { useTasks } from "../contexts/TaskProvider";
import TaskCard from "./TaskCard";

const TaskMapper = ({ Imp, Urg }) => {
  const { tasks } = useTasks();
  const filteredTasks = tasks.filter(
    (data) => data.important === Imp && data.urgent === Urg
  );

  return (
    <div className="p-5">
      {filteredTasks.length > 0 ? (
        <ul>
          {filteredTasks.map((data) => (
            <TaskCard key={data._id} data={data} />
          ))}
        </ul>
      ) : (
        <p>* No Tasks in this category</p>
      )}
    </div>
  );
};

export default TaskMapper;

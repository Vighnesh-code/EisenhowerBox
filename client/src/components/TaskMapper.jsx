import React, { useEffect } from "react";
import { useTasks } from "../contexts/TaskProvider";

const TaskMapper = ({ Imp, Urg }) => {
  const { tasks } = useTasks();
  const filteredTasks = tasks.filter(
    (data) => data.important === Imp && data.urgent === Urg
  );

  return (
    <div className="p-4">
      {filteredTasks.length > 0 ? (
        <ul>
          {filteredTasks.map((data) => (
            <li key={data._id}>* {data.task}</li>
          ))}
        </ul>
      ) : (
        <p>* No Tasks in this category</p>
      )}
    </div>
  );
};

export default TaskMapper;

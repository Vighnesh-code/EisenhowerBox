import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (taskData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error response: ", data);
        throw new Error(data.message || "Failed to add task");
      }
      return data;
    } catch (error) {
      console.log(`Error in Context: ${error.message}`);
      throw error;
    }
  };

  const loadTasks = async () => {
    await getTask();
  };

  const getTask = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/all`);
      const data = await response.json();

      if (!response.ok) {
        console.log("Error response: ", data);
        throw new Error(data.message || "Failed to fetch all tasks");
      }

      setTasks(data.allData);
      return data;
    } catch (error) {
      console.log("Error in getTask Context: ", error.message);
      throw error;
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/delete/${id}`, {
        method: "DELETE",
      });
      console.log("Task delete Successfully");
    } catch (error) {
      console.log("Error in deleteTask Context: ", error.message);
      throw error;
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, getTask, loadTasks, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

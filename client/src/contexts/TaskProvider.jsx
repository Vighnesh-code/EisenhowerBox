import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (taskData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/new`, {
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

  const getTask = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/all`);
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
      await fetch(`${API_BASE_URL}/api/delete/${id}`, {
        method: "DELETE",
      });
      console.log("Task delete Successfully");
    } catch (error) {
      console.log("Error in deleteTask Context: ", error.message);
      throw error;
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, getTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

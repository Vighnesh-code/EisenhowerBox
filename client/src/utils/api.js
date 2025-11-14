import React from "react";

export const addTask = async (taskData) => {
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

    console.log("Success: ", data);
    return data;
  } catch (error) {
    console.log(`Error in Context: ${error.message}`);
    throw error;
  }
};

export const getTask = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/all`);
    const data = await response.json();

    if (!response.ok) {
      console.log("Error response: ", data);
      throw new Error(data.message || "Failed to fetch all tasks");
    }

    return data;
  } catch (error) {
    console.log("Error in getTask Context: ", error.message);
    throw error;
  }
};

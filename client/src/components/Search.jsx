import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTasks } from "../contexts/TaskProvider";

const Search = () => {
  const [isImportant, setIsImportant] = useState("Important");
  const [isUrgent, setIsUrgent] = useState("Urgent");
  const [text, setText] = useState("");

  const { tasks, addTask, getTask } = useTasks();

  const taskData = {
    task: text,
    important: isImportant === "Important",
    urgent: isUrgent === "Urgent",
  };

  const handleAddTask = async () => {
    await addTask(taskData);
    setText("");
    getTask();
  };

  return (
    <div className="w-full flex justify-between gap-3">
      {/* Input Text Field */}
      <Input
        className="mb-5 bg-white text-[#548f89] font-bold h-10 w-4/5"
        placeholder="Enter your task here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Dropdown Selection */}
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="h-10 w-fit px-2 bg-white text-[#548f89] flex justify-center items-center gap-2 rounded-sm">
            <span className="whitespace-nowrap">{isImportant}</span>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value={isImportant}
              onValueChange={setIsImportant}
            >
              <DropdownMenuRadioItem value="Important">
                Important
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Not Important">
                Not Important
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="h-10 w-fit px-2 bg-white text-[#548f89] flex justify-center items-center gap-2 rounded-sm">
            <span className="whitespace-nowrap">{isUrgent}</span>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value={isUrgent}
              onValueChange={setIsUrgent}
            >
              <DropdownMenuRadioItem value="Urgent">
                Urgent
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Not Urgent">
                Not Urgent
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Add Task Button */}
      <Button
        variant="outline"
        className="border-4 h-10 border-[#53908a] text-[#53908a] hover:bg-[#53908a] hover:text-white cursor-pointer hover:scale-110"
        onClick={handleAddTask}
      >
        Add Task
      </Button>
    </div>
  );
};

export default Search;

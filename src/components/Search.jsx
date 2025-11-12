import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Search = () => {
  const [isImportant, setIsImportant] = useState(true);
  const [isNotImportant, setIsNotImportant] = useState(false);
  const [isUrgent, setIsUrgent] = useState(true);
  const [isNotUrgent, setIsNotUrgent] = useState(false);

  return (
    <div className="w-full flex justify-between gap-3">
      {/* Input Text Field */}
      <Input
        className="mb-5 bg-white text-[#548f89] font-bold h-10 w-4/5"
        placeholder="Enter your task here..."
      />

      {/* Dropdown Selection */}
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="h-10 w-30 bg-white text-[#548f89] flex justify-center items-center gap-2 rounded-sm">
            <span>Important</span>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem
              checked={isImportant}
              onCheckedChange={setIsImportant}
            >
              Important
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={isNotImportant}
              onCheckedChange={setIsNotImportant}
            >
              Not Important
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="h-10 w-30 bg-white text-[#548f89] flex justify-center items-center gap-2 rounded-sm">
            <span>Urgent</span>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem
              checked={isUrgent}
              onCheckedChange={setIsUrgent}
            >
              Urgent
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={isNotUrgent}
              onCheckedChange={setIsNotUrgent}
            >
              Not Urgent
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Add Task Button */}
      <Button
        variant="outline"
        className="border-4 h-10 border-[#53908a] text-[#53908a] hover:bg-[#53908a] hover:text-white cursor-pointer hover:scale-110"
      >
        Add Task
      </Button>
    </div>
  );
};

export default Search;

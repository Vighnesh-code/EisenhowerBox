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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Search = () => {
  const [isImportant, setIsImportant] = useState("Important");
  const [isUrgent, setIsUrgent] = useState("Urgent");

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
      >
        Add Task
      </Button>
    </div>
  );
};

export default Search;

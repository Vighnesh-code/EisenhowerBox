import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { useTasks } from "../contexts/TaskProvider";

const TaskCard = ({ data }) => {
  const { deleteTask, getTask } = useTasks();

  const handleTaskDeletion = async () => {
    console.log(data._id);
    await deleteTask(data._id);
    await getTask();
  };

  return (
    <Card className="max-h-15 flex justify-center gap-1 overflow-hidden">
      <CardContent className="flex justify-between items-center">
        <p>{data.task}</p>
        <Button
          className="bg-[#548f89] hover:bg-[#7ccbbc] hover:scale-110"
          onClick={handleTaskDeletion}
        >
          <Trash2 />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskCard;

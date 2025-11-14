import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TaskCard = ({ data }) => {
  return (
    <Card className="h-9 flex justify-center gap-10">
      <CardContent>
        <p>{data.task}</p>
      </CardContent>
    </Card>
  );
};

export default TaskCard;

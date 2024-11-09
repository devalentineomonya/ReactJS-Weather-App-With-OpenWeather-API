import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const Pressure = () => {
  return (
    <Card className="col-span-2 ml-4 rounded-lg bg-transparent  shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px]">
      <CardHeader>
        <h1 className="font-semibold text-lg">$10,230</h1>
        <p className="text-[#7c8fac] text-sm mt-1">Expense</p>
      </CardHeader>
      <CardContent>
        <h1>Hello</h1>
        <p>World</p>
      </CardContent>
    </Card>
  );
};

export default Pressure;

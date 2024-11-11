import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const Trends = () => {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-4 mt-6 ml-4 shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px] rounded-md bg-transparent">
      <CardHeader className="p-0 m-0 pt-4 px-4 mb-4">
        <h1 className="font-semibold text-lg">$10,230</h1>
        <p className="text-[#7c8fac] text-sm mt-1">Expense</p>
      </CardHeader>
      <CardContent className="pb-0">
        <h1>Trends</h1>
        <p>Coming soon</p>
      </CardContent>
    </Card>
  );
};

export default Trends;

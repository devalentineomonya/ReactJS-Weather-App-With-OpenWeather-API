"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Line, LineChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { mobile: 186 },
  { mobile: 305 },
  { mobile: 237 },
  { mobile: 107 },
  { mobile: 137 },
  { mobile: 73 },
  { mobile: 209 },
  { mobile: 214 },
];
const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const Weekly = () => {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-4 mt-6 ml-4 shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px] rounded-md bg-transparent">
      <CardHeader className="p-0 m-0 pt-4 px-4 mb-8">
        <h1 className="font-semibold text-lg">$10,230</h1>
        <p className="text-[#7c8fac] text-sm mt-1">Expense</p>
      </CardHeader>

      <CardContent className="max-h-24">
        <ChartContainer className="h-28 w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col justify-between items-start">
        <div className="flex justify-between items-center mt-4 h-full w-full ">
          <div className="flex items-start">
            <div className="h-12 aspect-square rounded-md bg-[rgba(93,_135,_255,_0.1)] text-[#5d87ff]"></div>
            <div className="ml-1">
              <h1 className="text-lg font-semibold">Weekly</h1>
              <p className="text-[#7c8fac] text-sm">Expenses</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[#5d87ff] text-sm ml-2 py-1 px-2 rounded-md bg-[rgba(93,_135,_255,_0.1)] ">
              +20%
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 h-full w-full ">
          <div className="flex items-start">
            <div className="h-12 aspect-square rounded-md bg-[rgba(93,_135,_255,_0.1)] text-[#5d87ff]"></div>
            <div className="ml-1">
              <h1 className="text-lg font-semibold">Weekly</h1>
              <p className="text-[#7c8fac] text-sm">Expenses</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[#5d87ff] text-sm ml-2 py-1 px-2 rounded-md bg-[rgba(93,_135,_255,_0.1)] ">
              +20%
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 h-full w-full ">
          <div className="flex items-start">
            <div className="h-12 aspect-square rounded-md bg-[rgba(93,_135,_255,_0.1)] text-[#5d87ff]"></div>
            <div className="ml-1">
              <h1 className="text-lg font-semibold">Weekly</h1>
              <p className="text-[#7c8fac] text-sm">Expenses</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[#5d87ff] text-sm ml-2 py-1 px-2 rounded-md bg-[rgba(93,_135,_255,_0.1)] ">
              +20%
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Weekly;

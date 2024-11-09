"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Pie, PieChart, Tooltip } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

import React from "react";

const Temperature = () => {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "#5d87ff" },
    { browser: "safari", visitors: 200, fill: "#49beff" },
    { browser: "firefox", visitors: 187, fill: "#ffae1f" },
    { browser: "edge", visitors: 173, fill: "#ffffff" },
    { browser: "other", visitors: 90, fill: "#13deb9" },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "#5d87ff",
    },
    safari: {
      label: "Safari",
      color: "#49beff",
    },
    firefox: {
      label: "Firefox",
      color: "#ffae1f",
    },
    edge: {
      label: "Edge",
      color: "#ffffff",
    },
    other: {
      label: "Other",
      color: "#13deb9",
    },
  } satisfies ChartConfig;

  return (
    <Card className="col-span-2 ml-4 rounded-lg bg-transparent  shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px]">
      <CardHeader>
        <h1 className="font-semibold text-lg">$10,230</h1>
        <p className="text-[#7c8fac] text-sm mt-1">Expense</p>
      </CardHeader>
      <CardContent>
        <ChartContainer className="p-0 m-0" config={chartConfig}>
          <PieChart >
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={26}
              outerRadius={35}
              fill="#8884d8"
              
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Temperature;

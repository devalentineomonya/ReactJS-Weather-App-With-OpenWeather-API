"use client";
import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label, Pie, PieChart, Tooltip } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
const Wind = () => {
  const chartData = useMemo(() => {
    return [
      { browser: "chrome", visitors: 275, fill: "#5d87ff" },
      { browser: "safari", visitors: 200, fill: "#49beff" },
      { browser: "firefox", visitors: 187, fill: "#ffae1f" },
      { browser: "edge", visitors: 173, fill: "#ffffff" },
      { browser: "other", visitors: 90, fill: "#13deb9" },
    ];
  }, []);

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

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-4 mt-6 ml-4 flex flex-col shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px] rounded-md bg-transparent">
      <CardHeader className="p-0 m-0 pt-4 px-4 mb-8">
        <h1 className="font-semibold text-lg">$10,230</h1>
        <p className="text-[#7c8fac] text-sm mt-1">Expense</p>
      </CardHeader>
      <CardContent className="w-full h-1/2">
        <ChartContainer className="p-0 m-0  h-full w-full" config={chartConfig}>
          <PieChart>
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={80}
              outerRadius={90}
              fill="#8884d8"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-4 h-full ">
        <div className="flex items-start">
          <div className="h-12 aspect-square rounded-md bg-[rgba(93,_135,_255,_0.1)] text-[#5d87ff]"></div>
          <div className="ml-1">
            <h3 className="font-medium text-[#7c8fac]">$23,450</h3>
            <h4 className="font-normal text-sm">Total Sales</h4>
          </div>
        </div>
        <div className="flex items-start">
          <div className="h-12 aspect-square rounded-md bg-[#465670] text-[#7c8fac]"></div>
          <div className="ml-1">
            <h3 className="font-medium text-[#7c8fac]">$23,450</h3>
            <h4 className="font-normal text-sm">Total Sales</h4>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Wind;

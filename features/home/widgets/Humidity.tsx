"use client";
import { Line, LineChart } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const Humidity = () => {
  return (
    <Card className="col-span-6 shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px] rounded-md bg-transparent p-4">
      <CardHeader className="p-0 pb-2  m-0">
        <div className="w-full max-w-11 aspect-square bg-[rgba(93,_135,_255,_0.1)] rounded-md"></div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
         
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="pb-0 px-0">
        <div className="flex flex-col ">
          <p className="text-[#7c8fac] text-sm">Total Visitors</p>
          <p className="font-semibold text-lg">10,230</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Humidity;

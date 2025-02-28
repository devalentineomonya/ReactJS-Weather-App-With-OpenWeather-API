"use client";
import { AreaChart, Area } from "recharts";
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
    <Card className="col-span-12 md:col-span-6 shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px] rounded-md bg-transparent p-4">
      <CardHeader className="p-0 pb-2  m-0">
        <div className="w-full max-w-11 aspect-square bg-[rgba(93,_135,_255,_0.1)] rounded-md"></div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            {/* Add SVG gradient definition */}
            <defs>
              <linearGradient id="desktopGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="60%" stopColor="var(--color-desktop)" stopOpacity={0.2} />
                <stop offset="90%" stopColor="var(--color-desktop)" stopOpacity={0} />
              </linearGradient>
            </defs>

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#desktopGradient)"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
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

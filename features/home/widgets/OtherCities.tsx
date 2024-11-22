import { Button } from "@/components/ui/button";
import { CardContent, Card, CardHeader } from "@/components/ui/card";
import React from "react";

const OtherCities = () => {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-4 mt-6 ml-4 shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px] rounded-md bg-transparent">
      <CardHeader className="p-0 m-0 pt-4 px-4 mb-4">
        <h1 className="font-semibold text-lg">$10,230</h1>
        <p className="text-[#7c8fac] text-sm mt-1">Expense</p>
      </CardHeader>
      <CardContent className="pb-0">
        <Button
          className="hover:bg-transparent  py-8 w-full my-1 flex justify-between items-center"
          variant="ghost"
        >
          <div className="flex gap-x-2 items-center">
            <div className="w-11 aspect-square  bg-[rgba(93,_135,_255,_0.1)] rounded-md"></div>
            <div>
              <h4 className="font-semibold text-lg">Nairobi</h4>
              <p className="text-[#7c8fac] text-sm mt-1">Nairobi</p>
            </div>
          </div>
          <p className="text-white text-base mt-1">View All</p>
        </Button>
        <Button
          className="hover:bg-transparent  py-8 w-full my-1 flex justify-between items-center"
          variant="ghost"
        >
          <div className="flex gap-x-2 items-center">
            <div className="w-11 aspect-square  bg-[rgba(93,_135,_255,_0.1)] rounded-md"></div>
            <div>
              <h4 className="font-semibold text-lg">Nairobi</h4>
              <p className="text-[#7c8fac] text-sm mt-1">Nairobi</p>
            </div>
          </div>
          <p className="text-white text-base mt-1">View All</p>
        </Button>
        <Button
          className="hover:bg-transparent  py-8 w-full my-1 flex justify-between items-center"
          variant="ghost"
        >
          <div className="flex gap-x-2 items-center">
            <div className="w-11 aspect-square  bg-[rgba(93,_135,_255,_0.1)] rounded-md"></div>
            <div>
              <h4 className="font-semibold text-lg">Nairobi</h4>
              <p className="text-[#7c8fac] text-sm mt-1">Nairobi</p>
            </div>
          </div>
          <p className="text-white text-base mt-1">View All</p>
        </Button>
        <Button
          className="hover:bg-transparent  py-8 w-full my-1 flex justify-between items-center"
          variant="ghost"
        >
          <div className="flex gap-x-2 items-center">
            <div className="w-11 aspect-square  bg-[rgba(93,_135,_255,_0.1)] rounded-md"></div>
            <div>
              <h4 className="font-semibold text-lg">Nairobi</h4>
              <p className="text-[#7c8fac] text-sm mt-1">Nairobi</p>
            </div>
          </div>
          <p className="text-white text-base mt-1">View All</p>
        </Button>
        <Button
          className="w-full py-1 bg-transparent border-indigo-400"
          variant="outline"
          size="default"
        >
          View All
        </Button>
      </CardContent>
    </Card>
  );
};

export default OtherCities;

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import earth from "@/public/earth.png";
import React from "react";
import IconComponent from "@/components/common/icon/IconComponent";
import Image from "next/image";
import banner from "@/public/banner.png";
const HeroBanner = () => {
  return (
    <Card className="col-span-12 lg:col-span-8 rounded-lg bg-[rgba(93,_135,_255,_0.1)]">
      <CardContent className="px-4 py-2">
        <div className="flex max-sm:flex-col w-full ">
          <div className="flex-1 py-4 pl-3">
            <div className=" flex items-center gap-x-2  mb-7">
              <Avatar>
                <AvatarImage src={earth.src} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-xl capitalize">
                Current weather in Nairobi, Kenya
              </h2>
            </div>
            <div className="flex justify-between items-center gap-x-2">
              <div className="flex-1 py-1  pr-3 flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-grotesk font-bold">25°C</h2>
                  <p className="text-[#7c8fac] text-sm mt-1">Clear</p>
                </div>
                <IconComponent className="h-12 w-12" weatherCode="200" />
              </div>
              <div className="flex-1 py-1 border-l border-l-[#7c8fac]/20 pl-3 flex justify-between items-center">
                <IconComponent className="h-12 w-12" weatherCode="200" />
                <div>
                  <h2 className="text-3xl font-grotesk font-bold">25°C</h2>
                  <p className="text-[#7c8fac] text-sm mt-1">Clear</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-end ">
            <Image src={banner} alt="earth" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroBanner;

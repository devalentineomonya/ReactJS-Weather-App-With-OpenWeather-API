import CurrentPrecipitation from "@/features/home/components/CurrentPrecipitation";
import HeroBanner from "@/features/home/components/HeroBanner";
import Precipitation from "@/features/home/widgets/Precipitation";
import Temperature from "@/features/home/widgets/Temperature";
import Twilight from "@/features/home/widgets/Twilight";
import Wind from "@/features/home/widgets/Wind";
export default function Home() {
  return (
   <main className="grid grid-cols-12 px-4 my-12">
    <HeroBanner/>
    <Temperature/>
    <Precipitation/>
    <Twilight/>
    <Wind/>
    <CurrentPrecipitation/>
   </main>
  );
}

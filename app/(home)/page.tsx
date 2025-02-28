import CurrentPrecipitation from "@/screens/home/components/CurrentPrecipitation";
import HeroBanner from "@/screens/home/components/HeroBanner";
import OtherCities from "@/screens/home/widgets/OtherCities";
import Precipitation from "@/screens/home/widgets/Precipitation";
import Pressure from "@/screens/home/widgets/Pressure";
import SummaryTable from "@/screens/home/widgets/SummaryTable";
import Temperature from "@/screens/home/widgets/Temperature";
import Trends from "@/screens/home/widgets/Trends";
import Twilight from "@/screens/home/widgets/Twilight";
import Weekly from "@/screens/home/widgets/Weekly";
import Wind from "@/screens/home/widgets/Wind";
export default function Home() {
  return (
    <main className="grid grid-cols-12 px-4 my-12 max-w-[1200px] ">
      <HeroBanner />
      <Temperature />
      <Precipitation />
      <Twilight />
      <Wind />
      <CurrentPrecipitation />
      <Pressure />
      <Weekly />
      <OtherCities />
      <Trends />
      <SummaryTable />
    </main>
  );
}

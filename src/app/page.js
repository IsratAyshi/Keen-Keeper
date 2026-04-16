import Banner from "@/components/homepage/Banner";
import Friends from "@/components/homepage/Friends";
import SummaryCards from "@/components/homepage/SummaryCards";
import Image from "next/image";

export const metadata = {
  title: "Keen Keeper | Home",
  
};

export default function Home() {
  return (
    <div className="bg-[#f8fafc]">
      <Banner />
      <SummaryCards />
      <Friends />
    </div>
  );
}

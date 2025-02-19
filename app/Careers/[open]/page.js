import openData from "../openData";
import Menu from "@/app/Components/Home/Menu";
import MobileMenu from "@/app/Components/Home/MobileMenu";
import Image from "next/image";
import underCon from "@/public/image/UnderConstraction/7365.jpg";

export default async function page({ params }) {
  var indexSet = [];
  var { open } = await params;
  open = parseInt(open);
  openData.map((data, index) => {
    if (data.id === open) {
      indexSet.push(index);
    }
  });
  if (indexSet.length === 0 || indexSet.length > 1) {
    return <div>Something Wrong with Backend</div>;
  } else {
    return (
      <div>
        <Menu />
        <MobileMenu />

        <h1 className="flex justify-center font-headingHeavy text-[3vw] text-[#185BD8] drop-shadow-md">Under Maintenance</h1>

        <div className="flex justify-center w-full">
          <Image src={underCon} alt="UnderCon" className="w-[30%]" />
        </div>
      </div>
    );
  }
}

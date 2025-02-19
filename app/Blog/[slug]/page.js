import Blog_data from "@/app/db/DBBlog";
import Image from "next/image";
import MobFooter from "@/app/Components/Home/Mobile/MobFooter";
import Menu from "@/app/Components/Home/Menu";
import MobileMenu from "@/app/Components/Home/MobileMenu";
import Footer from "@/app/Components/Footer/Footer";
import Link from "next/link";

export default async function page({ searchParams }) {
  const OutData = await searchParams;
  const index = OutData.Index;

  const HighWord = ({ data }) => {
    return <span className="text-red bg-slate-900">{data}</span>;
  };

  return (
    <div>
      <Menu />
      <MobileMenu />
      <div className=" flex justify-center">
        <div className="w-[85%] 2xl:w-[75%] xl">
          {Blog_data[index].map((data, index) => {
            if (Object.keys(data) == "h1") {
              return (
                <div key={index}>
                  <h1 className="text-[3vw]  mb-1 mt-10 font-heading">
                    {data.h1}
                  </h1>
                </div>
              );
            }
            if (Object.keys(data) == "h2") {
              return (
                <div key={index} className="flex justify-center">
                  <h1 className=" w-[90%] text-[2.5vw] mb-2 mt-2  font-headingSemiBold">
                    {data.h2}
                  </h1>
                </div>
              );
            }

            if (Object.keys(data) == "h3") {
              return (
                <div key={index} className="flex justify-center">
                  <h1 className=" w-[90%] text-[2vw] mb-2 mt-2  font-body">
                    {data.h3}
                  </h1>
                </div>
              );
            }

            if (Object.keys(data) == "IMG") {
              return (
                <div
                  key={index}
                  className="w-full  mt-10 mb-10 flex justify-center"
                >
                  <div className="w-[80%] flex justify-center">
                    <Image src={data.IMG} alt="Blog Images" />
                  </div>
                </div>
              );
            }

            if (Object.keys(data) == "p") {
              return (
                <div
                  className="flex text-justify tracking-tight justify-center"
                  key={index}
                >
                  <p className=" w-[90%] md:text-[1.3vw] text-[2vw] md:mb-5 lg:mb-10 mb-1 mt-1 md:mt-5 lg:mt-10 font-body">
                    {data.p}
                  </p>
                </div>
              );
            }

            if (Object.keys(data) == "PL") {
              return (
                <div className="flex justify-center" key={index}>
                  <p className=" w-[90%] text-[1.3vw] mb-10 mt-10  font-body">
                    {data.PL.P}
                    <Link className="text-blue-600" href={data.PL.url}>
                      {data.PL.L}
                    </Link>
                  </p>
                </div>
              );
            }

            if (Object.keys(data) == "pa") {
              var sen = data.pa.split(" ");

              return (
                <div
                  className="flex justify-center text-justify tracking-tight"
                  key={index}
                >
                  <p className=" w-[90%] text-[1.3vw]  mb-10 mt-10  font-body">
                    {sen.map((data2, index2) => {
                      if (data2[0] === "#") {
                        return (
                          <span
                            key={index2}
                            className="text-red-600 px-2 text-[1.2vw] py-[3px] rounded-md bg-slate-800"
                          >
                            {data2.replaceAll("#", "")}
                          </span>
                        );
                      } else {
                        return data2 + " ";
                      }
                    })}
                  </p>
                </div>
              );
            }
            if (Object.keys(data) == "list") {
              return (
                <div
                  className="flex justify-center text-justify tracking-tight"
                  key={index}
                >
                  <div className="w-[80%]">
                    <ul className="list-disc  md:text-[1.3vw] text-[2vw] md:mb-5 lg:mb-10 mb-1 mt-1 md:mt-5 lg:mt-10  font-body">
                      {
                        (data.list).map((data2,index2)=>{
                          return(
                            <li className="mb-5" key={index2}>
                              {
                                data2
                              }
                            </li>
                          )

                        })
                      }
                    </ul>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="md:hidden">
        <MobFooter />
      </div>
    </div>
  );
}

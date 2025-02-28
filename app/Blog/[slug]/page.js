import Blog_data from "@/app/db/DBBlog";
import Image from "next/image";
import parse from "html-react-parser";
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

  var cout = 0;

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
                  <h1 className="md:text-[3vw] text-[4vw]  mb-4 md:mb-14 mt-6 md:mt-10 font-heading">
                    {data.h1}
                  </h1>
                </div>
              );
            }
            if (Object.keys(data) == "h2") {
              return (
                <div key={index} className="flex justify-center">
                  <h1 className=" w-[90%] md:text-[2.5vw] text-[3.5vw] mb-8 mt-8  font-headingSemiBold">
                    {data.h2}
                  </h1>
                </div>
              );
            }

            if (Object.keys(data) == "h3") {
              return (
                <div key={index} className="flex justify-center">
                  <h1 className=" w-[90%] text-[2vw] mb-10 mt-3  font-body">
                    {data.h3}
                  </h1>
                </div>
              );
            }

            if (Object.keys(data) == "h4") {
              return (
                <div key={index} className="flex justify-center">
                  <h1 className=" w-[90%] text-[1.1vw] mb-10 mt-3  font-body">
                    {data.h4}
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
                  <p className=" w-[90%] md:text-[1.2vw] text-[2.4vw] md:mb-2 lg:mb-2 mb-1 mt-1 md:mt-5 lg:mt-2 font-body">
                    {data.p}
                  </p>
                </div>
              );
            }

            if (Object.keys(data)[0] == "CL") {
              var id=0
              return (
                <div className="flex justify-center ">
                  <div className="bg-slate-800 py-4 px-4 pr-6 rounded-md   ">
                    <ul className="list-[decimal-leading-zero]  list-inside text-yellow-500">
                      {(data.CL).map((data1, a) => {
                      
                       
                        
                        return (
                          <li  key={a}>
                            <span className="text-lime-500 ml-2">{data1.P}</span>

                          </li>
                        );
                      })}

                    </ul>
                  </div>
                </div>
              );
            }

            if (Object.keys(data) == "PL") {
              return (
                <div className="flex justify-center" key={index}>
                  <p className=" w-[90%] text-[1.9vw] md:text-[1.3vw] mb-10 mt-10  font-body">
                    {data.PL.P}
                    <Link className="text-blue-600" href={data.PL.url}>
                      {data.PL.L}
                    </Link>
                    {data.PL.P2}
                  </p>
                </div>
              );
            }

            if (Object.keys(data)[0] === "pa") {
              var sen = data.pa.split(" ");

              if (sen[0] == "%") {
                return (
                  <div
                    className="flex justify-center text-justify tracking-tight"
                    key={index}
                  >
                    <p className=" w-[90%]  md:text-[1.3vw] text-[2.4vw]  mb-2 mt-2  font-body">
                      <span className="font-headingSemiBold">
                        {data.pa.replaceAll("%", "")}
                      </span>
                    </p>
                  </div>
                );
              } else {
                return (
                  <div
                    className="flex justify-center w-full text-justify tracking-tight"
                    key={index}
                  >
                    <p className=" w-[90%]  md:text-[1.3vw] text-[2.4vw]  mb-2 mt-2  font-body">
                      {sen.map((data2, index2) => {
                        if (data2[0] === "#") {
                          return (
                            <span
                              key={index2}
                              className="text-red-400 md:font-body font-heading md:text-red-600 px-2 text-[1.8vw] md:text-[1.2vw] py-[3px] rounded-md bg-slate-600  md:bg-slate-800"
                            >
                              {data2.replaceAll("#", "") + " "}
                            </span>
                          );
                        } else if (data2[0] === "*") {
                          return (
                            <span key={index2} className="font-headingSemiBold">
                              {data2.replaceAll("*", "") + " "}
                            </span>
                          );
                        } else {
                          return parse(data2) + " ";
                        }
                      })}
                    </p>
                  </div>
                );
              }
            }

            if (Object.keys(data) == "PD") {
              return (
                <div className="flex justify-center" key={index}>
                  <p className=" w-[90%] text-[1.3vw] mb-10 mt-10  font-body">
                    {parse(data.PD.P)}
                    <Link className="text-blue-600" href={data.PD.url}>
                      {parse(data.PD.L)}
                    </Link>
                    {parse(data.PD.P2)}
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
                    <ul className="list-disc  md:text-[1.3vw] text-[2vw] md:mb-2 lg:mb-2 mb-1 mt-1 md:mt-5 lg:mt-2  font-body">
                      {data.list.map((data2, index2) => {
                        if (Object.keys(data2) == "PL") {
                          return (
                            <li className="mb-3" key={index2}>
                              <div className="flex justify-start">
                                <p className=" text-[1.3vw] font-body">
                                  {data2.PL.P}
                                  <Link
                                    className="text-blue-600"
                                    href={data2.PL.url}
                                  >
                                    {data2.PL.L}
                                  </Link>
                                </p>
                              </div>
                            </li>
                          );
                        } else {
                          return (
                            <li className="mb-5" key={index2}>
                              {parse(data2)}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="mt-8 hidden md:block">
        <Footer />
      </div>
      <div className="mt-8 md:hidden">
        <MobFooter />
      </div>
    </div>
  );
}

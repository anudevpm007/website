import Menu from "../Components/Home/Menu";
import BannerImg from "@/public/image/BlogPage/blogsBannner.png";
import img1_1 from "@/public/image/BlogPage/BlogBottom/img1.png";
import img1_2 from "@/public/image/BlogPage/BlogBottom/img2.png";
import img1_3 from "@/public/image/BlogPage/BlogBottom/img3.png";
import Footer from "../Components/Footer/Footer";
import MobFooter from "../Components/Home/Mobile/MobFooter";
import MobileMenu from "../Components/Home/MobileMenu";
import Link from "next/link";
import Image from "next/image";
import BlogDataCard from "@/app/db/DBCardData";

const Card = ({ image, heading, pera, date, index }) => {
  return (
    <div className="mb-10 bg-slate-200 pb-8 rounded-3xl">
      <Image src={image} alt="Image1" className="w-[100%] rounded-t-2xl" />
      <div className="flex justify-center items-center flex-col mt-5">
        <div className="w-[95%] flex justify-between">
          <div className="text-[2.4vw] md:text-[2vw] w-[60%] xl:text-[1vw] font-body">
            {heading}
          </div>
          <div className="text-[2.4vw] md:text-[2vw] xl:text-[1.1vw] font-body">
            {date}
          </div>
        </div>
        <div className="w-[95%] mt-10">
          <p className="xl:text-[1.2vw] md:text-[1.9vw] text-[2.8vw]  font-body text-justify">
            {pera}
          </p>
        </div>
        <div className="w-[95%] flex justify-end mt-10">
          <Link
            href={{
              pathname: "/Blog/" + heading,
              query: {
                Index: index,
              },
            }}
            className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1.7vw] xl:text-[1vw]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const SmallCard = ({image,heading,pera,index}) => {
  return (
    <div  className="flex flex-col xl:flex-row  mb-14 xl:mb-5">
      <div className="flex items-center justify-start">
        <Image
          src={image}
          alt="Image 2"
          className="xl:w-[12.5vw] md:w-1/2 w-3/4 rounded-xl"
        />
      </div>
      <div className="xl:ml-5">
        <h1 className=" font-heading text-[3vw] lg:text-[2vw] xl:text-[1.6vw] mt-2">
          {heading}
        </h1>
        <p className=" font-body w-[80%] xl:w-full xl:text-[1vw] text-[1.8vw] mt-5">
          {pera}
        </p>
        <div className="flex justify-center">
          <div className="flex justify-start xl:justify-end xl:w-[70%] w-[100%] mt-5 xl:mt-0">
            <Link
              href={{
                pathname: "/Blog/" + heading,
                query: {
                  Index: index,
                },
              }}
              className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1.7vw] xl:text-[1vw]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function page() {
  return (
    <div>
      <Menu />
      <MobileMenu />

      <div id="bodySec">
        <div className="relative bg-[#F1F5F7] py-5 xl:py-0">
          <Image
            className="hidden xl:block"
            src={BannerImg}
            alt="Blog Banner"
          />
          <div className="relative bg  xl:absolute bottom-[40%] flex justify-center">
            <div className="w-[85%]">
              <h1 className=" text-[5vw] md:text-[4vw] lg:text-[3.2vw] font-body">
                Stay Tuned For Our Next{" "}
                <span className="font-heading text-[#0858ED]">Blog !!</span>
              </h1>
              <p className="lg:w-[40%] md:w-[45%] w-[75%]  font-body lg:text-[1vw] md:text-[2vw] text-[2.4vw] mt-5">
                We’re working on exciting new content to keep you informed on
                the latest trends and insights in cybersecurity. Stay tuned for
                our upcoming posts as we dive deeper into essential topics to
                help protect your business and stay ahead of the ever-evolving
                threat landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#F1F5F7] py-16">
          <div className="w-[85%]">
            <h1 className="font-heading text-[5vw] md:text-[4vw] lg:text-[3vw] mt-10">
              Trending blogs
            </h1>
            <p className="font-body text-[2.5vw] md:text-[1vw] mt-5">
              Check out our most popular blogs, where we discuss the latest in
              cybersecurity trends, best practices, and expert advice. From
              protecting your web and mobile applications to understanding
              critical vulnerabilities, these blogs are packed with valuable
              insights to help you enhance your security strategy.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 mt-10 gap-12">
              <div className=" ">
                {BlogDataCard.map((data, index) => {
                  if (BlogDataCard.length - 1 === index) {
                    return (
                      <Card
                        date={data.Date}
                        heading={data.Heading}
                        image={data.img}
                        index={index}
                        pera={data.pera}
                        key={index}
                      />
                    );
                  }
                })}
              </div>
              <div>
                <div className="grid grid-cols-2 xl:grid-cols-1 ">
                  {
                    BlogDataCard.map((data,index)=>{
                      if(BlogDataCard.length - 1 === index){
                        return
                      }
                      else{
                        return(
                          <SmallCard key={index} heading={data.Heading} image={data.img} index={index} pera={data.Pera1}/>
                        )
                      }
                    })
                  }
                  {/* <div className="flex flex-col xl:flex-row  mb-14 xl:mb-5">
                    <div className="flex items-center justify-start">
                      <Image
                        src={img3}
                        alt="Image 2"
                        className="xl:w-[12.5vw] md:w-1/2 w-3/4 rounded-xl"
                      />
                    </div>
                    <div className="xl:ml-5">
                      <h1 className=" font-heading text-[3vw] lg:text-[2vw] xl:text-[1.6vw] mt-2">
                        GPT-3 and Open AI is the future.{" "}
                      </h1>
                      <p className=" font-body w-[80%] xl:w-full xl:text-[1vw] text-[1.8vw] mt-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="flex justify-center">
                        <div className="flex justify-start xl:justify-end xl:w-[70%] w-[100%] mt-5 xl:mt-0">
                          <Link
                            href={"/"}
                            className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1.7vw] xl:text-[1vw]"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="flex flex-col xl:flex-row mb-14 xl:mb-5">
                    <div className="flex items-center justify-start">
                      <Image
                        src={img4}
                        alt="Image 2"
                        className="xl:w-[12.5vw] md:w-1/2 w-3/4 rounded-xl"
                      />
                    </div>
                    <div className="xl:ml-5">
                      <h1 className=" font-heading text-[3vw] lg:text-[2vw] xl:text-[1.6vw] mt-2">
                        GPT-3 and Open AI is the future.{" "}
                      </h1>
                      <p className=" font-body w-[80%] xl:w-full xl:text-[1vw] text-[1.8vw] mt-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="flex justify-center">
                        <div className="flex justify-start xl:justify-end xl:w-[70%] w-[100%] mt-5 xl:mt-0">
                          <Link
                            href={"/"}
                            className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1.7vw] xl:text-[1vw]"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="flex flex-col xl:flex-row  mb-14 xl:mb-5">
                    <div className="flex items-center justify-start">
                      <Image
                        src={img5}
                        alt="Image 2"
                        className="xl:w-[12.5vw] md:w-1/2 w-3/4 rounded-xl"
                      />
                    </div>
                    <div className="xl:ml-5">
                      <h1 className=" font-heading text-[3vw] lg:text-[2vw] xl:text-[1.6vw] mt-2">
                        GPT-3 and Open AI is the future.{" "}
                      </h1>
                      <p className=" font-body w-[80%] xl:w-full xl:text-[1vw] text-[1.8vw] mt-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="flex justify-center">
                        <div className="flex justify-start xl:justify-end xl:w-[70%] w-[100%] mt-5 xl:mt-0">
                          <Link
                            href={"/"}
                            className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1.7vw] xl:text-[1vw]"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-10 justify-center">
          <div className="w-[85%]">
            <h1 className=" text-[5vw] md:text-[4vw] lg:text-[3vw] font-body">
              The Astraliva{" "}
              <span className="text-[#175BD8]">Security Library</span>
            </h1>
            <p className="lg:text-[2vw] xl:text-[1.5vw] md:text-[2vw] text-[2.4vw] mt-5 font-body">
              The Astraliva Security Library: Your trusted source for
              cybersecurity information. The Security Library offers a wealth of
              information on the latest threats, trends, and best practices.
            </p>
          </div>
        </div>
        <div className="flex py-10 justify-center">
          <div className="w-[85%] grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#00000017] h-[260px] sm:h-[380px] md:h-[400px] lg:h-auto xl:rounded-2xl md:rounded-xl rounded-md">
              <Image src={img1_1} alt="Bottom Image" className="w-[100%]" />
              <div className="px-2 xl:pb-10 ">
                <h1 className="mt-5 lg:mt-10 xl:mt-14 xl:text-[1.5vw] text-[3vw] md:text-[2vw] ">
                  GPT-3 and Open AI is the future.{" "}
                </h1>
                <div className="flex justify-center md:mt-14 mt-6 xl:mt-28">
                  <div className="flex justify-end w-[95%]">
                    <Link
                      href={"/"}
                      className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#00000017] h-[260px] sm:h-[380px] md:h-[400px] lg:h-auto xl:rounded-2xl md:rounded-xl rounded-md">
              <Image src={img1_2} alt="Bottom Image" className="w-[100%]" />
              <div className="px-2 xl:pb-10 ">
                <h1 className="mt-5 lg:mt-10 xl:mt-14 xl:text-[1.5vw] text-[3vw] md:text-[2vw] ">
                  GPT-3 and Open AI is the future.{" "}
                </h1>
                <div className="flex justify-center md:mt-14 mt-6 xl:mt-28">
                  <div className="flex justify-end w-[95%]">
                    <Link
                      href={"/"}
                      className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#00000017] h-[260px] sm:h-[380px] md:h-[400px] lg:h-auto xl:rounded-2xl md:rounded-xl rounded-md">
              <Image src={img1_3} alt="Bottom Image" className="w-[100%]" />
              <div className="px-2 xl:pb-10 ">
                <h1 className="mt-5 lg:mt-10 xl:mt-14 xl:text-[1.5vw] text-[3vw] md:text-[2vw] ">
                  GPT-3 and Open AI is the future.{" "}
                </h1>
                <div className="flex justify-center md:mt-14 mt-6 xl:mt-28">
                  <div className="flex justify-end w-[95%]">
                    <Link
                      href={"/"}
                      className="bg-[#185BD8] text-white rounded-md px-8 py-2 text-[1vw]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Footer />
        </div>
        <div className="md:hidden">
          <MobFooter />
        </div>
      </div>
    </div>
  );
}

import dbServices from "./db/dbServices";
import BlogDataCard from "./db/DBCardData";
import openData from "./Careers/openData";

export default async function sitemap() {
  const baseUrl = "https://astraliva.com";
  var url = "";

  const Serv = () => {
    var objs = [];
    dbServices?.flatMap(
      (d0, id) =>
        d0.content?.map((d1, i) => {
          url = `${baseUrl}/Services/${encodeURIComponent(d1.heading)}?id=${id}&i=${i}`;

          const obj = {
            url: url.toString().replace(/&/g, "&amp;"),
            lastModified: new Date().toISOString(),
          };

          objs.push(obj);

          //   return "";
        }) || []
    );
    return objs;
  };

  const blog = () => {
    var objs = [];
    BlogDataCard?.map((d1, id) => {
      url = `${baseUrl}/${encodeURIComponent(d1.Heading)}?index=${id}`;

      const obj = {
        url: url.toString().replace(/&/g, "&amp;"),
        lastModified: new Date().toISOString(),
      };

      objs.push(obj);

      //   return "";
    }) || [];

    return objs;
  };


  const carrier = () => {
    var objs = [];
    openData?.map((d1, id) => {
      url = `${baseUrl}/carrier/${encodeURIComponent(d1.id)}`;

      const obj = {
        url: url.toString().replace(/&/g, "&amp;"),
        lastModified: new Date().toISOString(),
      };

      objs.push(obj);

      //   return "";
    }) || [];

    return objs;
  };

  const redataS = Serv();
  const redataB = blog();
  const redataC = carrier();

  console.log(...redataB);

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    {
        url: baseUrl+"/WhoWeAre",
        lastModified: new Date().toISOString(),
    },
    {
        url: baseUrl+"/Blog",
        lastModified: new Date().toISOString(),
    },
    {
        url: baseUrl+"/Careers",
        lastModified: new Date().toISOString(),
    },
    // ...redataS,
    // ...redataB,
    // ...redataC
  ];
}

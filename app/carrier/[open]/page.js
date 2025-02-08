import openData from "../openData";
import Menu from "@/app/Components/Home/Menu";
import MobileMenu from "@/app/Components/Home/MobileMenu";



export default async function page({params}) {
    var indexSet = [];
    var {open} = await params;
    open = parseInt(open)
    openData.map((data,index)=>{
        if(data.id === open){
            indexSet.push(index)
        }
    })
  if(indexSet.length === 0 || indexSet.length >1){
    return (
        <div>Something Wrong with Backend</div>
      )
  }else{
    return(
        <div>
            <Menu/>
            <MobileMenu/>
        </div>
    )
  }
}

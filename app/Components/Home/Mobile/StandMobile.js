import standData from "./db/StandOut";
import StandList from "./StandList";



export default function StandMobile() {

    

    return (
        <div className="grid grid-cols-1 mt-6">
            {
                standData.map((data, index) => {
                    return (
                        <StandList key={index} heading={data.heading} pera={data.Pera} img={data.Image} />
                    )
                })
            }
        </div>
    )
}

import Cons from "./Cons"
import Pros from "./Pros"

const Feedback = ({ resultData }) => {

  console.log(resultData)
    return (
        <>
            <div className=" p-10">
                <div className="space-y-4">
                {resultData.map((item, index)=> <Pros key={index} item={item}/>)}
             
                
                </div>
            </div>
        </>
    )
}

export default Feedback
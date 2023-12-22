const Cons = ({item}) => {
    return (
        <div className={`bg-gray-700 rounded-lg ${item.title? "border-b-4" : "border"}  border-red-500`}>
            <h3 className="text-white text-2xl p-2 font-bold">{item?.title} </h3>
            <div className=" pb-4 px-6 border-green-500">
            {item?.pros.map((p, index)=> <div key={index} className="flex space-x-2">
           <i class="ri-close-line text-red-400"></i>
            <p className="text-white text-sm font-medium">{p}</p>
            </div>)}
        </div>
        </div>
    )
}

export default Cons
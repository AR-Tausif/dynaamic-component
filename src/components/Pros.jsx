const Pros = ({ item }) => {
    const titleBorder = item.title ? "" : "border-[3.5px]";
    const borderColor = item?.cons ? "border-red-500" : "border-green-500";
    const borderStyle = `${titleBorder} ${borderColor}`;
    
    if (item?.title) {
       return (
          <div className={`bg-gray-700 rounded-lg ${borderStyle}`}>
             <div className={''}>
                <h3 className="text-white text-2xl p-2 font-bold">{item?.title} </h3>
                {item?.pros && (
                   <div className={` pb-4 px-6 rounded border-x-4 ${item?.cons || "border-b-4"}  border-green-500`}>
                      {item?.pros?.map((p, index) => (
                         <div key={index} className="flex space-x-2 items-center">
                            <i className="ri-checkbox-circle-line text-green-400"></i>
                            <p className="text-white text-sm font-medium">{p}</p>
                         </div>
                      ))}
                   </div>
                )}
 
                {item?.cons && (
                   <div className="pb-4 px-6 rounded border-x-4 border-b-4  border-red-500">
                      {item?.cons?.map((p, index) => (
                         <div key={index} className="flex space-x-2 items-center">
                            <i className="ri-close-line text-red-400"></i>
                            <p className="text-white text-sm font-medium">{p}</p>
                         </div>
                      ))}
                   </div>
                )}
             </div>
          </div>
       );
    }
 
    return (
       <div className={`bg-gray-700 rounded-lg ${borderStyle} backdrop-filter backdrop-blur-sm`}>
          <div className={''}>
             <h3 className="text-white text-2xl p-2 font-bold">{item?.title} </h3>
             {item.pros && (
                <div className="pb-4 px-6 rounded ">
                   {item?.pros?.map((p, index) => (
                      <div key={index} className="flex space-x-2 items-center">
                         <i className="ri-checkbox-circle-line text-green-400"></i>
                         <p className="text-white text-sm font-medium">{p}</p>
                      </div>
                   ))}
                </div>
             )}
 
             {item?.cons && (
                <div className="pb-4 px-6 rounded-sm">
                   {item?.cons?.map((p, index) => (
                      <div key={index} className="flex space-x-2 items-center">
                         <i className="ri-close-line text-red-400"></i>
                         <p className="text-white text-sm font-medium">{p}</p>
                      </div>
                   ))}
                </div>
             )}
          </div>
       </div>
    );
 };
 
 export default Pros;
 
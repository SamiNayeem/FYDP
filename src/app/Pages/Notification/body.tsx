import React from "react";

export default function Main(){
    return(
        <main className="mx-auto mt-40">
            
            
            <h1 className="text-3xl text-center font-bold border-b-4 border-blue-500 mt-20 mb-20 w-80 mx-auto">Consultation History  </h1>
            <div className="rounded-lg">
                

                <table className="text-center h-80 w-3/4 mx-60 overflow-y">
                    <thead className="bg-blue-200 border-b-2 border-blue-300 sticky">
                        <tr className="flex w-full mb-4">
                            <th className="p-4 w-1/4">Time</th>
                            <th className="p-4 w-1/4">OTP</th>
                            
                            <th className="p-4 w-1/4">Delete</th>
                        </tr>
                    </thead>
                
                    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full max-h-96">
                        <tr className="flex w-full  border border-solid border-l-0 border-r-0">
                            <td className="p-4 w-1/4"></td>
                            <td className="p-4 w-1/4"></td>
                            
                            <td className="p-4 w-1/4"><button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">Delete</button></td>
                        </tr>
                        
                        
                        
                    </tbody>
                </table>
            </div>
            
        
        </main>
        



            
        
        
        

        
    )
}
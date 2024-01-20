'use client';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ConsultationHistory(){

    const [date,setDate]=useState('');
    const [hospital,setHospital]=useState('');
    const [doctor,setDoctor]=useState('');

    const EHRInfo=async(e:any)=>{
        const id = {nid:'321'};
        try {
          const response = await fetch('/api/EHRFetch',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id),
          });  
          if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log('data from api');
          console.log(data);
        }
        catch (error) {
        console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
        EHRInfo();
    },[])

    return (
        // <main classNameName="flex flex-col items-center justify-center mt-40">
        //     <h1 classNameName="text-3xl font-bold border-b-4 border-blue-500 mt-20 mb-5">Consultation History
        //     </h1>
        //     <div classNameName="overflow-auto rounded-lg shadow mb-10 ">
        //         <table classNameName=" w-full flex flex-col h-60">
        //             <thead classNameName="bg-blue-200 border-b-2 border-blue-300 sticky">
        //                 <tr classNameName="border border-solid border-l-0 border-r-0">
        //                     <th classNameName="text-md px-10 py-5 border w-1/4">Date</th>
        //                     <th classNameName="text-md px-10 py-5 border w-1/4">Hospital</th>
        //                     <th classNameName="text-md px-10 py-5 border w-1/4">Doctor</th>
        //                     <th classNameName="text-md px-10 py-5 border w-1/4"></th>
        //                 </tr>
        //             </thead>
        //             <tbody classNameName=' overflow-y-scroll h-3/4' >
        //                 <tr classNameName="hover:bg-gray-50">
        //                     <td classNameName="text-md px-10 py-4 border w-1/4">{date}</td>
        //                     <td classNameName="text-md px-10 py-4 border w-1/4">{hospital}</td>
        //                     <td classNameName="text-md px-10 py-4 border w-1/4">{doctor}</td>
        //                     <td classNameName="text-md px-10 py-4 border w-1/4">
        //                         <button classNameName="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">
        //                             View Details
        //                         </button>
        //                     </td>
        //                 </tr>
                        
                        
                        
        //             </tbody>
        //         </table>
        //     </div>
        //     <div classNameName="flex mt-4">
        //         <button classNameName="bg-blue-500 text-white px-4 py-2 mr-10 rounded">
        //             Back to Previous Page
        //         </button>
        //         <button classNameName="bg-blue-500 text-white px-4 py-2 rounded">
        //             Summarized Report
        //         </button>
        //     </div>
        // </main>
        <main className='mt-40'>
            <h1 className="text-3xl text-center font-bold border-b-4 border-blue-500 mt-20 mb-20 w-80 mx-auto">Consultation History  </h1>
            <div className="rounded-lg">
                

                <table className="text-center w-3/4 mx-60 overflow-y">
                    <thead className="bg-blue-200 border-b-2 border-blue-300 sticky">
                        <tr className="flex w-full mb-4">
                            <th className="p-4 w-1/4">Date</th>
                            <th className="p-4 w-1/4">Hospital</th>
                            <th className="p-4 w-1/4">Doctor</th>
                            <th className="p-4 w-1/4">View EHR</th>
                        </tr>
                    </thead>
                
                    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full max-h-96">
                        <tr className="flex w-full  border border-solid border-l-0 border-r-0">
                            <td className="p-4 w-1/4">{date}</td>
                            <td className="p-4 w-1/4">{hospital}</td>
                            <td className="p-4 w-1/4">{doctor}</td>
                            <td className="p-4 w-1/4"><button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">View Details</button></td>
                        </tr>
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </main>
    )
}
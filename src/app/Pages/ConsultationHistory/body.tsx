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
        <main className="flex flex-col items-center justify-center mt-40">
            <h1 className="text-3xl font-bold border-b-4 border-blue-500 mt-20 mb-5">Consultation History
            </h1>
            <div className="overflow-auto rounded-lg shadow mb-10 ">
                <table className=" w-auto table-auto flex flex-col">
                    <thead className="bg-blue-200 border-b-2 border-blue-300 sticky">
                        <tr className="border border-solid border-l-0 border-r-0">
                            <th className="text-md px-10 py-5 border">Date</th>
                            <th className="text-md px-10 py-5 border">Hospital</th>
                            <th className="text-md px-10 py-5 border">Doctor</th>
                            <th className="text-md px-10 py-5 border"></th>
                        </tr>
                    </thead>
                    <tbody className=' overflow-y-scroll h-1/2' >
                        <tr className="hover:bg-gray-50">
                            <td className="text-md px-8 py-4 border">{date}</td>
                            <td className="text-md px-8 py-4 border">{hospital}</td>
                            <td className="text-md px-8 py-4 border">{doctor}</td>
                            <td className="text-md px-8 py-4 border">
                                <button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">
                                    View Details
                                </button>
                            </td>
                        </tr>
                        
                        {/* dummy */}
                        <tr className="hover:bg-gray-50">
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{date}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{hospital}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{doctor}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">
                                <button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">
                                    View Details
                                </button>
                            </td>
                        </tr>
                        {/* dummy */}
                        <tr className="hover:bg-gray-50">
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{date}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{hospital}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{doctor}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">
                                <button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">
                                    View Details
                                </button>
                            </td>
                        </tr>
                        {/* dummy */}
                        <tr className="hover:bg-gray-50">
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{date}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{hospital}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{doctor}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">
                                <button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">
                                    View Details
                                </button>
                            </td>
                        </tr>
                        {/* dummy */}
                        <tr className="hover:bg-gray-50">
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{date}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{hospital}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{doctor}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">
                                <button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">
                                    View Details
                                </button>
                            </td>
                        </tr>
                        {/* dummy */}
                        <tr className="hover:bg-gray-50">
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{date}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{hospital}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{doctor}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">
                                <button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">
                                    View Details
                                </button>
                            </td>
                        </tr>
                        {/* dummy */}
                        <tr className="hover:bg-gray-50">
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{date}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{hospital}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">{doctor}</td>
                            <td className="text-md px-8 py-4 border whitespace-nowrap">
                                <button className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">
                                    View Details
                                </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className="flex mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 mr-10 rounded">
                    Back to Previous Page
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Summarized Report
                </button>
            </div>
        </main>
    )
}

import React, { FunctionComponent } from "react";
import Image from "next/image";



import appointment from 'public/consulting.png';
import doclist from 'public/doctor.png'
import docregistration from 'public/DoctorUserImageMale.png'

export default function WelcomeDoctor() {
    return (
        <main className="flex flex-col justify-center items-center mt-40 mb-60">
            <h1 className="text-3xl font-bold text-center border-b-4 border-blue-800 mt-20 mb-5">Welcome Hospital X
            </h1>
            <div className="flex items-center justify-center">
                <button
                    className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-20 py-10 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src={appointment} alt="consulting" id="consulting" height={200} width={130} />
                    

                    Doctor Appointment
                </button>
                <button
                    className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-20 py-10 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src={doclist} alt="affilieddoc" id="affilieddoc" height={200} width={130} />

                    Doctor List
                </button>

                <button
                    className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-20 py-8 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src={docregistration} alt="report" id="report" height={100} width={130} />

                    Register New Doctor
                </button>
            </div>
        </main>
    )
}

// import React, { FunctionComponent } from "react";

// interface ButtonProps {
//     icon: string;
//     text: string;
// }

// const BigSquareButton: React.FunctionComponent<ButtonProps> = ({ icon, text }) => (
//     <button
//         className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-10 py-5 m-5 rounded-md hover:bg-blue-600"
//     >
//         <img src={icon} alt="" className="w-40 h-40 mb-2" />
//         <span className="text-sm">{text}</span>
//     </button>
// );

// const WelcomeHospital: React.FunctionComponent = () => (

//     <><div className="flex justify-center items-center">
//         <h1 className="text-3xl font-bold text-center border-b-4 border-blue-500 mt-20 mb-5">Welcome Hospital X
//         </h1>
//     </div>
//     <div className="flex justify-center items-center">
//             <BigSquareButton icon="" text="Patient EHR Access Authorization" />
//             <BigSquareButton icon="" text="Affiliated Doctors" />
//             <BigSquareButton icon="" text="EHR" />
//         </div>
//     </>
// );

// export default WelcomeHospital;


"use client";

import React from "react";
import Image from "next/image";

import UserCoverImage from 'public/UserCover.jpg'
import UserImageMale from 'public/MaleUser.jpg'
import UserImageFemale from 'public/FemaleUser.jpg'


const Main = () => {
    return(
        <div className = "mt-20 ml-10 mr-10 mb-40 h-full overflow-hidden flex items-center justify-center">
            
            <main className="profile-page">
  <section className="relative py-16 block h-3/6 ">
    <div className="bottom-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden h-50-px top-0 flex bg-center bg-cover rounded-md" >
        <Image src={UserCoverImage} alt="Doctor Cover Image" className="w-full top-0 flex">

        </Image>

        
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    
  </section>
  <section className="relative py-0 bg-blueGray-200 h-fit">
    <div className="container mx-auto px-4 h-full">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="ml-auto">
                
                    <Image src={UserImageMale} alt="doctor profile pic" height={250} width={300} className="shadow-xl flex rounded-full align-middle border-none relative -m-16 -ml-20 lg:-ml-16 max-w-150-px" ></Image>
                    <br />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button className="bg-blue-500 hover:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">93312513538</span><span className="text-sm text-blueGray-400">National Identification No.</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">B+</span><span className="text-sm text-blueGray-400">Blood Group</span>
                </div>
                {/* <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
              Sami Nayeem
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              User
            </div>
            
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, veniam natus. Quasi facere numquam exercitationem pariatur alias iusto voluptatibus adipisci recusandae voluptas. Ducimus expedita corrupti molestiae eius ipsam? Ea soluta natus modi, exercitationem consequuntur maiores reprehenderit quisquam error at eius consequatur molestias sapiente labore magni tempora praesentium dignissimos delectus eos sit. Architecto hic dolore dicta velit nam modi nulla incidunt quam explicabo, sunt saepe maxime consectetur corporis numquam a ducimus itaque! Eos totam officia eaque libero corrupti nemo quas vitae est, exercitationem, dolorem incidunt neque sunt quisquam rem fuga qui animi iusto dolorum culpa blanditiis error excepturi necessitatibus! Eius, sed!
                </p>
                <a href="#" className="show-more font-normal text-pink-500">Show more</a>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
    
  </section>
</main>

        </div>
    )
};

export default Main;

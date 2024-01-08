import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'
import FAQ from './Components/FAQ/FAQ'
import Link from 'next/link'








export default function Home() {
  return (
    <div className='mt-40'>
        <section id='banner' className='align-items-center relative bg-cover pt-60 pl-20' style={{backgroundImage: `url('/hero-bg.jpg')`, height:'600px' }}>
          <div className='container'>
            <h1 className='m-0 text-5xl font-bold uppercase text-blue-900'>Welcome to CEHRSR</h1>
            <h2 className='ml-10 mt-5 text-blue-900 text-2xl'>Find all your medical reports just in few clicks</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-8"> Get Started </button>
          </div>

        </section>
      <FAQ/>
    </div>
  )
}

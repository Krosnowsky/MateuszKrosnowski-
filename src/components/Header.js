import React from 'react';
import hero_img from '../img/bg-page.png'
import profile_img from '../img/103.jpg'
import fb from '../img/fb.png'
import tw from '../img/tw.png'
import li from '../img/li2.png'

const Header = () => {
    return ( 
        <div className=" flex flex-col justify-center items-center w-full h-screen  bg-orange-400 "  >
            {/* <img className=" mx-auto " src={hero_img} alt="" /> */}
            <img className="h-48 m-10 rounded-full bg-contain"src={profile_img} alt="" />
            <h1 className="font-header text-5xl -rotate-6 text-white " >- Mateusz Krosnowski -</h1>
            <h2 className="text-white font-content pt-10" >Front-end Developer</h2>
            <div className='flex w-40 justify-between m-4'>
                <a href="#"><img className='h-8' src={fb} alt="" /></a>
                <a href="#"><img className='h-8' src={tw} alt="" /></a>
                <a href="#"><img className='h-8' src={li} alt="" /></a>
            </div>
        </div>
     );
}
 
export default Header;

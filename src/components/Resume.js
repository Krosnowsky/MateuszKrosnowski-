import React from 'react';
import Work from '../img/work.png'


const Resume = () => {
    return ( 
        <>
        <div className='flex flex-col justify-center'>

            <h2 className='font-content mx-auto text-4xl mt-20'>My resume</h2>
            <h3 className='font-content mx-auto mt-20 bg-gray-200 p-2 rounded-lg font-content uppercase'>doświadczenie zawodowe</h3>
            <div className='h-96 w-1/2 border-r-4 border-gray-200 '>
                <h3></h3>
                <p></p>
                <p></p>
                <div className='w-14 mt-52 absolute  ml-72 left-1/4 h-14  flex justify-self-end justify-center items-center rounded-full bg-orange-400'>

                <img className='w-8 ' src={Work} alt="" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Resume
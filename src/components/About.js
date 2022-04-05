import React from 'react';
import fb from '../img/fb.png'
import tw from '../img/tw.png'
import li from '../img/li.png'


const About = () => {
    return ( 
        <>  
            <div className='w-full  flex justify-center mt-20 text-4xl font-content'>

            <h2 className=''>o mnie</h2>
            </div>
        <div className='w-full flex justify-between'>
            <div className='w-2/4  font-content pt-10 m-10'>
                <p className="pt-6">Imie i nazwisko : <span className="text-gray-500">Mateusz Krosnowski</span></p>
                <p className="pt-6">Email : <span className="text-gray-500">Mateusz.krosnowski93@gmail.com</span></p>
                <p className="pt-6">Numer telefonu : <span className="text-gray-500">+48 577 279 144</span></p>
            </div>
            <div className=' mt-20 w-11/12'>
                <h2 className="m-4 text-left text-2xl capitalize font-content">cześć !</h2>
                <p className='font-content text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat laudantium quasi recusandae nesciunt explicabo quos ipsum excepturi enim odit quia nam repellendus voluptatum modi, aspernatur qui. Natus, laborum error.
                Soluta possimus dolorem minima, repellat in aliquam amet obcaecati. Incidunt qui obcaecati odio dolor distinctio! Ullam, perspiciatis nemo voluptas neque inventore cum maxime vitae ad, soluta in atque nobis est.</p>
                <p className='pt-20 font-content text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, culpa hic qui voluptatum, dicta aspernatur autem repudiandae neque cum consequatur nostrum nam necessitatibus dolores maxime quis eveniet repellendus, temporibus dolore.
                Repellendus voluptate, excepturi officiis maiores minima ut illo mollitia beatae, laboriosam sit et odio modi inventore. Aperiam labore minus quo! Sit excepturi labore aspernatur, obcaecati nam quod praesentium voluptatem minus.</p>
            <div className='flex mb-40'>
                 <a href="#"><img className='h-8 mt-6 mr-4 p-1 bg-gray-800' src={fb} alt="" /></a>
                <a href="#"><img className='h-8 mt-6 mr-4 p-1 bg-gray-800' src={tw} alt="" /></a>
                <a href="#"><img className='h-8 mt-6 mr-4 p-1 bg-gray-800' src={li} alt="" /></a>
            </div>
            </div>

        </div>
        </>
     );
}
 
export default About;
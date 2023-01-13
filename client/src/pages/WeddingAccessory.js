import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'


const WeddingAccessory = () => {

const [weddingAccessory, setWeddingAccessory] = useState([])

useEffect(()=>{
    const fetchAllWeddingAccessory = async ()=>{
        try {
            const res = await axios.get("http://localhost:5000/weddingAccessory")
            setWeddingAccessory(res.data)
            console.log(setWeddingAccessory)
        } catch (err) {
            console.log(err)
        }
    }

    fetchAllWeddingAccessory()
},[])

    return (
        <div>

            <h1 className='text-5xl ml-7'><b>Wedding Accessory</b></h1>

            {/* Card Div */}
            <div className='w-1/4 h-2/4 flex flex-wrap'>
                {weddingAccessory.map(wAccessory=>(
                <div className='mt-10 mb-10' key={wAccessory.id}>
                    <div className=" space-x-6">
                        <div className=' border-black boreder-solid border-2'>
                            <div className="h-1/3">
                                <img className='h-1/4'src={wAccessory.img} height="1500px" width={"1500px"}/> 
                                <div className="h-16 bg-slate-500 ">
                                    <h1>{wAccessory.name}</h1>
                                    <div className="flex space-x-28">
                                        <h1 className='ml-10 text-xl mt-1'>{wAccessory.price}</h1>
                                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}    
            </div>
        </div>
        
    );
}

export default WeddingAccessory;
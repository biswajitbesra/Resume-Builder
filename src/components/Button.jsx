import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../assets/Screenshot 2024-09-15 115959.png'
import Image2 from '../assets/Screenshot 2024-10-06 094322.png'
import { useDispatch } from 'react-redux'
import { addSelectedCompId } from '../slice/Slice'


export default function Button() {
    const [selectedComp, setSelectedComp] = useState(null)
    const dispatch = useDispatch()
    const exportComp = () => {
        dispatch(addSelectedCompId(selectedComp))
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-5 h-screen w-screen'>
                <div>
                    <p className='font-bold'>Select Your Template</p>
                </div>
                <div className='flex gap-5 mt-3 mb-6'>
                    <div className={`w-56 h-72 border hover:shadow-lg hover:cursor-pointer max-[530px]:h-48 max-[530px]:w-40 max-[390px]:h-40 max-[390px]:w-32 ${selectedComp === 1 ? 'border-slate-800' : ''}`}>
                        <img className='h-full w-full' src={Image1} alt="" onClick={() => setSelectedComp(1)} />
                        <p className='mt-2'>Template 1</p>
                    </div>
                    <div className={`w-56 h-72 border hover:shadow-lg hover:cursor-pointer max-[530px]:h-48 max-[530px]:w-40 max-[390px]:h-40 max-[390px]:w-32 ${selectedComp === 2 ? 'border-slate-800' : ''}`}>
                        <img className='h-full w-full' src={Image2} alt="" onClick={() => setSelectedComp(2)} />
                        <p className='mt-2'>Template 2</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="/form" className="border-1 bg-black px-5 py-1.5 rounded-md text-white font-medium max-[530px]:text-sm max-[530px]:px-3 max-[530px]:py-1" onClick={exportComp}>Create Resume</Link>
                </div>
            </div>
        </>
    )
}
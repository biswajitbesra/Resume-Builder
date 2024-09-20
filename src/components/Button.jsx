import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../assets/Screenshot 2024-09-15 115959.png'
import Image2 from '../assets/Screenshot 2024-09-15 121626.png'
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
            <div className='flex flex-col items-center justify-center gap-10 h-screen w-screen'>
                <div className='flex gap-5'>
                    <div className='w-56 h-72 border hover:shadow-lg hover:cursor-pointer border-slate-900'>
                        <img className='h-full w-full' src={Image1} alt=""onClick={() => setSelectedComp(1)} />
                    </div>
                    <div className='w-56 h-72 border hover:shadow-lg hover:cursor-pointer border-slate-900'>
                        <img className='h-full w-full' src={Image2} alt=""onClick={() => setSelectedComp(2)} />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="/form" className="border-1 bg-black px-5 py-1.5 rounded-md text-white font-medium" onClick={exportComp}>Create Resume</Link>
                </div>
            </div>
        </>
    )
}
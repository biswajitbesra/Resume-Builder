import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print'


const Template2 = () => {

    const personalData = useSelector(state => state.personalData);
    const educationalData = useSelector(state => state.educationalData);
    const projectData = useSelector(state => state.projectData);
    const jobData = useSelector(state => state.jobData);
    const internshipData = useSelector(state => state.internshipData);

    const contentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => contentRef.current,
    });

    return (
        <div className='flex flex-col items-center py-10 gap-4'>
            <div className="h-pdf-70.16 w-pdf-49.6 mx-auto max-[860px]:h-pdf-68.16 max-[860px]:w-pdf-47.6 bg-white shadow-lg rounded-lg" ref={contentRef}>
                <div className="flex items-start h-full">
                    <div className="w-1/3 bg-gray-100 h-full p-4 rounded-l-lg">
                        <div className="flex justify-center mb-6">
                            <div className="w-32 h-32 rounded-full overflow-hidden">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                                Contact
                            </h2>
                            <ul className="text-gray-700 space-y-2">
                                <li className='text-sm'>📞 {personalData.phoneNo}</li>
                                <li className='text-sm'>✉️ {personalData.emailId}</li>
                                <li className='text-sm'>🌐 {personalData.linkedIn}</li>
                                <li className='text-sm'>🌐 {personalData.gitHub}</li>
                                <li className='text-sm'>📍 {personalData.address}</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                                Skills
                            </h2>
                            <ul className="space-y-1">
                                {Object.values(personalData.skills).map(
                                    (skills, index) => (
                                        <li className="flex items-center text-sm" key={index}>
                                            {skills}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className='mb-6'>
                            <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                                Languages known
                            </h2>
                            <ul className="space-y-1">
                                {Object.values(personalData.language).map(
                                    (lang, index) => (
                                        <li className="flex items-center text-sm" key={index}>
                                            {lang}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4'>HOBBIES</h2>
                            {personalData.hobbies.map((hobby, index) => (
                                <p className='text-sm' key={index}>{hobby}</p>
                            ))}
                        </div>
                    </div>

                    <div className="w-2/3 p-4">
                        <div className="mb-6 h-32 flex flex-col justify-center">
                            <h1 className="text-5xl font-bold">{personalData.firstName}</h1>
                            <h1 className="text-5xl">{personalData.lastName}</h1>
                        </div>

                        <div className='mb-6'>
                            <h2 className='text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4'>Professional Summary</h2>
                            <p className='text-sm'>{personalData.summary}</p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                                Education
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                {educationalData.map(
                                    (data, index) => (
                                        <li key={index}>
                                            <p className="font-semibold">{data.course}</p>
                                            <p className='text-sm'>{data.college}</p>
                                            <p className='text-sm'>{data.qualificationStartYear} - {data.qualificationEndYear}</p>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                                Work Experience
                            </h2>

                            {jobData.some(data => data.jobOrganization) || internshipData.some(data => data.internshipOrganization) ? (
                                <div>
                                    {jobData.some(data => data.jobOrganization) && (
                                        <ul className=' space-y-1.5'>
                                            {jobData.map(
                                                (data, index) => (
                                                    <li className='mb-1' key={index}>
                                                        <h3 className='text-lg font-semibold'>{data.designation}</h3>
                                                        <p className='text-sm'>{data.jobOrganization}</p>
                                                        <p className='text-sm'>{data.jobStartYear} - {data.jobEndYear}</p>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}

                                    {internshipData.some(data => data.internshipOrganization) && (
                                        <div>
                                            {internshipData.map(
                                                (data, index) => (
                                                    <div className='mb-1' key={index}>
                                                        <h3 className='text-lg font-semibold'>{data.profile} (Intern)</h3>
                                                        <p className='text-sm'>{data.internshipOrganization}</p>
                                                        <p className='text-sm'>{data.internshipStartYear} - {data.internshipEndYear}</p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : "Fresher"}
                        </div>

                        <div>
                            <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                                Projects
                            </h2>
                            {projectData.some(data => data.title || data.description || data.link) && (
                                <ul className='pb-4 space-y-2'>
                                    {projectData.map(
                                        (data, index) => (
                                            <li className='mb-1 space-y-1.5' key={index}>
                                                <p className='font-semibold'>{data.title}</p>
                                                <p className='text-sm'>{data.description}</p>
                                                <a className='text-sm font-semibold' href={data.link}>{data.link}</a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button className='py-2 px-4 shadow rounded-lg bg-gray-200' onClick={handlePrint}>Download as PDF</button>
        </div>
    );
};

export default Template2;
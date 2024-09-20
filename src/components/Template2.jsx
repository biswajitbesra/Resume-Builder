import React,{useRef} from 'react';
import { useSelector } from 'react-redux';
import {useReactToPrint} from 'react-to-print'


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
        <div className="max-w-5xl mx-auto h-cus-70 bg-white shadow-lg rounded-lg" ref={contentRef}>
            <div className="flex items-start h-full">
                {/* Left Column */}
                <div className="w-1/3 bg-gray-100 h-full p-4 rounded-l-lg">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                            Contact
                        </h2>
                        <ul className="text-gray-700 space-y-2">
                            <li>📞 {personalData.phoneNo}</li>
                            <li>✉️ {personalData.emailId}</li>
                            <li>🌐 {personalData.linkedIn}</li>
                            <li>🌐 {personalData.gitHub}</li>
                            <li>📍 {personalData.address}</li>
                        </ul>
                    </div>


                    {/* Skills Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                            Skills
                        </h2>
                        <ul className="space-y-2">
                            {Object.values(personalData.skills).map(
                                (skills, index) => (
                            <li className="flex items-center"  key={index}>
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
                        <ul className="space-y-2">
                            {Object.values(personalData.language).map(
                                (lang, index) => (
                            <li className="flex items-center"  key={index}>
                                {lang}
                            </li>

                                )
                            )}
                        </ul>
                    </div>

                    <div>
                                <h2 className='text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4'>HOBBIES</h2>
                                {personalData.hobbies.map((hobby, index) => (
                                    <p key={index}>{hobby}</p>
                                ))}
                            </div>
                </div>

                {/* Right Column */}
                <div className="w-2/3 p-4">
                    {/* Header Section */}
                    <div className="mb-6 h-32 flex flex-col justify-center">
                        <h1 className="text-5xl font-bold">{personalData.firstName}</h1>
                        <h1 className="text-5xl">{personalData.lastName}</h1>
                    </div>

                <div className='mb-6'>
                                <h2 className='text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4'>Professional Summary</h2>
                                <p className='text-sm'>{personalData.summary}</p>
                            </div>


                    {/* Education Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                            Education
                        </h2>
                        {educationalData.map(
                            (data, index) => (
                        <ul className="space-y-4 text-gray-700" key={index}>
                            <li>
                                <p className="font-semibold">{data.course}</p>
                                <p>{data.college}</p>
                                <p>{data.qualificationStartYear} - {data.qualificationEndYear}</p>
                            </li>
                        </ul>
                            )

                        )}
                    </div>

                    {/* Work Experience Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-bold bg-gray-800 text-white py-2 px-4 mb-4">
                            Work Experience
                        </h2>

                        {jobData.some(data => data.jobOrganization) || internshipData.some(data => data.internshipOrganization) ? (
                                    <div>
                                        {jobData.some(data => data.jobOrganization) && (
                                            <div>
                                                {jobData.map(
                                                    (data, index) => (
                                                        <div className='mb-1' key={index}>
                                                            <h3 className='text-lg font-semibold'>{data.designation}</h3>
                                                            <p>{data.jobOrganization}</p>
                                                            <p>{data.jobStartYear} - {data.jobEndYear}</p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}

                                        {internshipData.some(data => data.internshipOrganization) && (
                                            <div>
                                                {internshipData.map(
                                                    (data, index) => (
                                                        <div className='mb-1' key={index}>
                                                            <h3 className='text-lg font-semibold'>{data.profile} (Intern)</h3>
                                                            <p>{data.internshipOrganization}</p>
                                                            <p>{data.internshipStartYear} - {data.internshipEndYear}</p>
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
                                <div className='pb-4'>
                                    {projectData.map(
                                        (data, index) => (
                                            <div className='mb-1' key={index}>
                                                <p className='text-sm font-semibold'>{data.title}</p>
                                                <p className='text-sm'>{data.description}</p>
                                                <a className='text-sm' href={data.link}>{data.link}</a>
                                            </div>
                                        )
                                    )}
                                </div>
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

import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print'

function Template() {

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
        <div className='flex flex-col items-center py-10 gap-4 bg-white'>
            <div className="w-1/2">
                <div className='w-full' id='pdf' ref={contentRef}>
                    <div className='py-10 bg-gray-200'>
                        <h1 className='text-4xl text-center font-semibold'> {personalData.firstName} {personalData.lastName} </h1>
                    </div>

                    <div className='flex gap-4 py-4 px-10'>
                        <div className='w-2/5'>
                            <div className='pb-4 pt-3 space-y-0.5'>
                                <p className='text-sm'>{personalData.phoneNo}</p>
                                <a className='text-sm block' target='_blank' href={personalData.emailId}>{personalData.emailId}</a>
                                <a className='text-sm block' target='_blank' href={personalData.linkedIn}>{personalData.linkedIn}</a>
                                <a className='text-sm' target='_blank' href={personalData.gitHub}>{personalData.gitHub}</a>
                                <p className='text-sm'>{personalData.address}</p>
                            </div>

                            <div className='pb-4'>
                                <h2 className='text-lg font-medium'>EDUCATION</h2>
                                {educationalData.map(
                                    (data, index) => (
                                        <div className='mb-1' key={index}>
                                            <p className='text-sm font-semibold'>{data.college}</p>
                                            <p className='text-sm'>{data.course}</p>
                                            <p className='text-sm'>{data.qualificationStartYear} - {data.qualificationEndYear}</p>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className='pb-4'>
                                <h2 className='text-lg font-medium'>SKILLS</h2>
                                <ul>
                                    {Object.values(personalData.skills).map(
                                        (skill, index) => (
                                            <li className='text-sm' key={index}> {skill} </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className='pb-4'>
                                <h2 className='text-lg font-medium'>LANGUAGE</h2>
                                <ul>
                                    {Object.values(personalData.language).map(
                                        (lang) => (
                                            <li className='text-sm' key={lang}> {lang} </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className='w-3/5'>
                            <div className='pb-4'>
                                <h2 className='text-lg font-medium'>Professional Summary</h2>
                                <p className='text-sm'>{personalData.summary}</p>
                            </div>

                            {projectData.some(data => data.title || data.description || data.link) && (
                                <div className='pb-4'>
                                    <h2 className='text-lg font-medium'>PROJECTS</h2>
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

                            <div className='pb-4'>
                                <h2 className='text-lg font-medium'>WORK EXPERIENCE</h2>
                                {jobData.some(data => data.jobOrganization) || internshipData.some(data => data.internshipOrganization) ? (
                                    <div>
                                        {jobData.some(data => data.jobOrganization) && (
                                            <div>
                                                {jobData.map(
                                                    (data, index) => (
                                                        <div className='mb-1' key={index}>
                                                            <p className='text-sm'>{data.designation}</p>
                                                            <p className='text-sm font-semibold'>{data.jobOrganization}</p>
                                                            <p className='text-sm'>{data.jobStartYear} - {data.jobEndYear}</p>
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
                                                            <p className='text-sm'>{data.profile} (Intern)</p>
                                                            <p className='text-sm font-semibold'>{data.internshipOrganization}</p>
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
                                <h2 className='text-lg font-medium'>HOBBIES</h2>
                                {personalData.hobbies.map((hobby) => (
                                    <p key={hobby}>{hobby}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className='py-2 px-4 shadow rounded-lg bg-gray-200' onClick={handlePrint}>Download as PDF</button>
        </div>
    )
}

export default Template
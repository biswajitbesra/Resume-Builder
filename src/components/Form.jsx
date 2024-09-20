import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus, faL } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addInternshipData, addJobData, addPersonalData, addEducationalData, addProjectData } from '../slice/Slice'
import { useNavigate } from 'react-router-dom'
import language from '../customAPI/langAPI'
import skills from '../customAPI/skillsAPI'

export default function Form() {
    const [formData, setFormData] = useState({
        personalData: {
            firstName: '',
            lastName: '',
            phoneNo: '',
            emailId: '',
            gitHub: '',
            linkedIn: '',
            address: '',
            language: [],
            skills: [],
            summary: '',
            hobbies: []
        },

        educationalData: {
            college: '',
            course: '',
            qualificationStartYear: '',
            qualificationEndYear: '',
        },

        projectData: {
            title: '',
            link: '',
            description: '',
        },

        jobData: {
            jobOrganization: '',
            designation: '',
            jobWorkFromHome: false,
            jobStartYear: '',
            jobEndYear: '',
            jobCurrentlyWorking: false,
        },

        internshipData: {
            internshipOrganization: '',
            profile: '',
            internshipWorkFromHome: false,
            internshipStartYear: '',
            internshipEndYear: '',
            internCurrentlyWorking: false,
        }
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const compId = useSelector( state => state.selectedCompId)
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addPersonalData(formData.personalData))
        dispatch(addEducationalData(formData.educationalData))
        dispatch(addProjectData(formData.projectData))
        dispatch(addJobData(formData.jobData))
        dispatch(addInternshipData(formData.internshipData))

        navigate(`/template/${compId}`)
    }
    const handleLanguage = (e) => {
        const lang = e.target.value
        if (lang !== 'select') {
            setFormData(() => ({ ...formData, personalData: { ...formData.personalData, language: [...formData.personalData.language, lang] } }))
        }
    }
    const handleSkills = (e) => {
        const skill = e.target.value
        if (skill !== 'select') {
            setFormData(() => ({ ...formData, personalData: { ...formData.personalData, skills: [...formData.personalData.skills, skill] } }))
        }
    }
    const addHandler = (e) => {
        e.preventDefault()
        if (formData.educationalData !== " ") {
            dispatch(addEducationalData(formData.educationalData))
        }
        setFormData({
            ...formData, educationalData: {
                college: '',
                course: '',
                qualificationStartYear: '',
                qualificationEndYear: ''
            }
        })
        alert("Data have been successfully saved")
    }
    const addJobHandler = (e) => {
        e.preventDefault()
        if (formData.jobData !== " ") {
            dispatch(addJobData(formData.jobData))
        }
        setFormData({
            ...formData, jobData: {
                jobOrganization: '',
                designation: '',
                jobLocation: '',
                jobWorkFromHome: false,
                jobStartYear: '',
                jobEndYear: '',
                jobCurrentlyWorking: false,
            }
        })
        alert("Data have been successfully saved")
    }
    const addProjectHandler = (e) => {
        e.preventDefault()
        if (formData.projectData !== " ") {
            dispatch(addProjectData(formData.projectData))
        }
        setFormData({
            ...formData, projectData: {
                title: '',
                link: '',
                description: '',
            }
        })
        alert("Data have been successfully saved")
    }

    const [showJobContent, setShowJobContent] = useState(false)
    const showJob = () => {
        setShowJobContent(true)
    }
    const [showInternContent, setShowInternContent] = useState(false)
    const showIntern = () => {
        setShowInternContent(true)
    }
    const [showProjectContent, setShowProjectContent] = useState(false)
    const showProject = () => {
        setShowProjectContent(true)
    }
    const [showHobbiesContent, setShowHobbiesContent] = useState(false)
    const [hobby, setHobby] = useState("")
    const showHobbies = () => {
        setShowHobbiesContent(true)
    }


    return (
        <form className='flex flex-col items-center p-4 w-full'>
            <h2 className='font-bold text-3xl py-6'>Personal Details</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id='firstName'
                            className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                            value={formData.personalData.firstName}
                            onChange={(e) => setFormData({
                                ...formData, personalData: { ...formData.personalData, firstName: e.target.value }
                            })}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id='lastName'
                            className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                            value={formData.personalData.lastName}
                            onChange={(e) => setFormData({
                                ...formData, personalData: { ...formData.personalData, lastName: e.target.value }
                            })}
                            required
                        />
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id='phone'
                            className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                            value={formData.personalData.phoneNo}
                            onChange={(e) => setFormData({
                                ...formData, personalData: { ...formData.personalData, phoneNo: e.target.value }
                            })}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                            value={formData.personalData.emailId}
                            onChange={(e) => setFormData({
                                ...formData, personalData: { ...formData.personalData, emailId: e.target.value }
                            })}
                            required
                        />
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="dob">GitHub</label>
                        <input
                            type="text"
                            id="dob"
                            className='bg-gray-200  w-96 py-2 px-2.5 rounded-lg outline-none'
                            value={formData.personalData.gitHub}
                            onChange={(e) => setFormData({
                                ...formData, personalData: { ...formData.personalData, gitHub: e.target.value }
                            })}
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input type="text"
                            id='linkedIn'
                            className='bg-gray-200  w-96 py-2 px-2.5 rounded-lg outline-none'
                            value={formData.personalData.linkedIn}
                            onChange={
                                (e) => setFormData({ ...formData, personalData: { ...formData.personalData, linkedIn: e.target.value } })
                            }
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="address">Address</label>
                    <textarea
                        id='address'
                        className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none'
                        rows="3"
                        value={formData.personalData.address}
                        onChange={(e) => setFormData({
                            ...formData, personalData: { ...formData.personalData, address: e.target.value }
                        })}
                        required
                    />
                </div>

                <div className='flex gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label className='mb-1' htmlFor='language'>Languages You know</label>
                        <select id='language' className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none' onChange={handleLanguage}>
                            <option value="select">Select Language</option>
                            {language.map((lang) => (
                                <option key={lang} > {lang} </option>
                            ))}
                        </select>
                        <div className='flex flex-wrap gap-1 w-96'>
                            {formData.personalData.language.map(
                                (selectedLang, index) => (
                                    <span className='text-black text-sm border rounded-3xl ps-3 pe-1.5 py-1 bg-gray-200 flex items-center hover:cursor-default' key={index}>{selectedLang}
                                        <FontAwesomeIcon className='ms-1.5 p-1 rounded-full h-2.5 w-2.5 hover:bg-white' icon={faXmark}
                                            onClick={
                                                (e) => setFormData(() => ({ ...formData, personalData: { ...formData.personalData, language: formData.personalData.language.filter(lang => lang !== selectedLang) } }))
                                            }
                                        />
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='mb-1' htmlFor='skills'>Skills</label>
                        <select id="skills" className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none' onChange={handleSkills}>
                            <option value="select">Select Skill</option>
                            {skills.map(
                                (skill) => (
                                    <option key={skill}>{skill}</option>
                                )
                            )}
                        </select>
                        <div className='flex flex-wrap gap-1 w-96'>
                            {formData.personalData.skills.map(
                                (selectedSkill) => (
                                    <span className='text-black text-sm border rounded-3xl ps-3 pe-1.5 py-1 bg-gray-200 flex items-center hover:cursor-default' key={selectedSkill}>{selectedSkill}
                                        <FontAwesomeIcon className='ms-1.5 p-1 rounded-full h-2.5 w-2.5 hover:bg-white' icon={faXmark}
                                            onClick={
                                                (e) => setFormData(() => ({ ...formData, personalData: { ...formData.personalData, skills: formData.personalData.skills.filter(skill => skill !== selectedSkill) } }))
                                            }
                                        />
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor='summary'>Professional Summary</label>
                    <textarea
                        id='summary'
                        className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none w-cus-49'
                        rows="3"
                        value={formData.personalData.summary}
                        onChange={(e) => setFormData({ ...formData, personalData: { ...formData.personalData, summary: e.target.value } })}
                    />
                </div>

                {!showHobbiesContent && (
                    <div className="flex justify-between w-cus-49 border rounded-lg p-7">
                        <h2 className="text-2xl">Hobbies</h2>
                        <button
                            className="py-0.5 px-4 hover:bg-gray-200 hover:rounded-lg hover:shadow"
                            onClick={showHobbies}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                )}
                {showHobbiesContent && (
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="hobbies">Hobbies</label>
                        <div className='flex gap-4'>

                        <input
                            type="text"
                            id="hobbies"
                            className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none w-cus-44'
                            value={hobby}
                            onChange={(e) => setHobby(e.target.value)}
                        />
                        <button
                            className='w-16 bg-gray-200 rounded-lg'
                        onClick={(e) => {
                            e.preventDefault();
                            setFormData({ ...formData, personalData: { ...formData.personalData, hobbies: [...formData.personalData.hobbies, hobby] } });
                            setHobby("") }}
                        >Save</button>
                        </div>

                        <div className='flex flex-wrap gap-1 w-cus-49'>
                            {formData.personalData.hobbies.map(
                                (data, index) => (
                                    <span className='text-black text-sm border rounded-3xl ps-3 pe-1.5 py-1 bg-gray-200 flex items-center hover:cursor-default' key={index}>{data}
                                        <FontAwesomeIcon className='ms-1.5 p-1 rounded-full h-2.5 w-2.5 hover:bg-white' icon={faXmark}
                                            onClick={
                                                (e) => setFormData(() => ({ ...formData, personalData: { ...formData.personalData, hobbies: formData.personalData.hobbies.filter(hobby => hobby !== data) } }))
                                            }
                                        />
                                    </span>

                                )
                            )}
                        </div>
                    </div>
                )}
            </div>


            <h2 className='font-bold text-3xl pb-6 pt-8'>Qualification</h2>
            <div className='flex flex-col gap-4'>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="colUni">College/University Name</label>
                    <input
                        type="text"
                        id='colUni'
                        className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none'
                        value={formData.educationalData.college}
                        onChange={(e) => setFormData({
                            ...formData, educationalData: { ...formData.educationalData, college: e.target.value }
                        })}
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="course">Course</label>
                    <input
                        type="text"
                        id='course'
                        className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none'
                        value={formData.educationalData.course}
                        onChange={(e) => setFormData({
                            ...formData, educationalData: { ...formData.educationalData, course: e.target.value }
                        })}
                    />
                </div>

                <div className='flex gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="qualificationStartYear">Start Year</label>
                        <input
                            type="month"
                            id='qualificationStartYear'
                            className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                            value={formData.educationalData.qualificationStartYear}
                            onChange={(e) => setFormData({
                                ...formData, educationalData: { ...formData.educationalData, qualificationStartYear: e.target.value }
                            })}
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="qualificationEndYear">End Year</label>
                        <input
                            type="month"
                            id='qualificationEndYear'
                            className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                            value={formData.educationalData.qualificationEndYear}
                            onChange={(e) => setFormData({
                                ...formData, educationalData: { ...formData.educationalData, qualificationEndYear: e.target.value }
                            })}
                        />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button
                        className='py-2 px-4 shadow rounded-lg bg-gray-200'
                        onClick={addHandler}
                    >
                        Add More
                    </button>
                </div>
            </div>

            {!showProjectContent && (
                <div className='flex justify-between p-7 mt-4 w-cus-49 border rounded-lg'>
                    <h2 className='text-2xl'>Project Details</h2>
                    <button
                        className="py-0.5 px-4 hover:bg-gray-200 hover:rounded-lg hover:shadow"
                        onClick={showProject}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            )}
            {showProjectContent && (
                <>
                    <h2 className='font-bold text-3xl pb-6 pt-8'>Project Details</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3'>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id='title'
                                    className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none w-96'
                                    value={formData.projectData.title}
                                    onChange={(e) => setFormData({
                                        ...formData, projectData: { ...formData.projectData, title: e.target.value }
                                    })}
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="link">Project Link</label>
                                <input
                                    type="text"
                                    id='link'
                                    className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none w-96'
                                    value={formData.projectData.link}
                                    onChange={(e) => setFormData({
                                        ...formData, projectData: { ...formData.projectData, link: e.target.value }
                                    })}
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="description">Description</label>
                            <textarea
                                name=""
                                id="description"
                                rows="4"
                                className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none'
                                value={formData.projectData.description}
                                onChange={(e) => setFormData({
                                    ...formData, projectData: { ...formData.projectData, description: e.target.value }
                                })}
                            ></textarea>
                        </div>

                        <div className='flex justify-center'>
                            <button className='py-2 px-4 shadow rounded-lg bg-gray-200' onClick={addProjectHandler}>Add More</button>
                        </div>
                    </div>
                </>
            )}

            {!showJobContent && (
                <div className="flex justify-between w-cus-49 mt-4 border rounded-lg p-7">
                    <h2 className="text-2xl">Job Details</h2>
                    <button
                        className="py-0.5 px-4 hover:bg-gray-200 hover:rounded-lg hover:shadow"
                        onClick={showJob}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            )}
            {showJobContent && (
                <>
                    <h2 className='font-bold text-3xl pb-6 pt-8'>Job Details</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="organization">Organization</label>
                            <input
                                type="text"
                                id='organization'
                                className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none'
                                value={formData.jobData.jobOrganization}
                                onChange={(e) => setFormData({
                                    ...formData, jobData: { ...formData.jobData, jobOrganization: e.target.value }
                                })}
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="designation">Designation</label>
                            <input
                                type="text"
                                id='designation'
                                className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none'
                                value={formData.jobData.designation}
                                onChange={(e) => setFormData({
                                    ...formData, jobData: { ...formData.jobData, designation: e.target.value }
                                })}
                                required
                            />
                        </div>

                        <div className='flex gap-1'>
                            <input
                                type="checkbox"
                                id='jobWfh'
                                onChange={(e) => setFormData({
                                    ...formData, jobData: { ...formData.jobData, jobWorkFromHome: e.target.checked ? true : false }
                                })}
                            />
                            <label htmlFor="jobWfh" className='text-sm'>Is work from home</label>
                        </div>

                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="jobStartYear">Start Year</label>
                                <input
                                    type="month"
                                    id='jobStartYear'
                                    className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                                    value={formData.jobData.jobStartYear}
                                    onChange={(e) => setFormData({
                                        ...formData, jobData: { ...formData.jobData, jobStartYear: e.target.value }
                                    })}
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="jobEndYear">End jobDataYear</label>
                                <input
                                    type="month"
                                    id='jobEndYear'
                                    className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                                    value={formData.jobData.jobEndYear}
                                    onChange={(e) => setFormData({
                                        ...formData, jobData: { ...formData.jobData, jobEndYear: e.target.value }
                                    })}
                                    required
                                />
                                <div className='flex gap-1'>
                                    <input
                                        type="checkbox"
                                        id='currentJob'
                                        onChange={(e) => setFormData({
                                            ...formData, jobData: { ...formData.jobData, jobCurrentlyWorking: e.target.checked ? true : false }
                                        })}
                                    />
                                    <label htmlFor="currentJob" className='text-sm'>Currently working here</label>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button className='py-2 px-4 shadow rounded-lg bg-gray-200' onClick={addJobHandler}>Add More</button>
                        </div>
                    </div>
                </>
            )
            }

            {!showInternContent && (
                <div className="flex justify-between w-cus-49 mt-4 border rounded-lg p-7">
                    <h2 className="text-2xl">Internship Details</h2>
                    <button
                        className="py-0.5 px-4 hover:bg-gray-200 hover:rounded-lg hover:shadow"
                        onClick={showIntern}
                    >
                        <FontAwesomeIcon icon={faPlus} />

                    </button>
                </div>
            )}
            {showInternContent && (
                <>
                    <h2 className='font-bold text-3xl pb-6 pt-8'>Internship details</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="internshipOrganization">Organization</label>
                            <input
                                type="text"
                                id='internshipOrganization'
                                className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none'
                                value={formData.internshipData.internshipOrganization}
                                onChange={(e) => setFormData({
                                    ...formData, internshipData: { ...formData.internshipData, internshipOrganization: e.target.value }
                                })}
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="profile">Profile</label>
                            <input
                                type="text"
                                id='profile'
                                className='bg-gray-200 py-2 px-2.5 rounded-lg outline-none'
                                value={formData.internshipData.profile}
                                onChange={(e) => setFormData({
                                    ...formData, internshipData: { ...formData.internshipData, profile: e.target.value }
                                })}
                                required
                            />
                        </div>

                        <div className='flex gap-1'>
                            <input
                                type="checkbox"
                                id='internWfh'
                                onChange={(e) => setFormData({
                                    ...formData, internshipData: { ...formData.internshipData, internshipWorkFromHome: e.target.checked ? true : false }
                                })}
                            />
                            <label htmlFor="internWfh" className='text-sm'>Is work from home</label>
                        </div>

                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="internshipStartYear">Start Year</label>
                                <input
                                    type="month"
                                    id='internshipStartYear'
                                    className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                                    value={formData.internshipData.internshipStartYear}
                                    onChange={(e) => setFormData({
                                        ...formData, internshipData: { ...formData.internshipData, internshipStartYear: e.target.value }
                                    })}
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="internshipEndYear">End Year</label>
                                <input
                                    type="month"
                                    id='internshipEndYear'
                                    className='bg-gray-200 w-96 py-2 px-2.5 rounded-lg outline-none'
                                    value={formData.internshipData.internshipEndYear}
                                    onChange={(e) => setFormData({
                                        ...formData, internshipData: { ...formData.internshipData, internshipEndYear: e.target.value }
                                    })}
                                    required
                                />
                                <div className='flex gap-1'>
                                    <input
                                        type="checkbox"
                                        id='currentIntern'
                                        onChange={(e) => setFormData({
                                            ...formData, internshipData: { ...formData.internshipData, internCurrentlyWorking: e.target.checked ? true : false }
                                        })}
                                    />
                                    <label htmlFor="currentIntern" className='text-sm'>Currently working here</label>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button className='py-2 px-4 shadow rounded-lg bg-gray-200'>Add More</button>
                        </div>
                    </div>
                </>
            )}

            <button type="submit" className='py-2 px-16 shadow rounded-lg bg-black text-white mt-10' onClick={submitHandler}>Generate</button>
        </form>
    )
}

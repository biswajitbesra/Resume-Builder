import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    personalData: {},
    educationalData: [],
    projectData: [],
    jobData: [],
    internshipData: [],
    selectedCompId: null
}


export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addPersonalData: (state, action) => {
            state.personalData = action.payload
        },
        addEducationalData: (state, action) => {
            state.educationalData.push(action.payload)
        },
        addProjectData: (state, action) => {
            state.projectData.push(action.payload)
        },
        addJobData: (state, action) => {
            state.jobData.push(action.payload)
        },
        addInternshipData: (state, action) => {
            state.internshipData.push(action.payload)
        },
        addSelectedCompId: (state, action) => {
            state.selectedCompId = action.payload
        }
    }
})

export const { addPersonalData, addEducationalData, addProjectData, addJobData, addInternshipData, addSelectedCompId } = slice.actions
export default slice.reducer;
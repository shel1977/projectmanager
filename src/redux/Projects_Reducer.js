const SHOW_PROJECTS = 'SHOW_PROJECTS';
const SHOW_ALL_TASKS = 'SHOW_ALL_TASKS';
const SHOW_PROJECT_TASKS = 'SHOW_PROJECT_TASKS'
const OPEN_POPUP_PROJECT = 'OPEN_POPUP_PROJECT'
const OPEN_POPUP_TASK = 'OPEN_POPUP_TASK'
const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT'
const ADD_NEW_TASK = 'ADD_NEW_TASK'
const EDIT_TASK = 'EDIT_TASK'
const SAVE_EDIT_TASK = 'SAVE_EDIT_TASK'

const initialState = {
    projects: [],
    tasks: [],
    currentProject: [],
    currentTask: [],
    openPopUpProject: false,
    openPopUpTask: false,
    showProjects: true,
    showAllTasks: false,
    showProjectTasks: false,
    editTask: false

};
const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROJECTS: {
            return {
                ...state,
                openPopUpProject: false,
                openPopUpTask: false,
                showProjects: true,
                showAllTasks: false,
                showProjectTasks: false
            }
        }
        case SHOW_ALL_TASKS: {
            return {
                ...state,
                openPopUpProject: false,
                openPopUpTask: false,
                showProjects: false,
                showAllTasks: true,
                showProjectTasks: false
            }
        }
        case SHOW_PROJECT_TASKS: {
            return {
                ...state,
                currentProject: action.currentProject,
                openPopUpProject: false,
                openPopUpTask: false,
                showProjects: false,
                showAllTasks: false,
                showProjectTasks: true
            }
        }
        case OPEN_POPUP_PROJECT: {
            return {
                ...state,
                openPopUpProject: true
            }
        }
        case OPEN_POPUP_TASK: {
            return {
                ...state,
                openPopUpTask: true
            }
        }
        case ADD_NEW_PROJECT: {
            return {
                ...state,
                projects: [...state.projects, action.addProject],
                openPopUpProject: false
            };
        }
        case ADD_NEW_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.newTask],
                openPopUpTask: false,
                editTask: false,
                currentTask: []
            }
        }
        case EDIT_TASK: {
            return {
                ...state,
                currentTask: action.editableTask,
                openPopUpTask: true,
                editTask: true
            }
        }
        case SAVE_EDIT_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(tsk => {
                    if (tsk.taskId === action.editedTask.taskId) {
                        return {
                            ...tsk, ...action.editedTask
                        }
                    } else {
                        return tsk
                    }

                }),
                openPopUpTask: false,
                editTask: false
            }
        }
        default:
            return state
    }
}

export const showProjectsAC = () => ({type: SHOW_PROJECTS});
export const showAllTasksAC = () => ({type: SHOW_ALL_TASKS});
export const showProjectTasksAC = (currentProject) => ({type: SHOW_PROJECT_TASKS, currentProject});
export const openPopUpProjectAC = () => ({type: OPEN_POPUP_PROJECT});
export const openPopUpTaskAC = () => ({type: OPEN_POPUP_TASK});
export const addNewProjectAC = (addProject) => ({type: ADD_NEW_PROJECT, addProject});
export const addNewTaskAC = (newTask) => ({type: ADD_NEW_TASK, newTask});
export const editTaskAC = (editableTask) => ({type: EDIT_TASK, editableTask});
export const saveEditedTaskAC = (editedTask) => ({type: SAVE_EDIT_TASK, editedTask});
export default projectsReducer;
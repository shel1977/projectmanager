import React from 'react';
import style from './AddTaskPopUp.module.css'
import {NavLink} from "react-router-dom";
import iconPlus from "../../image/plus_icon-icons.com_61187.svg";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {addNewTaskAC, saveEditedTaskAC} from "../../redux/Projects_Reducer";

let TaskForm = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit} className={style.popUpWindow}>
            <div className={style.inputArea}>
                <Field
                    name='name'
                    component='input'
                    type="text"
                    placeholder={'name'}
                />
            </div>
            <div className={style.inputArea}
            >
                <Field name='status' component='select'>
                    <option value="new">New</option>
                    <option value="process">Process</option>
                    <option value="complete">Complete</option>
                </Field>
            </div>
            <div className={style.inputArea}>
                <Field
                    name='type'
                    component='input'
                    type="text"
                    placeholder={'type'}
                />
            </div>
            <div className={style.inputArea}>
                <Field
                    name='description'
                    component='textarea'
                    placeholder={props.editTask ? props.currentTask.description : 'description'}
                    type="text"
                />
            </div>
            <NavLink
                to='#'
                className={style.add_button}
                onClick={handleSubmit}>

                <img src={iconPlus}/>

            </NavLink>
        </form>
    )
}
const TaskReduxForm = reduxForm({form: 'taskForm'})(TaskForm)

function NewTaskWindow(props) {
    let saveNewTask = (onSubmit) => {
        let numberTask
        let howManyTasks = props.state.tasks.filter(e => e.keyTask === props.state.currentProject.keyProject)
        if (!howManyTasks.length) {
            numberTask = 1
        } else {
            numberTask = 1 + howManyTasks.length
        }

        onSubmit['keyTask'] = props.state.currentProject.keyProject
        onSubmit['taskId'] = `${numberTask}-${props.state.currentProject.keyProject}`
        props.addNewTask(onSubmit)
    }

    let saveEditTask = (onSubmit) => {
        onSubmit['taskId'] = props.state.currentTask.taskId
        props.saveEditedTask(onSubmit)
    }
    return (
        <div className={style.popUpWindowWrapper}>
            <div className={style.popUpWindow}>
                <div className={style.popUpWindowHeader}>
                    <div>Task</div>
                    <img src={iconPlus}/>
                </div>
                <TaskReduxForm
                    onSubmit={props.state.editTask ? saveEditTask : saveNewTask}
                    currentTask={props.state.currentTask}
                    editTask={props.state.editTask}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state: state.projectsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask: (addTask) => {
            dispatch(addNewTaskAC(addTask))
        },
        saveEditedTask: (editedTask) => {
            dispatch(saveEditedTaskAC(editedTask))
        }
    }
}

const connectedAddTaskPopUp = connect(mapStateToProps, mapDispatchToProps)(NewTaskWindow)
export default connectedAddTaskPopUp;



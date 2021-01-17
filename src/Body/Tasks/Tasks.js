import React from 'react';
import style from './Tasks.module.css'
import Task from "./Task";
import {NavLink} from "react-router-dom";
import iconPlus from "../../image/plus_icon-icons.com_61187.svg";
import NewTaskWindow from "./AddTasksPopUp";
import {connect} from "react-redux";
import {openPopUpTaskAC} from "../../redux/Projects_Reducer";

function Tasks(props) {
    let allTasks = props.state.tasks.map(e => (<Task name={e.name}
                                                     status={e.status}
                                                     description={e.description}
                                                     taskId={e.taskId}
                                                     keyTask={e.keyTask}/>
    ))

    let sortedTasks = props.state.tasks
        .filter(e => e.keyTask === props.state.currentProject.keyProject)
        .map(e => (<Task name={e.name}
                         status={e.status}
                         description={e.description}
                         taskId={e.taskId}
                         keyTask={e.keyTask}
            />
        ))

    let headText = !props.state.showAllTasks ?
        `Project: ${props.state.currentProject.name}`
        : 'all tasks'


    return (
        <div className={style.tasks}>
            <div className={style.head_text}>
                <h2>{headText}</h2>
            </div>
            <div>
                {props.state.showAllTasks ? allTasks : sortedTasks}
            </div>
            {props.state.showProjectTasks ?
                <NavLink to='#'
                         className={style.add_button}
                         onClick={props.addTask}>
                    <img src={iconPlus}/>
                </NavLink> : null}

            {props.state.openPopUpTask ? <NewTaskWindow/> : null}
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
        addTask: () => {
            dispatch(openPopUpTaskAC())
        }
    }
}

const connectedTasks = connect(mapStateToProps, mapDispatchToProps)(Tasks)
export default connectedTasks;

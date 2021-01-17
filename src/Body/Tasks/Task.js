import React from 'react';
import style from './Task.module.css'
import burgerPict from '../../image/menu_burger_icon_177188.svg';
import {NavLink} from "react-router-dom";
import arrow_right from "../../image/right_icon-icons.com_61212.svg";
import {connect} from "react-redux";
import {editTaskAC} from "../../redux/Projects_Reducer";

function Task(props) {
    let editCurrentTask = () => {
        let currentTask = {name: props.name,
            status: props.status,
            description: props.description,
            taskId: props.taskId,
            keyTask: props.keyTask}
        props.editedTask(currentTask)
    }


    return (
        <div className={style.task}>
            <img src={burgerPict} alt=""/>
            <div>{props.taskId}</div>
            <div className={style.name_task}>{props.name}</div>
            <div>{props.status}</div>
            <span>{props.description}</span>
            <NavLink to='#'
                     className={style.edit_task}
                     onClick={editCurrentTask}>
                <span className={style.edit_task_text}>edit</span>
                <img src={arrow_right} alt="" className={style.arrow}/>
            </NavLink>        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state: state.projectsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editedTask: (currentTask) => {
            dispatch(editTaskAC(currentTask))
        }
    }
}


const connectedTask = connect(mapStateToProps, mapDispatchToProps)(Task)
export default connectedTask;

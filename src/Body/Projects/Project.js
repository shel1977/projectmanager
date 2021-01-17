import React from 'react';
import style from './Project.module.css'
import {NavLink} from "react-router-dom";
import arrow_right from '../../image/right_icon-icons.com_61212.svg'
import {connect} from "react-redux";
import {showProjectTasksAC} from "../../redux/Projects_Reducer";

function Project(props) {
let keyProject = () => {
    let currentProject = {name: props.name, keyProject: props.keyProject}
    props.showProjectTasks(currentProject)
}
    return (
        <div className={style.project}>
            <NavLink to="#" className={style.name_project}>{props.name}</NavLink>
            <span>{props.keyProject}</span>
            <button
                onClick={keyProject}
                className={style.goto_tasks}>
                <span className={style.goto_tasks_text}>tasks</span>
                <img src={arrow_right} alt="" className={style.arrow}/>
            </button>
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
        showProjectTasks: (currentProject) => {
            dispatch(showProjectTasksAC(currentProject))
        }
    }
}

const connectedProject = connect(mapStateToProps, mapDispatchToProps)(Project)
export default connectedProject;

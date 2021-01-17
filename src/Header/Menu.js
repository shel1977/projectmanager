import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";
import style from './Menu.module.css'
import {showAllTasksAC, showProjectsAC} from "../redux/Projects_Reducer";
import {connect} from "react-redux";

function Menu(props) {
    let showLink = !props.state.tasks.length ? null : <NavLink to='#'
                                                           onClick={props.showAllTasks}
                                                           className={style.menu_items}
    >Tasks
    </NavLink>;

    return (
        <div>
            <NavLink to='#'
                     onClick={props.showProjects}
                     className={style.menu_items}
            >Projects
            </NavLink>
            {showLink}
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
        showProjects: () => {
            dispatch(showProjectsAC())
        },
        showAllTasks: () => {
            dispatch(showAllTasksAC())
        }
    }
}

const connectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default connectedMenu;


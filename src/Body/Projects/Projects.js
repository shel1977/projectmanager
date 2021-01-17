import React from 'react';
import iconPlus from '../../image/plus_icon-icons.com_61187.svg'
import style from './Projects.module.css';
import Project from "./Project";
import NewProjectWindow from "../Projects/AddProjectsPopUp";
import {connect} from "react-redux";
import {openPopUpProjectAC} from "../../redux/Projects_Reducer";
import {NavLink} from "react-router-dom";

function Projects(props) {
    let element = props.state.projects.map(project =>
        <Project name={project.name}
                 keyProject={project.keyProject}
        />)

    return (
        <div className={style.projects}>
            <div>
                {element}
            </div>
            <NavLink to='#'
                     className={style.add_button}
                     onClick={props.popUpProject}>
                <img src={iconPlus}/>
            </NavLink>
            {props.state.openPopUpProject ? <NewProjectWindow /> : null}

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
        popUpProject: () => {
            dispatch(openPopUpProjectAC())
        }
    }
}

const connectedProjects = connect(mapStateToProps, mapDispatchToProps)(Projects)
export default connectedProjects;

import React from 'react';
import style from './Projects.module.css';
import {connect} from "react-redux";
import Tasks from "../Tasks/Tasks";
import Projects from "./Projects";

function Main(props) {
    return (
        <div className={style.projects}>
            {props.state.showProjects ? <Projects/> : <Tasks/>}
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        state: state.projectsReducer
    }
}

const connectedMain = connect(mapStateToProps)(Main)
export default connectedMain;

import React from 'react';
import style from './AddProjectPopUp.module.css'
import {NavLink} from "react-router-dom";
import iconPlus from "../../image/plus_icon-icons.com_61187.svg";
import {connect} from "react-redux";
import {Field, reduxForm, submit} from "redux-form";
import {addNewProjectAC} from "../../redux/Projects_Reducer";
import {required, keyProjectValidate} from '../../utils/validators'

let ProjectForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={style.popUpWindow}>
            <div className={style.inputArea}>
                <Field
                    name='name'
                    component='input'
                    type="text"
                    placeholder="Name"
                    validate={required}
                />
            </div>
            <div className={style.inputArea}>
                <Field
                    name='keyProject'
                    component='input'
                    type="text"
                    placeholder="Key"
                    validate={keyProjectValidate}
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
const ProjectReduxForm = reduxForm({
    form: 'projectForm'
})(ProjectForm)


function NewProjectWindow(props) {
    let addProject = (onSubmit) => {
        props.addNewProject(onSubmit)
    }
    return (
        <div className={style.popUpWindowWrapper}>
            <div className={style.popUpWindow}>
                <div className={style.popUpWindowHeader}>
                    <div>New project</div>
                    <img src={iconPlus}/>
                </div>
                <ProjectReduxForm
                    className={style.popUpWindowContent}
                    onSubmit={addProject}
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
        addNewProject: (addProject) => {
            dispatch(addNewProjectAC(addProject))
        }
    }
}

const connectedAddProjectPopUp = connect(mapStateToProps, mapDispatchToProps)(NewProjectWindow)
export default connectedAddProjectPopUp;



// TODO: для redux form немного не удобная рализация
export default values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }
    if (!values.type) {
        errors.type = 'Required'
    } else if (values.type.length > 15) {
        errors.type = 'Must be 15 characters or less'
    }
    if (!values.description) {
        errors.description = 'Required'
    } else if (values.type.length < 3) {
        errors.description = 'Must be 3 characters or more'
    }
    return errors
}
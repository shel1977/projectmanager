export const required = value => {
    if (value) return undefined;
    return 'required field'
};
export const keyProjectValidate = value => {
    return value && !/^[A-Z]{3}$/.test(value) ?
        'The key must be three uppercase characters' : undefined
};
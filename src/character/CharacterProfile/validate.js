import * as yup from 'yup';

export const schema = yup.object().shape({
    description: yup.string().required('Description is a required field'),
});

export default schema;
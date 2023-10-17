import * as Yup from "yup";

const validation=Yup.object().shape({
    text:Yup.string().required('burayı doldurmak zorunludur!')
})


export default validation;
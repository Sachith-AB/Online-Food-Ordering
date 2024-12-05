const emailRegex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const registerValidate = (formData) => {

    let errors = {
        name:'',
        email:'',
        password:'',
        cPassword:'',
        role:''
    };
    if(!formData.name){
        errors.name = '*Name is Required';
    } if(!formData.email){
        errors.email = '*Email is Required';
    } else if(!emailRegex.test(formData.email)){
        errors.email = '*Email is not valid';
    } if(!formData.password){
        errors.password = '*Password is Required';
    } else if(formData.password != formData.cPassword){
        errors.cPassword = '*Password must be same';
    } else if(!formData.cPassword){
        errors.cPassword = '*Confirm Password is Required';
    } if(!formData.role){
        errors.role = '*Role is Required';
    }
    return errors;
}

export const loginValidate = (formData) => {
    errors={
        email:'',
        password:''
    }
    if(!formData.email){
        errors.email = '*Email is required';
    }else if(!formData.password){

    }
}
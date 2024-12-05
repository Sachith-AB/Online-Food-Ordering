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
    }else if(!formData.email){
        errors.email = '*Email is Required';
    }else if(!formData.password){
        errors.password = '*Password is Required';
    }else if(formData.password != formData.cPassword){
        errors.cPassword = '*Password must be same';
    }else if(!formData.cPassword){
        errors.cPassword = '*Confirm Password is Required';
    }else if(!formData.role){
        errors.role = '*Role is Required';
    }
    return errors;
}
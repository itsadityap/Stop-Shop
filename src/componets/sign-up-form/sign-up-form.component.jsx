import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from "../form-inputs/form-input.component";
import "./signup-from.styles.scss"
import Button from "../button/button.component";
const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : '',
}


const SignUpForm = () => {

    const [ formFields , setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Password Do Not Match'); return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }

        catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user who is already signed up!!')
            }
            console.log(error.message);
        }
    };

    const handleChange = (event) => {
        const {name , value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className='sign-up-container'>
            <h2>Don't have an account? </h2>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' required type="text" onChange={handleChange} name='displayName' value={displayName}></FormInput>

                <FormInput label='Email' required type='email' onChange={handleChange} name='email' value={email}></FormInput>

                <FormInput label='Password' required type='password' onChange={handleChange} name='password' value={password}></FormInput>

                <FormInput label='Confirm Password' required type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword}></FormInput>

                <Button type="submit"> Submit </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
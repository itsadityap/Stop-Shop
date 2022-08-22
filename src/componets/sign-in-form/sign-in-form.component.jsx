import { useState } from "react";

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from "../form-inputs/form-input.component";
import "./sign-in-from.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
    email : '',
    password : '',
}

const SignInForm = () => {

    const [ formFields , setFormFields ] = useState(defaultFormFields);
    const { email, password, } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        }
        catch (error)
        {
            if(error)
            {
                alert("Wrong password or email not exists");
            }
        }
    };

    const handleChange = (event) => {
        const {name , value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return(
        <div className='sign-up-container'>
            <h2>Already have an account? </h2>
            <span>Sign In </span>
            <form onSubmit={handleSubmit}>
               <FormInput label='Email' required type='email' onChange={handleChange} name='email' value={email}></FormInput>
                <FormInput label='Password' required type='password' onChange={handleChange} name='password' value={password}></FormInput>

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button >
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}> Google Sign In </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
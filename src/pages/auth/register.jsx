import { useState } from "react";
import { Link } from "react-router-dom";


const initialState = {
    userName: '',
    email: '',
    password: ''
}

const AuthRegister = () => {
    const [formData, setFormData] = useState(initialState)
    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
                <p>Already have an account?
                    <Link className="font-medium ml-2 text-primary hover:underline" to={'/auth/login'}>login</Link>
                </p>
            </div>
           {/* here start */}
        </div>
    );
};

export default AuthRegister;
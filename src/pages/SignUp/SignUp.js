import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [signUpError, setSignUpError] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("User Created Sucessfully")
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center text-black '>
            <div className='w-96 p-10 border border-zinc-900 rounded-lg '>
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs text-black">
                        <label className="label"> <span className="label-text text-black">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is Required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs text-black">
                        <label className="label"> <span className="label-text text-black">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email is Required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text  text-black">Password</span></label>
                        <input type="password"
                            {...register('password', {
                                required: "Password is Required",
                                minLength: { value: 6, message: "password must be 6 char & long" },
                                pattern: { value: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9].)/, message: "Password Must Be Strong" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        <label className="label"> <span className="label-text  text-black">Forget Password?</span></label>

                    </div>
                    <input className='btn btn-neutral w-full' value="Sign Up" type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p className=' text-black'> <Link className=' text-blue-600' to="/login">Already Have an Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full  text-black'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );

};

export default SignUp;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';
import swal from 'sweetalert';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {createUser, logOut} = useContext(AuthContext);

    const [regiError, setRegiError] = useState('')


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name') 
        const photo = form.get('photo') 
        const email =  form.get('email');
        const password = form.get('password');
        const upperCaseRegx = /[A-Z]/;
        const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]/


        setRegiError('')

        if(password.length < 6) {
            setRegiError('Password should be 6 chartecters or longer.')
            return;
        } else if(!upperCaseRegx.test(password)){
            setRegiError('Please make sure to put at least one Upper Case Charecter in password')

            return
        }else if(!specialCharacterRegex.test(password)){
            setRegiError('Please make sure to put at least one Special Charecter in password')
            return;
        }

        createUser( email, password)
        .then( result => {
            console.log('ami achi' , result.user)
            swal("Congratulations!", "Please go to login page to log in!", "success")

            updateProfile(result.user, {
                displayName: name,
                photoURL: photo

            })
            .then(() => {
                logOut();
               
            })
            .catch(error => {
                setRegiError(error)
            })
        })
        
        .catch(error => {
            setRegiError(error.message)
        })

    } 

    return (
        <div >
        <h2 className="text-3xl my-7 text-center">Join Us!</h2>
        <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo Url</span>
                </label>
                <input type="text" required name="photo" placeholder="Photo Url" className="input input-bordered" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn text-white font-thin bg-[#3d657a] hover:bg-[#6096B4]">Register</button>
            </div>

            
        </form>



        <p className="text-center mt-4">Have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>

        {
            regiError && <p className='text-red-600 font-semibold text-center mt-4'>{regiError}</p>
        }
    </div>
    );
};

export default Register;
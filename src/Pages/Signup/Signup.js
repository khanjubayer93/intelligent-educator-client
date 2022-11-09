import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error.message))
    }
    return (
        <div className='flex justify-center my-20'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">SignUp to your account</h2>
                <p className="text-sm text-center text-gray-600">Do you have an account?
                    <Link to='/login' className="hover:underline text-sky-600">Login here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-sky-600">
                        <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faGoogle} />
                        <p>Login with Google</p>
                    </button>
                    <button aria-label="Login with GitHub" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-sky-600">
                        <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faGithub} />
                        <p>Login with GitHub</p>
                    </button>
                    <button aria-label="Login with Twitter" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-sky-600">
                        <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faTwitter} />
                        <p>Login with Twitter</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-600" />
                    <p className="px-3 text-gray-600">OR</p>
                    <hr className="w-full text-gray-600" />
                </div>
                <div action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <form onSubmit={handleCreateUser} className="space-y-4">

                        <div className="space-y-2">
                            <label className="text-sm">Name</label>
                            <input type="text" name="name" placeholder="your name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm">Email</label>
                            <input type="email" name="email" placeholder="your email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm">Password</label>
                            <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-sky-600 text-gray-50">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
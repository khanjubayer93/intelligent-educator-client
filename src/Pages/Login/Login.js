import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error.message))
    }

    return (
        <div className='flex justify-center my-20'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleLogIn} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm">Email</label>

                            </div>
                            <input type="email" name="email" placeholder="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-8 py-3 font-semibold rounded-md bg-sky-600 text-gray-50">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                            <Link to='/signup' rel="noopener noreferrer" href="#" className="hover:underline text-sky-600">Sign up</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
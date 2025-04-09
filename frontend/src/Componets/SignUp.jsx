import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignUp_action } from '../Redux/action';

const SignUp = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        username: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SignUp_action(state))
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e0eafc] to-[#cfdef3]">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-2xl rounded-xl px-10 py-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center">Create Account</h2>

                <div className="text-left">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="text-left">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full  bg-black hover:bg-blue-200 text-white hover:text-black font-semibold py-2 rounded-lg transition-all duration-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;

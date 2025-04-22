"use client"
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#111] px-4">
            <div className="max-w-md w-full p-8">
                <div className="flex flex-col items-center mb-6">
                    <Image className='mb-4' src="/logo.webp" width={30} height={30} alt='logo' />
                    <div className="text-4xl text-white mb-4 font-semibold">Welcome back</div>
                    <p className="text-gray-400 text-center">Let's continue your learning journey.</p>
                </div>

                <button className="w-full bg-[#1A1A1A] border border-gray-700 hover:border-white text-white py-2 rounded-lg flex items-center justify-center gap-2 mb-6">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
                    Continue with Google
                </button>

                <div className="flex items-center mb-6">
                    <div className="flex-grow h-px bg-gray-700"></div>
                    <span className="text-gray-500 mx-4 text-sm">or continue with</span>
                    <div className="flex-grow h-px bg-gray-700"></div>
                </div>

                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] text-white border border-gray-700 focus:outline-none focus:border-white"
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 pr-10 rounded-lg bg-[#1A1A1A] text-white border border-gray-700 focus:outline-none focus:border-white"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <div className="text-right text-sm">
                        <a href="#" className="text-gray-500 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-gray-300 text-black font-semibold rounded-lg hover:bg-white"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center text-sm text-gray-400 mt-6">
                    Don't have an account? <a href="#" className="text-white underline">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;

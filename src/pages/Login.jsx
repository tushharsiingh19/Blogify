import React from "react";
import { Login as LoginComponent } from "../components";

function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Welcome Back
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Sign in to continue reading, writing, and managing your
                        blog posts.
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                    <LoginComponent />
                </div>
            </div>
        </div>
    );
}

export default Login;
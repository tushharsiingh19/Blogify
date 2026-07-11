import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Create Your Account
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Join our community and start sharing your stories,
                        ideas, and experiences.
                    </p>
                </div>

                {/* Signup Card */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                    <SignupComponent />
                </div>
            </div>
        </div>
    );
}

export default Signup;
import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-800">
                            Create New Post
                        </h1>

                        <p className="mt-3 text-gray-500 text-lg">
                            Share your thoughts, ideas, and stories with the world.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
                        <PostForm />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AddPost;
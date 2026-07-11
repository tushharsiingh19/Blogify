import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-700">
                        Loading Post...
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Please wait while we fetch your article.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-800">
                            Edit Post
                        </h1>

                        <p className="mt-3 text-lg text-gray-500">
                            Update your article and publish the latest version.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
                        <PostForm post={post} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default EditPost;
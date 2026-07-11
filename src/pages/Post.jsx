import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor =
        post && userData ? post.userId === userData.$id : false;

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

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

                    <p className="mt-5 text-lg text-gray-600">
                        Loading post...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Container>
                <div className="max-w-5xl mx-auto">

                    {/* Featured Image */}
                    <div className="overflow-hidden rounded-3xl shadow-xl">
                        <img
                            src={appwriteService.getFilePreview(
                                post.featuredImage
                            )}
                            alt={post.title}
                            className="w-full h-[500px] object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Title */}
                    <div className="mt-10">
                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            {post.title}
                        </h1>

                        <p className="mt-3 text-gray-500">
                            Published article
                        </p>
                    </div>

                    {/* Author Buttons */}
                    {isAuthor && (
                        <div className="flex gap-4 mt-8">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-emerald-600"
                                    className="px-6 py-2 hover:bg-emerald-700 transition"
                                >
                                    ✏️ Edit Post
                                </Button>
                            </Link>

                            <Button
                                bgColor="bg-red-600"
                                onClick={deletePost}
                                className="px-6 py-2 hover:bg-red-700 transition"
                            >
                                🗑 Delete Post
                            </Button>
                        </div>
                    )}

                    {/* Article */}
                    <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                        <div className="prose prose-lg max-w-none text-gray-700 leading-8">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
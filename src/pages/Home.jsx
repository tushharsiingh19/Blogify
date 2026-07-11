import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useNavigate, useParams } from "react-router-dom";
function Home() {
    const [posts, setPosts] = useState([]);
 const navigate = useNavigate();
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-4">
                <Container>
                    <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                        <div className="text-6xl mb-6">📝</div>

                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Welcome to Blogify
                        </h1>

                        <p className="text-gray-500 text-lg mb-8">
                            Discover amazing stories written by people around
                            the world.
                        </p>

                        <div className="inline-flex rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 cursor-default"
                        onClick={ ()=>{navigate("/login")}}>
                            Login to Read Posts 
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Container>
                {/* Heading */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Latest Posts
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Explore articles shared by our community.
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="transform transition duration-300 hover:-translate-y-2"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
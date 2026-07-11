import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Container>
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Explore All Posts
                    </h1>

                    <p className="mt-2 text-gray-500 text-lg">
                        Discover stories, tutorials, and ideas shared by our community.
                    </p>
                </div>

                {/* Empty State */}
                {posts.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 py-20 text-center">
                        <div className="text-6xl mb-5">📚</div>

                        <h2 className="text-2xl font-semibold text-gray-700">
                            No Posts Found
                        </h2>

                        <p className="mt-3 text-gray-500">
                            There aren't any published posts yet.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {posts.map((post) => (
                            <div
                                key={post.$id}
                                className="transition duration-300 hover:-translate-y-2"
                            >
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;
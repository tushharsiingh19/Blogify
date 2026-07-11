import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block group">
            <div className="overflow-hidden bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                {/* Image */}
                <div className="overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="p-5">

                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 rounded-full">
                        BLOG
                    </span>

                    <h2 className="mt-4 text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {title}
                    </h2>

                    <p className="mt-3 text-gray-500 text-sm line-clamp-2">
                        Click to read the complete article and discover more.
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-600 group-hover:underline">
                            Read More →
                        </span>

                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                            →
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
}

export default PostCard;
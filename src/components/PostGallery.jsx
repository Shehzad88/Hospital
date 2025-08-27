import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaHeart, FaComment, FaRetweet, FaEllipsisH } from "react-icons/fa";
import headerBg from "/src/assets/97.png";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const posts = [
  {
    id: 1,
    username: "Panasapch",
    time: "5 minutes ago",
    caption: "A great day when you are confident in yourself!!",
    image: "/src/assets/6.jpg",
    likes: 17,
    comments: 3,
  },
  {
    id: 2,
    username: "Therapist",
    time: "2 hours ago",
    caption: "A calm mind, a peaceful soul, a powerful you.",
    image: "/src/assets/26.jpg",
    likes: 92,
    comments: 13,
  },
];

const PostCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow w-[600px] p-4 mb-6">
    <div className="flex justify-between items-center mb-2">
      <div>
        <p className="font-semibold text-sm">@{post.username}</p>
        <p className="text-xs text-gray-500">{post.time}</p>
      </div>
      <FaEllipsisH className="text-gray-500" />
    </div>
    <p className="mb-2 text-sm">{post.caption}</p>
    <img src={post.image} alt="Post" className="rounded-md mb-2 w-full h-auto" />
    <div className="flex items-center text-sm text-gray-600 gap-6">
      <span className="flex items-center gap-1">
        <FaHeart className="text-pink-500" /> {post.likes}
      </span>
      <span className="flex items-center gap-1">
        <FaComment /> {post.comments} comments
      </span>
      <span className="flex items-center gap-1">
        <FaRetweet /> Share
      </span>
    </div>
  </div>
);

export default function PostGallery() {
  const navigate = useNavigate(); // ✅ useNavigate hook

  return (
    <div className="min-h-screen bg-[#fffaf3] flex flex-col">
      {/* Header with background */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <Navbar />
        <div className="bg-[#8ed751]/90 flex items-center justify-between px-10 py-3">
          <button className="bg-white hover:bg-green-600 hover:text-white cursor-pointer text-[#8ed751] font-semibold py-1 px-4 rounded-full shadow">
            Post Gallery
          </button>
          <input
            type="text"
            placeholder="Search something"
            className="w-1/3 py-2 px-4 rounded-full outline-none text-sm bg-amber-50 shadow-sm"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/5 bg-white py-6 px-4 border-r min-h-screen">
          <button className="bg-[#8ed751] hover:bg-green-500 cursor-pointer text-white py-2 px-4 mb-6 rounded-full font-bold w-full">
            + POST
          </button>
          <nav className="space-y-4 text-sm">
            <button className="block w-full text-left cursor-pointer hover:bg-green-500 hover:text-white p-2 rounded-full">
              📰 Feed
            </button>
            <button
              onClick={() => navigate("/account")} // ✅ Correctly using navigate
              className="block w-full text-left cursor-pointer hover:bg-green-500 hover:text-white p-2 rounded-full"
            >
              👤 Account
            </button>
          </nav>
        </aside>

        {/* Feed */}
        <main className="w-4/5 p-6">
          <div className="mb-6">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="w-full p-4 border rounded-xl shadow-sm mb-2"
            />
            <div className="flex space-x-4 text-sm">
              <button className="bg-black text-white py-1 px-3 rounded-full cursor-pointer">
                TOP
              </button>
              <button className="border py-1 px-3 rounded-full cursor-pointer hover:bg-black hover:text-white">
                MY FEED
              </button>
              <button className="border py-1 px-3 rounded-full cursor-pointer hover:bg-black hover:text-white">
                ALL
              </button>
            </div>
          </div>

          {/* Post List */}
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}

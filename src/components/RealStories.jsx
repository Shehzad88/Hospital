import React from 'react';

const RealStories = () => {
  return (
    <div className="px-8 py-12 bg-white">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">Real Stories, Real Impact</h2>
        <button className="bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800">SEE ALL</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Story Card 1 */}
        <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="relative">
            <img
              src="/src/assets/35.jpg"
              alt="Zara Ahmed"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0">
              <div className="w-40 h-40 absolute right-0 bottom-0 bg-lime-200 opacity-80 rounded-tl-full blur-2xl" />
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-semibold">Zara Ahmed</p>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
            <p className="text-gray-900 text-sm font-medium">Overcoming Anxiety and Finding Peace</p>
          </div>
        </div>

        {/* Story Card 2 */}
        <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="relative">
            <img
              src="/src/assets/36.jpg"
              alt="Zara Ahmed"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0">
              <div className="w-40 h-40 absolute right-0 bottom-0 bg-lime-200 opacity-80 rounded-tl-full blur-2xl" />
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-semibold">Zara Ahmed</p>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
            <p className="text-gray-900 text-sm font-medium">Overcoming Anxiety and Finding Peace</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealStories;

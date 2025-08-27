import react from 'react';
export default function StoryYear() {
   const storyItems = [
    {
      year: "2010",
      title: "Inception of FlamSafe",
      description:
        "FlamSafe was founded in 2010 with a mission to revolutionize mental health care by providing compassionate and personalized services to our community. Our journey began with a vision to create a safe space for individuals to prioritize their mental well-being."
    },
    {
      year: "2017",
      title: "Expanding Our Services",
      description:
        "In 2013, we expanded our offerings to include a comprehensive range of therapy sessions, psychiatric consultations, and mindfulness workshops. This expansion allowed us to better meet the diverse needs of our clients and promote holistic mental wellness."
    },
    {
      year: "2020",
      title: "Embracing Digital Innovation",
      description:
        "In 2020, FlamSafe embraced digital innovation by introducing teletherapy services, providing convenient and accessible mental health care to individuals in need. This step forward reflected our commitment to evolving with the times while maintaining our core values of empathy and effectiveness."
    }
  ];

  return (
    <div className="p-8 bg-white text-gray-800 font-sans flex justify-center">
      <div className="w-full p-6">
        <div className="text-left mb-6 relative">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <button className="absolute -top-1 cursor-pointer right-0 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
            LEARN MORE
          </button>
        </div>

        <div className="bg-green-50 rounded-xl p-6 space-y-16 rounded-full">
          {storyItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-start border-b border-gray-200 pb-6 last:border-b-0"
            >
              <div className="md:w-1/5 mb-2 md:mb-0 text-2xl font-semibold text-gray-700">
                {item.year}
              </div>
              <div className="md:w-4/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                  </div>
                  <div className="ml-4 mt-1">
                    <div className="bg-green-200 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-green-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     );
}
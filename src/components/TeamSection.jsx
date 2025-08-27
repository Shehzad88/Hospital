import React from 'react';

const teamMembers = [
  {
    name: 'Hussain Yousaf',
    title: 'Co-founder',
    image: '/src/assets/prof.png', // replace with your actual image path
  },
  {
    name: 'Nashmiya Siddique',
    title: 'Clinical Psychologist',
    image: '/src/assets/Image 1 (2).png',
  },
  {
    name: 'Haris Akram',
    title: 'Clinical Psychologist',
    image: '/src/assets/Image 1 (3).png',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-green-500 font-semibold text-sm uppercase">Our Team</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">Team of Compassionate Experts</h2>
        <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
          Join Our Team
        </button>
      </div>

      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border shadow-md overflow-hidden text-center"
          >
            
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[300px] object-cover"
            />

            
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
              <div className="mt-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-sm font-bold">
                  ✳️
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

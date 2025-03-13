import Image from "next/image";

export default function OurTeam() {
    // Sample team data (Replace with real data)
    const teamMembers = [
      {
        name: "John Doe",
        designation: "CEO & Founder",
        quote: "Leadership is not a position, it's an action.",
        image: "/image.jpg", // Replace with actual images
      },
      {
        name: "Jane Smith",
        designation: "Project Manager",
        quote: "Efficiency is doing better what is already being done.",
        image: "/image.jpg",
      },
      {
        name: "Michael Brown",
        designation: "Lead Engineer",
        quote: "Innovation distinguishes between a leader and a follower.",
        image: "/image.jpg",
      },
      {
        name: "Emily Davis",
        designation: "Architect",
        quote: "Design is intelligence made visible.",
        image: "/image.jpg",
      },
    ];
  
    return (
      <section className="w-full py-20 flex flex-col items-center bg-[#282230]">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">Our Team</h2>
  
        {/* Team Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 max-w-7xl">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              {/* Image Container */}
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                <Image src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
  
              {/* Name */}
              <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
              
              {/* Designation */}
              <p className="text-gray-600 text-sm">{member.designation}</p>
              
              {/* Quote */}
              <p className="text-gray-500 italic mt-3">&quot;{member.quote}&quot;</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
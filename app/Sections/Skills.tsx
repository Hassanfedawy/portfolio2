const skills = [
  "HTML", 
  "CSS", 
  "JavaScript",  // Corrected "Java Script" to "JavaScript"
  "TypeScript", 
  "Tailwind CSS", 
  "React", 
  "Next.js", 
  "Redux", 
  "MySQL",  // Corrected "MySql" to "MySQL"
  "MongoDB"  // Corrected "MongoDb" to "MongoDB"
];

function Skills() {
  return (
    <section className='p-5' id="skills">
      <h1 className='font-semibold text-3xl mb-6 text-center'>Skills</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <button 
            key={skill} 
            className="skill bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:bg-teal-500 hover:text-white hover:scale-105"
          > 
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Skills;

// Sections/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Alhassan. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/alhassan-fedawy-02a353321/" className="font-bold text-blue-600 hover:text-white">LinkedIn</a>
            <a href="https://github.com/Hassanfedawy" className="text-green-600 font-bold hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }
  
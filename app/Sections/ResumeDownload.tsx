// Sections/ResumeDownload.js
export default function ResumeDownload() {
    return (
      <section id="resume" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Resume</h2>
          <p className="text-lg mb-8">You can download my resume below for more details about my skills and experience.</p>
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded inline-block"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }
  
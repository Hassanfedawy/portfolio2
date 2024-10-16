import { AnimatedListDemo } from "../_components/AnimatedList"

function CTA() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900  p-8 rounded-lg shadow-lg">
      
      <div className="mb-6 md:mb-0 text-center md:text-left text-white flex-grow">
        <h1 className="text-4xl font-bold mb-4">Interested?</h1>
        <h3 className="text-xl font-light mb-4">
          Let’s collaborate to bring your vision to life. Together, we’ll create something extraordinary.
        </h3>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300">
            <a href="#contact">
          Get in Touch
          </a>
        </button>
      </div>

      <AnimatedListDemo />

    </div>
  )
}

export default CTA

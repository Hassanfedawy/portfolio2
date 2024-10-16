import Image from "next/image";
import { WordPullUpDemo } from "../_components/header";

function LandingPage() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center mb-20 px-5 md:px-0" id=" home">
      
      {/* Header Content */}
    
       <WordPullUpDemo/>
       
      
      {/* Profile Image */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
        <Image
          src={'/Photo1.jpeg'}
          alt="Photo"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      
    </section>
  );
}

export default LandingPage;

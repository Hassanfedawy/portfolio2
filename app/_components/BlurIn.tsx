import BlurIn from "@/components/ui/blur-in";
export function BlurInDemo() {
  return (
    <div >
    <BlurIn
      word=" Hi, I’m Alhassan, a passionate Computer Engineering student at the Arab Academy for Science and Technology. I have a deep interest in web development and problem-solving, and I specialize in building modern, responsive websites and web applications using a range of front-end and back-end technologies."
      className="text-gray-600 text-lg md:text-xl leading-relaxed mb-4 text-left"
    />

    <BlurIn 
        word=" I’ve gained hands-on experience through various freelance projects and personal challenges, such as cloning large platforms like Amazon and Airbnb. Additionally, I regularly compete in Frontend Mentor challenges to continuously refine my skills."
        className="text-gray-600 text-lg md:text-xl leading-relaxed mb-4 text-left"/>

    <BlurIn
        word="My goal is to merge creativity and functionality to build seamless, user-friendly digital experiences that solve real-world problems."
        className="text-gray-600 text-lg md:text-xl leading-relaxed text-left"/>

</div>
  );
}

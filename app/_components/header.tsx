import WordPullUp from "@/components/ui/word-pull-up";
export function WordPullUpDemo() {
  return (
    <div className="flex flex-col items-center md:items-start md:max-w-lg text-center md:text-left mt-10 md:mt-0 md:mr-10">
    <WordPullUp
      className="text-4xl font-bold  text-black md:text-7xl text-nowrap"
      words="Hi, I'm Alhassan"
    />
    <WordPullUp
    className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4 text-left"
    words="Frontend Engineer. I love building things and helping people."
  />
  </div>
  );
}

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
export default function ScrollHorizontal() {
  return (
    <VelocityScroll
      text="Alhassan Fedawy"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}

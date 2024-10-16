"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "Pixel-Perfect Design Execution",
      description: "Delivering flawless, precise designs that align exactly with the client’s vision. Every detail matters, and a high-end frontend developer ensures no design element is out of place.",
      time: "",
      icon: "🎯",
      color: "#00C9A7",  // Teal for precision and clarity
    },
    {
      name: "Lightning-Fast Turnaround",
      description: "Time is money. So having a developer who can deliver high-quality results swiftly without compromising on excellence is crucial. Efficiency with elegance.",
      time: "",
      icon: "⚡",
      color: "#FFB800",  // Yellow for speed and energy
    },
    {
      name: "Responsive Across All Devices",
      description: "In today’s mobile-first world, ensuring designs look stunning across all devices—from desktops to smartphones—is a must.",
      time: "",
      icon: "📱",
      color: "#FF3D71",  // Pink for adaptability and user experience
    },
    {
      name: "Exceptional Communication Skills",
      description: "Clients value clear and consistent updates. Being easy to reach and able to explain technical details in a simple, approachable way adds a layer of trust and professionalism.",
      time: "",
      icon: "💬",
      color: "#7B61FF",  // Purple for communication and clarity
    },
    {
      name: "Problem-Solving Expertise",
      description: "Clients appreciate a proactive freelancer who anticipates challenges and solves problems before they arise, adding extra value to every project.",
      time: "",
      icon: "🧠",
      color: "#FFA500",  // Orange for creativity and intelligence
    },
    {
      name: "Highly Customizable Solutions",
      description: "Offering tailored, unique solutions that cater to the specific needs of each client adds a bespoke feel to every project, making them feel like their business is your top priority.",
      time: "",
      icon: "🛠️",
      color: "#0CC478",  // Green for versatility and customization
    },
    {
      name: "Attention to Detail",
      description: "Perfection lies in the small things. Customers love a developer who ensures every interaction, hover effect, and animation is thoughtfully crafted, delivering an elevated, luxury experience.",
      time: "",
      icon: "🔍",
      color: "#1E86FF",  // Blue for precision and focus
    },
    {
      name: "Latest Tech Stack Mastery",
      description: "Staying ahead of trends and mastering the latest tools and frameworks ensures that clients receive modern, future-proof designs that enhance both form and function.",
      time: "",
      icon: "🖥️",
      color: "#8000FF",  // Dark purple for modernity and tech-savvy
    },
    {
      name: "Reliability and Commitment",
      description: "Clients need a developer they can count on. Being punctual with deadlines, sticking to your word, and going the extra mile builds trust and a long-lasting relationship.",
      time: "",
      icon: "⏳",
      color: "#FF6347",  // Tomato red for reliability and dependability
    },
    {
      name: "Post-Launch Support",
      description: "A luxury experience doesn’t end at delivery. Offering continued support, updates, and maintenance assures clients that they’re backed by a dedicated professional every step of the way.",
      time: "",
      icon: "🔧",
      color: "#4CAF50",  // Green for ongoing care and support
    },
  ];
  

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl p-5"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm  font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList delay={1500}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

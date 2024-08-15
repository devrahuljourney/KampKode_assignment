import OrbitContent from "./OrbitContent";
import OrbitingCircles from "./magicui/orbiting-circles";
import html from "../../asset/image13.png"
import css from "@/asset/image 20.png"


export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none   text-center  ">
        <OrbitContent/>
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent "
        duration={10}
        delay={5}
        radius={400}
      >
        <Icons.javascript />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={300}
      >
        <Icons.css />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={600}
        duration={15}
        reverse
      >
        <Icons.java />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200}
        duration={10}
        delay={20}
        
      >
        <Icons.html />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={500}
        duration={15}
        delay={20}
        reverse
      >
        <Icons.flutter />
      </OrbitingCircles>
      
    </div>
  );
}

const Icons = {
  html: () => (
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png"  alt="html" width={200} height={200} />
  ),
  css: () => (
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png" width={200} height={200} alt="css" />
  ),
  javascript: () => (
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png" width={200} height={200} alt="css" />
  ),
  java: () => (
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png" width={200} height={200} alt="css" />
  ),
  flutter: () => (
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flutter-icon.png" width={200} height={200} alt="css" />
  ),
 
};

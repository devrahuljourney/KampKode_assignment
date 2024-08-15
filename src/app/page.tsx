import Image from "next/image";
import { OrbitingCirclesDemo } from "./components/Orbit";
import { DummyContent } from "./components/Navbar";
import StickyScrollRevel from "./components/Sticky_scroll";

export default function Home() {
  return (
  <>
    <OrbitingCirclesDemo/>
    <StickyScrollRevel/>
  </>
  );
}

import GalleryGrid from "../components/GalleryGrid";
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function GalleryPage() {
  return (
    <div className={`section ${zenDots.className}`}>
      <h2>Gallery</h2>
      <p>Recent events, behind-the-scenes shots and our drivers in action. Follow our journey on Instagram.</p>
      <GalleryGrid />
    </div>
  );
}

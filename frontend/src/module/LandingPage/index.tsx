import FirstParagraph from "./components/FirstParagraph";
import ForthParagraph from "./components/ForthParagraph";
import SecondParagraph from "./components/SecondParagraph";
import ThirdParagraph from "./components/ThirdParagraph";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div>
      <motion.div>
        <FirstParagraph />
      </motion.div>
      <SecondParagraph />
      <ThirdParagraph />
      <ForthParagraph />
    </div>
  );
}

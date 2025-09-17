import React from "react";
import { motion } from "framer-motion";
import PrivacyBanner from "./PrivacyBanner";
import PrivacyPolicy from "./PrivacyPolicy";

function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}   // completely off-screen at bottom
      animate={{ opacity: 1, y: 0 }}         // slide up into view
      exit={{ opacity: 0, y: "100vh" }}      // slide back down when leaving
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PrivacyBanner />
      <PrivacyPolicy />
    </motion.div>
  );
}

export default Privacy;

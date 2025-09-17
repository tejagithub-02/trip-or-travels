import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [referralPosition, setReferralPosition] = useState("Left");
  const [fadeOut, setFadeOut] = useState(false); // state for fade-out
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");

    // start fade-out animation
    setFadeOut(true);

    // navigate after 1 second (animation duration)
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="register-wrapper">
      <motion.div
        className="register-card"
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: fadeOut ? 0 : 1, scale: fadeOut ? 0.8 : 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="register-title">
          Create <span className="highlight">Account</span>
        </h2>

        <form onSubmit={handleSubmit} className="register-form">
          {["Name", "Email", "Mobile Number", "Referral ID", "Password"].map(
            (field, idx) => (
              <motion.div
                className="form-group"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <label>{field}</label>
                <motion.input
                  type={
                    field === "Password"
                      ? "password"
                      : field === "Email"
                      ? "email"
                      : field === "Mobile Number"
                      ? "tel"
                      : "text"
                  }
                  placeholder={`Enter your ${field.toLowerCase()}`}
                  className="input-field"
                  required
                  whileFocus={{
                    scale: 1.05,
                    borderColor: "#00b4d8",
                    boxShadow: "0 0 10px #00b4d8",
                  }}
                />
              </motion.div>
            )
          )}

          {/* Referral Position */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label>Referral Position</label>
            <div className="radio-group">
              {["Left", "Right"].map((pos) => (
                <motion.label
                  key={pos}
                  className={`radio-label ${referralPosition === pos ? "active" : ""}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <input
                    type="radio"
                    name="referralPosition"
                    value={pos}
                    checked={referralPosition === pos}
                    onChange={() => setReferralPosition(pos)}
                  />
                  {pos}
                </motion.label>
              ))}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="register-btn"
            whileHover={{ scale: 1.08, boxShadow: "0 8px 20px rgba(0,180,216,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}

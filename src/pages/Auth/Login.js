import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-wrapper">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="login-title">Login</h2>

        <form>
          <div className="form-group">
            <label>User ID</label>
            <motion.input
              type="text"
              placeholder="Enter your User ID"
              className="input-field"
              whileFocus={{ scale: 1.03, borderColor: "#0077b6" }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <motion.input
              type="password"
              placeholder="Enter your Password"
              className="input-field"
              whileFocus={{ scale: 1.03, borderColor: "#0077b6" }}
            />
          </div>

          <motion.button
            type="submit"
            className="login-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        <p className="register-link">
  Don’t have an account? <Link to="/register">Register</Link>
</p>

      </motion.div>
    </div>
  );
}

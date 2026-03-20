import { useState } from "react";
import svgPaths from "./svg-s08ctrm1ch";
import "./LoginPage.css";

export default function LoginPage() {
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!studentId || !password) {
            alert("Please enter both Student ID and Password");
            return;
        }

        console.log("Login attempt:", { studentId, password });
        alert(`Login successful!\nStudent ID: ${studentId}`);

        setStudentId("");
        setPassword("");
    };

    const handleTogglePassword = () => {
        console.log("Toggle password visibility");
    };

    return (
        <div className="login-page">
            <div className="login-background-overlay" />

            <div className="main-section">
                <div className="main-section-inner">
                    <div className="main-section-content">

                        {/* Login Container */}
                        <div className="login-container">
                            <div className="login-container-border" />

                            <div className="login-container-content">

                                {/* Sticker Badge */}
                                <div className="sticker-wrapper">
                                    <div className="sticker-rotation">
                                        <div className="sticker-badge">
                                            <div className="sticker-badge-border" />
                                            <div className="sticker-badge-text">
                                                <p>Student</p>
                                                <p>Login</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Header */}
                                <div className="header-margin">
                                    <div className="header-container">
                                        {/* Icon */}
                                        <div className="icon-container">
                                            <div className="canteen-icon">
                                                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
                                                    <path d={svgPaths.p217e5f00} fill="#EC3713" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Heading */}
                                        <div className="heading">
                                            <p className="heading-text">Campus Canteen</p>
                                        </div>

                                        {/* Subheading */}
                                        <div className="subheading">
                                            <p className="subheading-text">Enter your credentials to get fed.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="form-margin">
                                    <div className="form-container">

                                        {/* Student ID Input */}
                                        <div className="input-group">
                                            <div className="label-margin">
                                                <p className="input-label">Student ID</p>
                                            </div>

                                            <div className="input-wrapper">
                                                <div className="input-field">
                                                    <div className="input-field-inner">
                                                        <div className="input-field-padding">
                                                            <input
                                                                type="text"
                                                                value={studentId}
                                                                onChange={(e) => setStudentId(e.target.value)}
                                                                placeholder="e.g. ST-4092"
                                                                className="input-element"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="input-field-border" />
                                                </div>

                                                {/* Briefcase Icon */}
                                                <div className="input-icon">
                                                    <div className="input-icon-briefcase">
                                                        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                                            <path d={svgPaths.p207ea900} fill="#94A3B8" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Password Input */}
                                        <div className="input-group">
                                            <div className="label-margin">
                                                <div className="password-header">
                                                    <p className="input-label">Password</p>
                                                    <button
                                                        onClick={() => alert("Password reset functionality would be implemented here")}
                                                        className="link-button"
                                                    >
                                                        <p>Lost key?</p>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="input-wrapper">
                                                <div className="input-field">
                                                    <div className="input-field-inner">
                                                        <div className="input-field-padding">
                                                            <input
                                                                type="password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                placeholder="••••••••"
                                                                className="input-element password-input"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="input-field-border" />
                                                </div>

                                                {/* Eye Icon */}
                                                <button onClick={handleTogglePassword} className="toggle-password-button">
                                                    <div className="input-icon-eye">
                                                        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
                                                            <path d={svgPaths.p3e801e80} fill="#94A3B8" />
                                                        </svg>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="submit-button-margin">
                                            <button onClick={handleSubmit} className="submit-button">
                                                <div className="submit-button-border" />
                                                <p className="submit-button-text">Unlock Lunch</p>
                                                <div className="submit-button-icon">
                                                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 17.7 17.7">
                                                        <path d={svgPaths.p3f27e00} fill="white" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Horizontal Border & Signup */}
                                <div className="border-margin">
                                    <div className="horizontal-border">
                                        <div className="signup-section">
                                            <p className="signup-text">
                                                New here?{" "}
                                                <button
                                                    onClick={() => alert("Create profile functionality would be implemented here")}
                                                    className="signup-link"
                                                >
                                                    Create a profile
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Top Bar */}
                        <div className="decorative-top-bar" />

                        {/* Footer */}
                        <div className="footer-margin">
                            <div className="footer-info">
                                <p className="footer-text">© 2023 Campus Canteen</p>
                                <p className="footer-text">•</p>
                                <button
                                    onClick={() => alert("Help page would be implemented here")}
                                    className="footer-link"
                                >
                                    <p>Help</p>
                                </button>
                                <p className="footer-text">•</p>
                                <button
                                    onClick={() => alert("Privacy policy would be implemented here")}
                                    className="footer-link"
                                >
                                    <p>Privacy</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

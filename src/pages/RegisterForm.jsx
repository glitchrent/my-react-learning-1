import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        try {
            console.log("text")
            const response = await fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                }),
            });
            console.log("tetexxt")
            const data = await response.json();

            if (response.ok) {
                console.log("Registration successful", data);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={processing}
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={processing}
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={processing}
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        required
                        disabled={processing}
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" disabled={processing}>
                    {processing ? "Processing..." : "Register"}
                </button>
                <p>
                    Already have an account? <a href="#">Login</a>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;

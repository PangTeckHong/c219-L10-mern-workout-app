import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Fixing typo

        console.log(email, password);
    };

    return (
        <form className="Login" onSubmit={handleSubmit}> {/* Fixing typo */}
            <h3>Log in</h3>

            <label>Email:</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
            />
            
            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
            />

            <button type="submit">Log in</button> {/* Ensuring correct button type */}
        </form>
    );
};

export default Login;

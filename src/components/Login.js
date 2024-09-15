import React, { useState } from 'react';
import './index.css'; 

function Login() {
  const [username, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // dummy login logic
    if (username === 'dummyUser' && password === 'dummyPassword') {
      // redirect to homepage
      window.location.href = '/home';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      <div className="form-container">
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

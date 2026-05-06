// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { useAuth } from '../contexts/AuthContext';

// export default function LoginPage() {
// //   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     // Check credentials
//     if (username === 'arnavk' && password === '1234') {
        
//       navigate('/dashboard');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
//       <h2>Login Page</h2>
//       <form onSubmit={handleLogin}>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="username">Username:</label>
//           <input
//             id="username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter username"
//             style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="password">Password:</label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//           />
//         </div>
//         {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
//         <button type="submit" style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
//           Login
//         </button>
//       </form>
//       <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
//         Demo credentials: username: <strong>arnavk</strong>, password: <strong>1234</strong>
//       </p>
//     </div>
//   );
// }
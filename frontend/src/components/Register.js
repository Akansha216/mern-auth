// import React, { useState } from 'react';
// import axios from 'axios';
// import { Toast, ToastContainer } from 'react-bootstrap';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const [showToast, setShowToast] = useState(false); // Toast state to show/hide

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/register', formData);
//       setSuccess(response.data.message);
//       setError('');
//       setShowToast(true); // Show the success toast
//     } catch (err) {
//       setError(err.response ? err.response.data.message : 'Server error');
//       setSuccess('');
//       setShowToast(true); // Show the error toast
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <div className="card" style={{ width: '400px' }}>
//         <div className="card-body">
//           <h2 className="card-title text-center">Register</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Register</button>
//           </form>
//         </div>
//       </div>

//       {/* Toast container for success or error messages */}
//       <ToastContainer position="top-center" className="p-3">
//         {success && (
//           <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
//             <Toast.Body className="text-success">{success}</Toast.Body>
//           </Toast>
//         )}
//         {error && (
//           <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
//             <Toast.Body className="text-danger">{error}</Toast.Body>
//           </Toast>
//         )}
//       </ToastContainer>
//     </div>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import axios from 'axios';
import { Toast, ToastContainer } from 'react-bootstrap';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [showToast, setShowToast] = useState(false); // Toast state to show/hide

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      setSuccess(response.data.message);
      setError('');
      setShowToast(true); // Show the success toast
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Server error');
      setSuccess('');
      setShowToast(true); // Show the error toast
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card" style={{ width: '400px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>

      {/* Toast container for success or error messages */}
      <ToastContainer position="top-center" className="p-3 toast-container">
        {success && (
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="toast toast-success">
            <Toast.Body>{success}</Toast.Body>
          </Toast>
        )}
        {error && (
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="toast toast-error">
            <Toast.Body>{error}</Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </div>
  );
};

export default Register;

import Axios from 'axios';
import '../../index.css';

function AdminLoginPage() {
  const handleSubmit = async (event) => { // Removed TypeScript type
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    try {
      const response = await Axios.post('https://dorcas-backend.onrender.com/login', { email, password });
      console.log(response.data);

      if (response.data.token) {
        alert(response.data.message);
        localStorage.setItem('dorcasmistries', response.data.token);
        window.location.href = '/admin'; // Redirect to the dashboard page after successful login
      } else {
        // Handle case where token is not returned
        alert('Login failed. Please check your credentials.');
        window.location.href = '/'; // Redirect to homepage
      }
    } catch (error) {
      console.error(error);

      // Check if error is an AxiosError
      if (error.response && error.response.status === 401) {
        alert('Invalid credentials. Please try again.');
      } else {
        alert('An error occurred. Please try again later.');
      }

      // Redirect to homepage if login fails
      window.location.href = '/'; // Redirect to homepage
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="w-full p-3 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-500">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default AdminLoginPage;

import useFetchData from "./hooks/useFetchData";
import UserCard from "./components/UserCard";

function App() {
  const {
    data: users,
    loading,
    error,
  } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div className="status-container">
        <div className="loader"></div>
        <h2>Loading users...</h2>
        <p>Please wait while we fetch the data.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error-container">
        <h2>Something went wrong!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>User Directory</h1>

        <p>
          Users fetched using a reusable custom hook with Axios
        </p>
      </header>

      <main className="users-container">
        <div className="user-count">
          Total Users: <strong>{users.length}</strong>
        </div>

        <div className="user-grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
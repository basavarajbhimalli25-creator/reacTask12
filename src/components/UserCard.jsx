function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-header">
        <div className="user-id">#{user.id}</div>

        <h2>{user.name}</h2>

        <p className="username">@{user.username}</p>
      </div>

      <div className="user-details">
        <p>
          <strong>Email:</strong>
          <span>{user.email}</span>
        </p>

        <p>
          <strong>Phone:</strong>
          <span>{user.phone}</span>
        </p>

        <p>
          <strong>Website:</strong>
          <span>{user.website}</span>
        </p>

        <p>
          <strong>City:</strong>
          <span>{user.address.city}</span>
        </p>
      </div>
    </div>
  );
}

export default UserCard;
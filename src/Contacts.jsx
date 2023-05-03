const Contacts = ({ users, onDelete }) => {
    return (
        <div>
            {users.map((user, index) => <div
                key={index}
                className="card">
                <p>Name : {user.name}</p>
                <p>Phone : {user.phoneNumber}</p>
                <p>Location: {user.location}</p>
                <button>edit</button>
                <button onClick={() => onDelete(user.id)}>delete</button>
            </div>)}
        </div>
    )
}
export default Contacts
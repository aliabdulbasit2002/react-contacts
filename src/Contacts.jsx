const Contacts = ({ users }) => {
    return (
        <div>
            {users.map((user, index) => <div
                key={index}
                className="card">
                <p>Name : {user.name}</p>
                <p>Phone : {user.phoneNumber}</p>
                <p>Location: {user.location}</p>
            </div>)}
        </div>
    )
}
export default Contacts
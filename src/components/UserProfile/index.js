import "./index.css";

const UserProfile = (props) => {
    const { userDetails,deleteUser } = props;
    const {imageUrl,name,role,uniqueNo} = userDetails;
    const onDelete = () => {
        deleteUser(uniqueNo)
    }
    return (
        <li className="user-card-container">
            <img src={imageUrl} alt={name} className="avatar"/>
            <div className="user-details-container">
                <h1 className="user-name">{name}</h1>
                <p className="user-designation">{role}</p>
            </div>
            <button type="button" className="delete-button" onClick={onDelete}>
                <span className="delete-img">&#10005;</span>
            </button>
        </li>
    )
}

export default UserProfile;
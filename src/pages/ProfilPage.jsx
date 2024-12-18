import "../Css/ProfilPage.css";
import { RxAvatar } from "react-icons/rx";

function ProfilPage() {
  return (
    <div className="container-profile-page">
      <div className="div_zagolovok">Profile</div>
      <div className="cont-user-form">
        <div className="profile-photo">
        <RxAvatar             className="photo-circle"
        />

       
        </div>
        <div className="user-info">
          <h2 className="username">Username</h2>
          <button className="btn-settings">Settings</button>
          <button className="btn-favorites">My Favorites</button>
          <button className="btn-change-password">Change Password</button>

        </div>
        <div className="extra-section">
          <h3>About Me</h3>
          <p>Here you can add additional information about the user.</p>
        </div>
        <div className="extra-section">
          <h3>Email</h3>
          <p>user@example.com</p>
        </div>
        <div className="extra-section">
          <h3>Phone Number</h3>
          <p>(123) 456-7890</p>
        </div>
     
       
      </div>
    </div>
  );
}

export default ProfilPage;

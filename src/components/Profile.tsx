import react from "react";
//import '../App.css';

const ProfileSection: React.FC = () => {
  return (
      <section className="profile-section">

        <img src="https://avatars.githubusercontent.com/u/55762057?v=4" alt="André Souza" className="profile-pic" />{" "} 

        <div className="title-container">

          <span>Hi, i'm  ✌🏾 </span>
          <span className="name">André Souza</span>       
          <span className="title">Backend Developer</span>
          <span className="sub-title">sometimes I teach programing, sometimes I do DevOps and Frontend</span>
        </div>

      </section>

  );
}

export default ProfileSection;

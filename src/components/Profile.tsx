const ProfileSection: React.FC = () => {
  return (
      <section className="profile-section" itemScope itemType="https://schema.org/Person">

      <h1 className="hidden-but-accessible">
      André Souza (an3dree) - Backend Developer
      </h1>

        <img
          src="https://avatars.githubusercontent.com/u/55762057?v=4"
          alt="André Souza - Backend Developer"
          className="profile-pic" />

        <div className="title-container">

          <span>Hi, i'm  ✌🏾 </span>
          <span className="name" itemProp="name">André Souza</span>
          <span className="title" itemProp="jobTitle">Backend Developer</span>
          <span className="sub-title" itemProp="description">sometimes I teach programing, sometimes I do DevOps and Frontend</span>

          <meta itemProp="alternateName" content="an3dree" />
          <meta itemProp="url" content="https://an3dree.dev" />

        </div>

      </section>

  );
}

export default ProfileSection;

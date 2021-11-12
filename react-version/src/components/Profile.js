import React from "react"; //optional

function Profile() {
  const firstName = "Amy";
  const lastName = "Mansell";
  const avatar = "./profile-hex.png";

  return (
    <aside>
      <div class="profile">
        <img class="profile__image" src={avatar} />
      </div>
      <br />
      <div class="profile__name">
        <h2>
          <span class="profile--bold">{firstName}</span>
          {lastName}
        </h2>
      </div>
    </aside>
  );
}

export default Profile;

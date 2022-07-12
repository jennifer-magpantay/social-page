import { Avatar } from "./Avatar";
import { User } from "./User";

export const Profile = () => {
  return (
    <aside className="profile">
      <div className="profile--header">
        <img
          className="profile--header-img"
          src="https://images.unsplash.com/photo-1656873186004-f53c335fa348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
          alt="Collourfull neon bars in dark place"
        />
      </div>
      <div className="profile--body">
        <Avatar
          src="https://avatars.githubusercontent.com/u/56962997?v=4"
          hasBorder
        />
        <User
          name="Jennifer Magpantay"
          role="Front End Designer"
          bio="Foodie and Nerd"
          location="Milan, IT"
        />
      </div>
    </aside>
  );
};

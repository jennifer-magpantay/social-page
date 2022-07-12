import { MapPin } from "phosphor-react";

interface Props {
  name: string;
  role: string;
  bio?: string;
  location?: string;
}

export const User = ({ name, role, bio, location }: Props) => {
  return (
    <div className="user">
      <p className="user--name">{name}</p>
      <p className="user--role">{role}</p>
      <p className="user--bio">{bio}</p>
      {location ? (
        <p className="user--location">
          <MapPin size={18} weight="bold" aria-hidden={true} />
          {location}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

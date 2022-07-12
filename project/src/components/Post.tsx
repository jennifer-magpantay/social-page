import { useState } from "react";
import { ThumbsUp, ChatCentered } from "phosphor-react";

import { Avatar } from "./Avatar";
import { ButtonIcon } from "./ButtonIcon";
import { User } from "./User";
import { formatCounter } from "../helpers/formatCounter";

export const Post = () => {
  const [counter, setCounter] = useState(0);

  function handleCounterLike() {
    setCounter((counter) => {
      return counter + 1;
    });
  }

  function handleNewComment() {}

  return (
    <main className="post">
      <div className="post--header">
        <Avatar
          src="https://avatars.githubusercontent.com/u/56962997?v=4"
          hasBorder
        />
        <User name="Jennifer Magpantay" role="Front End Designer" />
      </div>
      <div className="post--body">
        <p>Lorem ipsum dolor sit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
          voluptatibus? Eaque nostrum, totam consequuntur aliquam voluptatum
          adipisci explicabo praesentium officiis cupiditate? Sunt ex molestias
          temporibus modi quisquam, laudantium mollitia tenetur.
        </p>
      </div>
      <div className="post--footer">
        <div className="post--footer-counters">
          <ButtonIcon onClick={handleCounterLike}>
            <ThumbsUp size={24} weight="bold" color="#475569" />
          </ButtonIcon>
          <span className="post--footer-span">
            {counter === 0 ? "" : formatCounter(counter)}
          </span>

          <ButtonIcon>
            <ChatCentered size={24} weight="bold" color="#475569" />
          </ButtonIcon>
          <span className="post--footer-span">01</span>
        </div>

        <div className="post--footer-comment"></div>
      </div>
    </main>
  );
};

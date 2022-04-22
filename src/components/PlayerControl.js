import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControl = () => {
  return (
    <div>
      <button className="outline-none border-none bg-none text-lg text-gray-600">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="play-btn   mx-[30px] px-5 py-3  rounded-full border-none outline-none bg-yellow-300 text-white text-2xl">
        <FontAwesomeIcon icon={faPlay}/>
      </button>
      <button className="outline-none border-none bg-none text-lg text-gray-600">
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default PlayerControl;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControl = ({skipSong,isPlaying , setIsPlaying}) => {
  return (
    <div>
      <button onClick={() => skipSong(false)} className="outline-none border-none bg-none text-lg text-gray-600">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn   mx-[30px] px-5 py-3  rounded-full border-none outline-none bg-yellow-300 text-white text-2xl">
        {isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
      </button>
      <button onClick={() => skipSong(true)} className="outline-none border-none bg-none text-lg text-gray-600">
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default PlayerControl;

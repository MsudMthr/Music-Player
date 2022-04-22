import React, { useState, useRef, useEffect } from "react";
import PlayerControl from "./PlayerControl";
import PlayerDetails from "./PlayerDetails";

const Player = ({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  nextSongIndex,
}) => {
  const audioEl = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  const skipSong = (forward = true) => {
    if (forward) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }
        setIsPlaying(false);
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        setIsPlaying(false);
        return temp;
      });
    }
  };

  return (
    <div className="player ">
      <h1 className="font-bold my-2 text-white">Playing Now</h1>

      <div className="center sm:flex-row flex-col gap-4">
        <div
          className={`rounded-full  p-2 bg-black    w-48 sm:w-60 md:w-72 ${
            isPlaying && "animate-spin-slow"
          }`}
        >
          <img
            src={songs[currentSongIndex].image}
            alt={songs[currentSongIndex].title}
            className="rounded-full p-2 border-4 border-yellow-500 border-dashed w-48 sm:w-60 md:w-72 "
          />
        </div>

        <div className="center flex-col sm:gap-5 ">
          <audio src={songs[currentSongIndex].song} ref={audioEl}></audio>

          <PlayerDetails song={songs[currentSongIndex]} />

          <PlayerControl
            skipSong={skipSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />

          <p className="text-sm font-light w-full capitalize text-gray-500 opacity-75 mt-5 ">
            <strong>Next up :</strong>
            {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;

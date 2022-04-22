import React , {useState , useRef , useEffect} from "react";
import PlayerControl from "./PlayerControl";
import PlayerDetails from "./PlayerDetails";

const Player = ({ song, next }) => {

    const audioEl = useRef(null)

    const [isPlaying , setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play();
        }else{
            audioEl.current.pause();

        }
    }, [isPlaying])

  return (
    <div className="player ">
      <h1 className="font-bold my-2 text-white">Playing Now</h1>
      <div className="center sm:flex-row flex-col gap-4">
        <div className="rounded-full  p-2 bg-black  animate-spin-slow w-48 sm:w-60 md:w-72 ">
          <img
            src={song.image}
            alt={song.title}
            className="rounded-full p-2 border-4 border-yellow-500 border-dashed "
          />
        </div>
        <div className="center flex-col sm:gap-5 ">
          <audio ref={audioEl}></audio>
          <PlayerDetails song={song} />
          <PlayerControl />
          <p className="text-sm font-light w-full capitalize text-gray-500 opacity-75 mt-5 ">
            <strong>Next up :</strong>
            {next.title} by {next.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;

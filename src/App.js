import React, { useState, useEffect } from "react";

import Player from "./components/Player";

import cheraToChangi from "./images/chera-to-jangi.jpg";
import yakhZadam from "./images/yakh zadam.jpg";
import dasteManNist from "./images/daste-man-nist.jpg";
import dasteManNistSong from "./music/Shadmehr Aghili - Daste Man Nist.mp3";
import cheraToChangiSong from "./music/Shadmehr Aghili - Chera Too Jangi.mp3";
import yakhZadamSong from "./music/Shadmehr Aghili - Yakh Zadam.mp3";

function App() {
  const [songs] = useState([
    {
      title: "Daste man nist",
      artist: "shadmehr",
      image: dasteManNist,
      song: dasteManNistSong,
    },
    {
      title: "Yakh zadam",
      artist: "shadmehr",
      image: yakhZadam,
      song: yakhZadamSong,
    },
    {
      title: "Chera to jangi",
      artist: "shadmehr",
      image: cheraToChangi,
      song: cheraToChangiSong,
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="w-full h-full bg-gray-400">
      <div className="h-screen w-screen bg-gray-400 container mx-auto center">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
    </div>
  );
}

export default App;

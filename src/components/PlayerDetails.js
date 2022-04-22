import React from "react";

const PlayerDetails = ({ song }) => {
   return (
    <div className="center flex-col gap-2">
      <h4 className="font-bold uppercase text-gray-100 text-xl mb-2">{song.title}</h4>
      <h3 className="font-semibold text-base text-gray-400 mb-5">{song.artist}</h3>
    </div>
  );
};

export default PlayerDetails;

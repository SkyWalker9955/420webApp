import React from "react";
import ReactPlayer from "react-player";
import './ResponsivePlayer.css'

export default function ResponsivePlayer() {
  return (
    <div style={{ marginBottom: 30 }}>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/41VO58oG2E8"
        />
      </div>
    </div>
  );
}

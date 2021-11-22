import * as React from "react";
import "./home.css";
import ReactPlayer from "react-player";

export default function Home() {
    return (
        <div style={{ background: "white" }}>
            <div>Home</div>
            <ReactPlayer url="https://youtu.be/41VO58oG2E8" />
        </div>
    );
}

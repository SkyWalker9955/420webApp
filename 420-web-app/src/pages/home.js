import * as React from "react";
import "./home.css";
import ResponsivePlayer from "../components/ResponsivePlayer";

export default function Home() {
  return (
    <div style={{ background: "white" }}>
      <h1 style={{ padding: 50 }}>Meet the Department Head!</h1>
      <ResponsivePlayer />
      
      
    </div>
  );
}

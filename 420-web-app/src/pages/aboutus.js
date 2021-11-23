import * as React from 'react';
import selu from './pics/selu.jpg'
import envoc from './pics/slu_envoc_lab.jpg'
import './aboutus.css'
import { flexbox } from '@mui/system';
import ResponsivePlayer from "../components/ResponsivePlayer";

export default function AboutUs() {
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color:'rgb(68,68,68)'
      }}
    >
      <h1 style={{marginTop:30}}>A Bit About Us!</h1>

      <div style={{ padding: 30 }}>
        <img src={selu} height="375" width="800"/>
      </div>
      <div style={{ width: "900px", textAlign: "left", marginLeft:'auto', marginRight: 'auto' }}>
        <p>
          With 500+ students and the enrollment that has more than doubled over
          the past decade, Southeastern's highly-regarded Computer Science and
          Information Technology programs are recognized as a leader among and
          one of the state's fastest-growing computing and information
          technology programs.
        </p>
        <p>
          The Department of Computer Science is committed to preparing our
          students to be nationally competitive both in the workforce and in
          graduate studies. We focus on providing students with the skills and
          experience to prepare them for a career in technology. Our graduates
          have one of the highest starting salary in the State of Louisiana with
          an average of over $52,000 a year.
        </p>
      </div>
      <div style={{ padding: 30 }}>
        <img src={envoc} height="375" width="750" />
      </div>
      <h1>Highlights:</h1>
      <div style={{ width: "900px", textAlign: "left", marginLeft:'auto', marginRight: 'auto' }}>      
        <ul >
          <li>Offers concentrations with an emphasis on scientific, applied, and business.</li>
          <li>Data Science concentration will be offered starting in Fall 2020.</li>
          <li>MS in Data Science will be offered as a new discipline of study in ISAT in Fall 2020.</li>
          <li>2,000 IT jobs from private-public partnerships for our graduates.</li>
          <li>Graduates have an average starting salary of over $52,000.</li>
          <li>Offers a Masters Degree in Integrated Science and Technology with computer science and information technology concentrations.</li>
          <li>Provides opportunities to connect with faculty for undergraduate research.</li>
        </ul>
      </div>
      <h1 style={{ padding: 30 }}>Meet the Department Head!</h1>
      <p>Dr. John Burris</p>
      <ResponsivePlayer />
    </div>
  );
}
'use client';
import React, { useState } from "react";

const channels = [
  { id: 'About', label: 'About' },
  { id: 'Schedule', label: 'Schedule' },
  { id: 'Team', label: 'Team' },
  { id: 'Register', label: 'Register' },
  { id: 'Contact', label: 'Contact' },
];

export default function TvFrame({ children }) {
  const [staticOn, setStaticOn] = useState(false);
  const [channel, setChannel] = useState(0);
  const channelLabels = ['About', 'Schedule', 'Team', 'Register', 'Contact'];
  const channelIds = ['about', 'schedule', 'team', 'register', 'contact'];

  const handleChannelDial = (dir) => {
    let newChannel = channel + dir;
    if (newChannel < 0) newChannel = channelLabels.length - 1;
    if (newChannel >= channelLabels.length) newChannel = 0;
    setStaticOn(true);
    setChannel(newChannel);
    setTimeout(() => {
      setStaticOn(false);
      document.getElementById(channelIds[newChannel])?.scrollIntoView({ behavior: 'smooth' });
    }, 550);
  };

  return (
    <div className="tv-outer-frame photorealistic" style={{width:'100vw',height:'100vh',overflow:'hidden',margin:0,padding:0,position:'relative'}}>
      <div className="tv-content-crt">
        <div className="tv-curved-screen">
          {children}
          {staticOn && <div className="crt-static-overlay"></div>}
        </div>
        <div className="tv-channel-label">Channel: {channelLabels[channel]}</div>
        <div className="tv-dial-controls">
          <button className="tv-dial-btn" onClick={() => handleChannelDial(-1)} aria-label="Previous Channel">&#8634;</button>
          <button className="tv-dial-btn" onClick={() => handleChannelDial(1)} aria-label="Next Channel">&#8635;</button>
        </div>
      </div>
    </div>
  );
}

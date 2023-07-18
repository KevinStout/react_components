"use client";

import { useState } from "react";

interface ShareStateButtonProps {
  sharedCount: number;
  onClick: () => void;
}

function ShareStateButton(props: ShareStateButtonProps) {
  return (
    <div className="p-10">
      <button className="p-2 border-2 rounded-lg" onClick={props.onClick}>
        Increment Shared State
      </button>
      <p>Count: {props.sharedCount}</p>
    </div>
  );
}

export default ShareStateButton;

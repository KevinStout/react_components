"use client";

import { useState } from "react";
import ShareStateButton from "./ShareStateButton";

function SharedCountGroup() {
  const [sharedCount, setSharedCount] = useState({ sharedCount: 0 });

  function handleIncreaseSharedState() {
    setSharedCount({ sharedCount: sharedCount.sharedCount + 1 });
  }

  return (
    <div className="p-10">
      <ShareStateButton sharedCount={sharedCount.sharedCount} onClick={handleIncreaseSharedState} />
      <ShareStateButton sharedCount={sharedCount.sharedCount} onClick={handleIncreaseSharedState} />
    </div>
  );
}

export default SharedCountGroup;

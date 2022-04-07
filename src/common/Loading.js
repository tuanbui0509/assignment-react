import React from "react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex z-50">
      <div className="w-full h-full bg-black absolute opacity-20 right-0 left-0 bottom-0 top-0"></div>
      <div className="relative z-20 mx-auto my-auto">
        <img src="https://i.pinimg.com/originals/66/2c/36/662c363c9c9eef2fb2ef4ab3338dd77c.gif"
          className="rounded-full h-20 w-20"
        />
      </div>
    </div>
  );
}

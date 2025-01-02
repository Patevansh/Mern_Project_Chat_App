import React from "react";
import Search from "./Search";
import Users from "./users";
export default function Left() {
  return (
    <div className="w-[30%]  bg-black text-white">
      <h1 className="font-bold text-3x1 p-2 px-11">Chat</h1>
    <Search></Search>
    <hr />
    <Users></Users>
    </div>
  );
}

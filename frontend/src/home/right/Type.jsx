import React from "react";
import { BiSolidSend } from "react-icons/bi";
function Type() {
  return (
    <div className="flex space-x-1 text-center bg-slate-900 rounded-xl">
      <label className="h-13 w-[90%] px-4 py-5 input input-bordered flex items-center gap-2 rounded-xl">
        <input type="text" className="grow" placeholder="Write Message" />
      </label>
      <button><BiSolidSend className="size-8 hover:bg-slate-700 rounded-full" /></button>
    </div>
  );
}

export default Type;

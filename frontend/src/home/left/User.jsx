import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div className="">
          <h1 className="font-bold">Aman</h1>
          <span className="font-thin">Aman123@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default User;

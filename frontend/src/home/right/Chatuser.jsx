import React from "react";

function Chatuser() {
  return (
    <div className="h-[9vh] p-5 flex space-x-4 hover:bg-gray-600 duration-300 bg-gray-900">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">Aman</h1>
        <span className="text-sm">Online</span>
      </div>
    </div>
  );
}

export default Chatuser;

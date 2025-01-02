import React from 'react'
import { CgLogOut } from "react-icons/cg";
export default function Right() {
  return (
    <div className='w-[4%] bg-slate-950 text-white flex flex-col justify-end'>
      <div className="p-3">
            <form action="">
              <div className="flex space-x-3 justify-end">
              <button>
                <CgLogOut className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 justify-end" />
              </button>
              </div>
            </form>
          </div>
    </div>
  )
}
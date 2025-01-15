import React from "react";

const OtherUser = () => {
  return (
    <>
      <div className="flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
              alt="AvatarImage"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2 ">
            <p>Chetan</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default OtherUser;

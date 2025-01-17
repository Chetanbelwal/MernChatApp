import React from "react";

const Message = ({message}) => {
  return (
    // <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
          />
          {/* <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilePhoto  : selectedUser?.profilePhoto } /> */}
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50 text-white">12:45</time>
      </div>

      {/* <div
        className={`chat-bubble ${
          message?.senderId !== authUser?._id ? "bg-gray-200 text-black" : ""
        } `}
      >
        {message?.message}
      </div> */}
      <div className="chat-bubble bg-gray-200 text-black">
      {message?.message}
      </div>
    </div>
  );
};

export default Message;

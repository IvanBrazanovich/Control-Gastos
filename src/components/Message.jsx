import React from "react";

const Message = ({ message }) => {
  return (
    <div className="message container w-3/4 mx-auto border-l-4 border-red-700 uppercase my-10 font-black text-red-700 p-3 text-center text-xl">
      {message}
    </div>
  );
};

export default Message;

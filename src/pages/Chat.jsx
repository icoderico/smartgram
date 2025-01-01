import React from "react";
import Search from "../components/Search"
import ChatScreen from "../components/ChatScreen"
import Profile from "../components/Profile"

const Chat = () => {
  return <div className="flex">
    <div className="h-screen bg-[#F0F0F0] w-3/12">
      <Search/>
    </div>
    <div className="h-screen bg-white w-6/12">
      <ChatScreen/>
    </div>
    <div className="h-screen bg-[#F0F0F0] w-3/12 fixed right-0 top-0">
      <Profile/>
    </div>
  </div>;
};

export default Chat;

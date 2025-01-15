import React, { useState }  from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log("search");
  };
  const logoutHandler = () => {
    console.log("logout");
  };
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form
        onSubmit={searchSubmitHandler}
        action=""
        className="flex items-center gap-2"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered rounded-md"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn bg-zinc-700 text-white">
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers/>
      <div className="mt-2">
        <button onClick={logoutHandler} className="btn btn-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

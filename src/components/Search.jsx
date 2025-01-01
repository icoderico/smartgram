import React, { useState } from "react";
import useDebounce from "./useDebounce";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const contacts = [
    {
      name: "Lisa Roy",
      message: "Hi, are you coming Tomorrow?",
      image: "src/assets/53edc66922cb46d2770e0d27a2271dbd.jpg",
    },
    {
      name: "Jamie Taylor",
      message: "Nice one. Will do it tomorrow.",
      image: "src/assets/jamie.jpg",
    },
    {
      name: "Jason Roy",
      message: "That’s Great. I am Looking forward to having a great start.",
      image: "src/assets/jason.jpg",
    },
    {
      name: "Amy Frost",
      message: "Hi, will you start working on the chat app right now?",
      image: "src/assets/amy frost.jpg",
    },
    {
      name: "Paul Wilson",
      message: "See you tomorrow champ",
      image: "src/assets/paul.jpg",
    },
    {
      name: "Ana Williams",
      message: "??",
      image: "src/assets/ana williams.jpg",
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center bg-[#F0F0F0] p-4 border-b border-gray-300">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src="src/assets/8e2becda16e2f3abc85e162b63a8d214.jpg"
            alt="User Icon"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ml-4">
          <p className="font-medium text-lg">David Peters</p>
          <p className="text-sm text-gray-600">Senior Developer</p>
        </div>
      </div>

      <div className="bg-[#F0F0F0] p-4 border-b border-gray-300">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-[30px] focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="flex-1 overflow-y-hidden">
        <ul className="p-4 space-y-4">
          {filteredContacts.map(({ name, message, image }, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start">
                <p className="font-medium">{name}</p>
                <p className="text-sm text-gray-500">{message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;

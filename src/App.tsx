import "./App.css";

import NavigationIcon from "@components/navigation/NavigationIcon";
import { IoSearchSharp } from "react-icons/io5";
import { RiHome6Line } from "react-icons/ri";
import { LuSquareLibrary } from "react-icons/lu";
import { LuSquareUser } from "react-icons/lu";

function App() {
  return (
    <div className="flex h-full w-full flex-col bg-gray-300">
      <div id="main" className="flex-1 bg-purple-400">
        main
      </div>

      <div id="navigation" className="bg-blue-400 px-4 py-3">
        <div className="h-full w-full bg-red-300 flex justify-between gap-2 ">
          <NavigationIcon icon={RiHome6Line} text="Trang chủ" />
          <NavigationIcon icon={IoSearchSharp} text="Tra cứu" />
          <NavigationIcon icon={LuSquareLibrary} text="Thư viện" />
          <NavigationIcon icon={LuSquareUser} text="Tài khoản" />
        </div>
      </div>
    </div>
  );
}

export default App;

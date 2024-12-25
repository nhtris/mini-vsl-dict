import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import NavigationIcon from "@components/navigation/NavigationIcon";
import { IoSearchSharp } from "react-icons/io5";
import { RiHome6Line } from "react-icons/ri";
import { LuSquareLibrary } from "react-icons/lu";
import { LuSquareUser } from "react-icons/lu";
import HomePage from "@pages/home/HomePage";
import SearchingPage from "@pages/searching/SearchingPage";
import LibraryPage from "@pages/library/LibraryPage";
import AccountPage from "@pages/profile/ProfilePage";

function App() {
  return (
    <div className="flex h-full w-full flex-col">
      <BrowserRouter>
        <div id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchingPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>

        <div id="navigation" className=" px-4 py-1.5">
          <div className="flex h-full w-full justify-between gap-2">
            <NavigationIcon icon={RiHome6Line} text="Trang chủ" to={"/"} />
            <NavigationIcon icon={IoSearchSharp} text="Tra cứu" to="/search" />
            <NavigationIcon
              icon={LuSquareLibrary}
              text="Thư viện"
              to="/library"
            />
            <NavigationIcon
              icon={LuSquareUser}
              text="Tài khoản"
              to="/account"
            />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { HiOutlineLogout, HiOutlineDocumentText } from "react-icons/hi";
import { BsChatLeftDots } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { PiTiktokLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
// import logo from '../assets/logos/image.png'
// import useUser from "../hooks/useUser";
import useSidebar from "../hooks/useSidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function Sidebar({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setUser } = useUser();

  //   const { user, setUser } = useUser();
  // const [isOpen, setIsOpen] = useState(true)
  // const [menuHidden, setMenuHidden] = useState(false)
  const { isOpen, setIsOpen, menuHidden, setMenuHidden } = useSidebar();

  const logout = () => {
    // localStorage.removeItem("jwt_token");
    // setUser(null);

    navigate("/");
    setUser("");
  };

  return (
    <div className="flex h-full w-full bg-primary fixed">
      <div
        className={`${isOpen ? "w-72" : "w-20"} ${
          menuHidden
            ? `-translate-x-full  overflow-hidden p-0 scale-x-0  ${
                isOpen ? "-mr-72" : "-mr-20"
              }`
            : "translate-x-0"
        }    duration-300 h-screen bg-primary flex flex-col justify-between relative px-4 pt-8`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            !isOpen && "rotate-180"
          } duration-300 absolute cursor-pointer -right-[11px] top-9 w-6 border-2 pl-[1px]  h-6 flex justify-center items-center text-primary rounded-full bg-white border-primary`}
        >
          <BiChevronLeft size={23} />
        </div>

        <div className="flex flex-col gap-x-4  ">
          <div
            className={` w-14 h-14 overflow-hidden relative duration-300 rounded-md p-[2px] mx-auto ${
              isOpen && "scale-150"
            }`}
          >
            {/* <img src={logo} /> */}
            <h1 className="text-white font-bold">Logo </h1>
          </div>

          <ul className="pt-6 space-y-1">
            <li>
              <Link
                to="/chat"
                className={`flex gap-x-2 p-2 items-center ${
                  pathname === "/chat" &&
                  "bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
                } hover:bg-[rgba(0,0,0,0.2)] rounded-md`}
              >
                <BiHomeAlt size={24} color={"#fff"} />
                <div
                  className={`${
                    !isOpen && "hidden"
                  } duration-300 text-white text-sm font-semibold`}
                >
                  Home
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/instagram"
                className={`flex gap-x-2 p-2 items-center ${
                  pathname === "/instagram" &&
                  "bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
                } hover:bg-[rgba(0,0,0,0.2)] rounded-md`}
              >
                <GrInstagram size={24} color={"#fff"} />
                <div
                  className={`${
                    !isOpen && "hidden"
                  } duration-300 text-white text-sm font-semibold`}
                >
                  Instagram
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/tiktok"
                className={`flex gap-x-2 p-2 items-center ${
                  pathname === "/tiktok" &&
                  "bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
                } hover:bg-[rgba(0,0,0,0.2)] rounded-md`}
              >
                <PiTiktokLogo size={24} color={"#fff"} />
                <div
                  className={`${
                    !isOpen && "hidden"
                  } duration-300 text-white text-sm font-semibold`}
                >
                  Tiktok
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/enquiry"
                className={`flex gap-x-2 p-2 items-center ${
                  pathname === "/enquiry" &&
                  "bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
                } hover:bg-[rgba(0,0,0,0.2)] rounded-md`}
              >
                <FiYoutube size={23} color={"#fff"} />
                <div
                  className={`${
                    !isOpen && "hidden"
                  } duration-300 text-white text-sm font-semibold`}
                >
                  Youtube
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/analytics"
                className={`flex gap-x-2 p-2 items-center ${
                  pathname === "/analytics" &&
                  "bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
                } hover:bg-[rgba(0,0,0,0.2)] rounded-md`}
              >
                <FiSettings size={25} color={"#fff"} />
                <div
                  className={`${
                    !isOpen && "hidden"
                  } duration-300 text-white text-sm font-semibold`}
                >
                  Settings
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="h-32 w-32 mt-auto bg-white"></div> */}

        <li
          onClick={logout}
          className="flex gap-x-2 p-2 mb-4 items-center  hover:bg-[rgba(0,0,0,0.2)] rounded-md"
        >
          <HiOutlineLogout size={25} color={"#fff"} />
          <div
            className={`${
              !isOpen && "hidden"
            } duration-300 text-white text-sm font-semibold`}
          >
            Logout
          </div>
        </li>
      </div>
      <div className="h-screen bg-[#eaeaea] w-screen overflow-scroll">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;


import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaRegBookmark } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";
const inter = Inter({subsets : ["latin"]})



interface TwitterSideBarButton {
  title: string,
  icon: React.ReactNode;
}
const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />
    ,
  },
  {
    title: "Messages",
    icon: <HiOutlineEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    title: "Profile",
    icon: <CiUser />,
  },
  {
    title: "Twitter Blue",
    icon: <GoHome />,
  },
  
]

export default function Home() {
  return (
    <div className="{inter.className">

      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 justify-start pt-8 px-5">
          <div className="text-4xl hover:bg-gray-800 rounded-full p-4 h-fit cursor-pointer transition-all w-fit">
            <BsTwitter />
          </div>

          <div className="mt-4 text-2xl  pr-4 ">
            <ul>
              {sideBarMenuItems.map(item => <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer" key={item.title}><span>{item.icon}</span> <span>{item.title}</span></li>)}
            </ul>

            <div className="mt-5 font-semibold">
            <button className="bg-[#1d9bf0] p-4 rounded-full w-full  mx-4  text-lg">Tweet</button> 
            </div>

          </div>

        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border-gray-400">
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>


    </div>

  )
}

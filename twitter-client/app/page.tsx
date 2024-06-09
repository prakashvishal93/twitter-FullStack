
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaRegBookmark } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Inter,Quicksand } from "next/font/google";
import FeedCard from "@/components/FeedCard";
import { FaMoneyBill } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";



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
    title: "Premium",
    icon: <FaMoneyBill />
    ,
  },
  {
    title: "Profile",
    icon: <CiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />
    ,
  },
  
]

export default function Home() {
  return (
    <div className="{inter.className">

      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-20">
          <div className="text-2xl hover:bg-gray-800 rounded-full p-4 h-fit cursor-pointer transition-all w-fit">
            <BsTwitter />
          </div>

          <div className="mt-1 text-1xl  pr-4 ">
            <ul>
              {sideBarMenuItems.map(item => <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer" key={item.title}><span className="text-3xl">{item.icon}</span> <span>{item.title}</span></li>)}
            </ul>

            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] px-3 rounded-full w-full text-lg py-2 font-semibold">Tweet</button> 
            </div>

          </div>

        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>


    </div>

  )
}

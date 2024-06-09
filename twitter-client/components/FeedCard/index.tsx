
import React from 'react'
import Image from 'next/image'
import { TbMessageCircle } from "react-icons/tb";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";



const FeedCard: React.FC = () => {
    return (
        <div className='border border-r-0 border-l-0 border-b-0  border-gray-600 p-5 hover:bg-slate-900 transition-allgap cursor-pointer'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                    <Image src="https://avatars.githubusercontent.com/u/44976328?v=4" alt='user-image' height={50} width={50} />
                </div>
                <div className='col-span-11'>
                    <h5>Vishal Prakash</h5>
                    <p>Thanks Ashok!

                        Ashok was the first person to join the Tesla AI/Autopilot team and ultimately rose to lead all AI/Autopilot software.

                        Without him and our awesome team, we would just be another car company looking for an autonomy supplier that doesn’t exist.

                        Btw, I never suggested that he say anything and I had no idea he wrote this until I saw it 10 mins ago!</p>

                    <div className='flex justify-between mt-5 text-xl items-center pr-2 w-[90%]'>
                        <div>
                            <TbMessageCircle />
                        </div>
                        <div>
                        <FaRetweet />
                        </div>
                        <div>
                        <FaRegHeart />
                        </div>
                        <div>
                        <MdOutlineFileUpload />
                        </div>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default FeedCard;

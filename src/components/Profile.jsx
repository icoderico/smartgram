import { Search } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Video } from "lucide-react";
import { User } from "lucide-react";
import { Heart } from "lucide-react";
import { File } from "lucide-react";
import { SquarePlay } from "lucide-react";
import { Music } from "lucide-react";
import { Image } from "lucide-react";


const Profile=()=>{
    return (
        <>
            <div className="py-[35px] px-[25px]">
                <div className="flex rounded-[45px] px-[8px] gap-[7px] items-center bg-white">
                    <Search size={23} color={"#CDCDCD"}/>
                    <input type="text" className="w-[85%] py-[5px] px-[8px] outline-none text-[15px]" placeholder="Search Here..."/>
                </div>
                <div className="flex flex-col items-center py-[15px]">
                    <div className="w-[100px] h-[100px] bg-[url('./assets/profile.jpg')] bg-no-repeat bg-cover bg-center  rounded-full">

                    </div>
                    <div className="text-center">
                        <h3 className="text-[20px] font-semibold">Dianne Jhonson</h3>
                        <p className="text-[15px]">Junior Developer</p>
                    </div>
                </div>
                <div className="flex py-[15px]">
                    <div className="w-1/2 flex flex-col items-center gap-[7px] border-r-2 border-slate-300">
                        <div className="p-[12px] bg-[#DCE8FF] rounded-full">
                            <MessageCircle color={"#4399FF"} size={33}/>
                        </div>
                        <p>Chat</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center gap-[7px]">
                        <div className="p-[12px] bg-[#DCE8FF] rounded-full">
                            <Video color={"#4399FF"} size={33}/>
                        </div>
                        <p>Video Call</p>
                    </div>
                </div>
                <div className="flex py-[15px]">
                    <div className="w-1/2 flex gap-[7px] items-center">
                        <User size={22}/>
                        <p className="text-[14.5px]">View Friends</p>
                    </div>
                    <div className="w-1/2 flex gap-[7px] items-center">
                        <Heart size={22}/>
                        <p className="text-[14.5px]">Add to Favourites</p>
                    </div>
                </div>
                <div className="py-[15px]">
                    <h3 className="text-[16.5px] font-semibold">Attachments</h3>
                    <div className="py-[15px] flex justify-between">
                        <div className="rounded-[10px] w-1/5 flex flex-col items-center bg-[#DCE8FF] p-[8px]">
                            <File color="#699BF7" size={26}/>
                            <span className="text-[#699BF7] font-semibold text-[13px]">PDF</span>
                        </div>
                        <div className="rounded-[10px] w-1/5 flex flex-col items-center bg-[#DCE8FF] p-[8px]">
                            <SquarePlay color="#699BF7" size={26}/>
                            <span className="text-[#699BF7] font-semibold text-[13px]">VIDEO</span>
                        </div>
                        <div className="rounded-[10px] w-1/5 flex flex-col items-center bg-[#DCE8FF] p-[8px]">
                            <Music color="#699BF7" size={26}/>
                            <span className="text-[#699BF7] font-semibold text-[13px]">MP3</span>
                        </div>
                        <div className="rounded-[10px] w-1/5 flex flex-col items-center bg-[#DCE8FF] p-[8px]">
                            <Image color="#699BF7" size={26}/>
                            <span className="text-[#699BF7] font-semibold text-[13px]">IMAGE</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="border-2 border-[#4399FF] text-[#4399FF] py-[5px] w-[40%] rounded-[25px] font-semibold text-[15px]">View All</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile
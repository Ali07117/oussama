'use client'
import React, { useState } from 'react';
import SidebarLinks from './SidebarLinks';

function MobileSidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
      };
    return (
        <div
  className={`py-[24px] bg-[#FFFFFF] h-[100%] mobile-sidebar hidden sidebar-container z-[21] flex flex-col justify-between duration-500 px-[16px]
    ${showSidebar ? "w-[300px]" : "w-[70px]"}
    absolute top-[0px] left-[0px]
    xl:static xl:top-auto xl:left-auto`}
>
        <div className='overflow-y-auto overflow-x-hidden scrollnone'>

        
            {/* <p className='text-[black] font-[Roboto]'>AA aa BB bb CC cc</p> */}
            <div className='flex items-center h-[80px] w-[100%] gap-[] pl-[16px]'>
                <img className=' cursor-pointer min-h-[20px] max-h-[20px] min-w-[20px] max-w-[20px]' src="/images/navicon.svg" alt="" onClick={toggleSidebar} />
                <img className='pl-[20px] web-logo' src="/images/logo.svg" alt="" />
                <div className='w-[43px] ml-[15px] h-[20px] flex font-[500] text-[14px] py-[2px] px-[8px] items-center justify-center rounded-[4px] text-[white] font-[Roboto] bg-[#6400CD]'>v1.0</div>
            </div>
            <div className='flex flex-col'>
                <SidebarLinks icon={"dashboard-icon"} name={"Dashboard"} />
                <div className='gap-[24px] p-[16px] flex items-center cursor-pointer bg-[]'>
                    <img className='min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px]' src="/images/orders-icon.svg" alt="" />
                    <p className='font-[Inter] sidebar-text font-[700] text-[16px] text-[#3A383F] text-nowrap'>Orders Details</p>
                    <p className=' pl-[24px] text-[#004299] font-[700] font-[Roboto] text-[#004299] text-[16px]'>+99</p>
                </div>
                <SidebarLinks icon={"manage-users-icon"} name={"Manage Users"} />
                <SidebarLinks icon={"manage-apis-icon"} name={"Manage APIs"} />
                <SidebarLinks icon={"manage-products-icon"} name={"Manage Products"} />
                <SidebarLinks icon={"Charges-icon"} name={"Charges"} />
                <SidebarLinks icon={"Notifications-icon"} name={"Notifications"} />
            </div>
            </div>
            <div className='flex flex-col bg-[]'>
            <div className='gap-[24px] bg-[]  p-[16px] flex items-center cursor-pointer bg-[]'>
                    <img className='min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px]' src="/images/settingicon.svg" alt="" />
                    <p className={`font-[Roboto] font-[400] sidebar-text text-[16px] text-nowrap text-[#3A383F] ${showSidebar ? "" : "hidden" }`}>Setting</p>
    
                </div>
                <div className='gap-[24px] p-[16px] flex items-center cursor-pointer bg-[]'>
                    <img className='min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px]' src="/images/logouticon.svg" alt="" />
                    <p className={`font-[Roboto] font-[400] sidebar-text text-[16px] text-[#3A383F] ${showSidebar ? "" : "hidden" } `}>Log out</p>    
                </div>
                <div className={`py-[16px] mt-[20px] px-[24px] bg-[#F9F9FB] rounded-[16px]  ${showSidebar ? "" : "hidden" }`}>
                    <div className='flex items-center justify-between'>
                        <p className='text-[16px] sidebar-text font-[700] font-[Inter] text-nowrap text-[#27252E]'>Oussama Ben</p>
                        <p className='text-[14px] font-[400] font-[Inter] text-nowrap text-[#605D67]'>Admin</p>
                    </div>
                    <div className='flex gap-[8px] mt-[15px]'>
                        <p className='text-[14px] font-[400] font-[Inter] text-nowrap text-[#605D67]'>Last Login :</p>
                        <p className='text-[16px] sidebar-text font-[700] font-[Inter] text-nowrap text-[#27252E]'>15:17 09.06.2025</p>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileSidebar;

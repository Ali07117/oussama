'use client'
import AddModerator from '@/app/components/AddModerator';
import DeletePopup from '@/app/components/DeletePopup';
import MobileSidebar from '@/app/components/MobileSidebar';
import Pagination from '@/app/components/Pagination';
import Sidebar from '@/app/components/Sidebar';
import UserTable from '@/app/components/UserTable';
import React, { useState } from 'react';

function page() {
  const [showLayer, setShowLayer] = useState(false);
  const [showLayer2, setShowLayer2] = useState(false);
  const [showLayer3, setShowLayer3] = useState(false);
  
  return (
    <div className='h-[100vh]  flex bg-[#FFFFFF]'>
    <div className={` ${showLayer ? "" : "hidden"} add-moderator-layer h-[100%] w-[100%] flex items-center justify-center absolute left-[0px] top-[0px] bg-[rgba(0,0,0,0.5)] z-[22] `}>
      <AddModerator action={"Confirm"} onClose={() => setShowLayer(false)}/>
    </div>
    <div className={` ${showLayer3 ? "" : "hidden"} add-moderator-layer h-[100%] w-[100%] flex items-center justify-center absolute left-[0px] top-[0px] bg-[rgba(0,0,0,0.5)] z-[22] `}>
      <AddModerator action={"Update"} onClose={() => setShowLayer3(false)}/>
    </div>
    <div className={` ${showLayer2 ? "" : "hidden"} add-moderator-layer h-[100%] w-[100%] flex items-center justify-center absolute left-[0px] top-[0px] bg-[rgba(0,0,0,0.5)] z-[22] `}>
      <DeletePopup onClose2={() => setShowLayer2(false)}/>
    </div>
    
      <Sidebar/>
      <MobileSidebar/>
      <div className='rightbar overflow-y-auto h-[85vh]  pl-[80px] pt-[90px] flex-1 text-[black] bg-[]'>
        
        <h1 className='font-[mainfont] font-[700] manage-moderators-text text-[32px] text-[#191B23]'>Manage Moderators</h1>
        <p className='w-[560px] font-[mainfont] leading-[130%] manage-moderators-para text-[18px] text-[#404145]'>Add or remove moderators, update roles, and manage salaries. This section is restricted to administrative use only.</p>
        <div className=' filter-container bg-[] mt-[30px] flex justify-between items-center'>
        <div className='flex items-center filter-inner-container'>

      
            <div className="search-bar-box flex items-center gap-[10px] h-[28px] w-[275px] rounded-[9.2px] searchbar p-[12px] border-[0.81px]">
                <img src="/images/searchicon.svg" alt="" />
                <input className='bg-transparent font-[mainfont] w-[100%] text-[14px] outline-none border-none text-[#696969] placeholder-[#696969] text-[14px]' type="search" name="" id="" placeholder='Search' />
            </div>
            <div className='flex bg-[] filter-inner-container-box-2 items-center gap-[12px] ml-[40px]'>
            <div className=' advanced-container cursor-pointer rounded-[9px] h-[28px] px-[10px] filterbar flex items-center justify-center gap-[3px]'>
            <img className='h-[14px] w-[14px]' src="/images/calendaricon.svg" alt="" />
            <p className='font-[600] font-[mainfont] filter-text text-[#000000] text-[16px] tracking-wider'>Today</p>
            </div>
            <div className=' today-container cursor-pointer rounded-[9px] h-[28px] px-[10px] filterbar flex items-center justify-center gap-[5px]'>
            <p className='font-[600] font-[mainfont] text-[#000000] filter-text text-[16px] tracking-wider'>Advanced Filters</p>
            <img className='h-[7px] mt-[2px] ' src="/images/downarrowicon.svg" alt="" />
            </div>
            
            </div>
            </div>
            
            <div className=' add-moderator-container rounded-[9px] h-[28px] px-[10px] mr-[40px] filterbar flex items-center justify-center gap-[3px] cursor-pointer' onClick={() => setShowLayer(true)}>
            <img className='h-[14px] add-moderator-img w-[14px]' src="/images/plusicon.svg" alt="" />
            <p className='font-[600] font-[mainfont] filter-text text-[#000000] text-[16px] tracking-wider'>Add Moderator</p>
            </div>
        </div>
        <UserTable onClose3={() => setShowLayer3(true)} onClose2={() => setShowLayer2(true)}/>

      </div>
      <div className=" absolute bottom-[40px] right-[40px] "> 
  <Pagination/>
 </div>

    </div>
    
  );
}

export default page;

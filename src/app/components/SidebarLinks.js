import React from 'react';

function SidebarLinks(props) {
  return (
    <div className='gap-[24px] p-[16px] flex items-center cursor-pointer bg-[]'>
      <img className='min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px]' src={`/images/${props.icon}.svg`} alt="" />
      <p className='font-[Inter] sidebar-text font-[700] text-nowrap text-[16px] text-[#3A383F]'>{props.name}</p>
    </div>
  );
}

export default SidebarLinks;

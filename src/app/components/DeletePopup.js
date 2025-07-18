import React from 'react';

function DeletePopup({onClose2}) {
  return (
    <div className='bg-[#EAEAEA] relative w-[280px] pt-[20px] pb-[10px] px-[12px] rounded-[8px]'>
    <img className='absolute right-[10px] cursor-pointer top-[10px]' src="/images/crossicon.svg" alt="" onClick={onClose2} />
    <p className='font-[poppins] font-[700] text-[15px] text-[#000000]'>Delete Your Account?</p>
    <p className='text-[#434343] font-[Poppins] font-[400] text-[13px] mt-1'>This action cannot be undone. All data, including access and history, will be permanently removed.</p>
    <div className='flex items-center justify-center gap-[15px] mt-[15px]'>
            <button className='bg-[#D4FDD7] border-none outline-none rounded-[8px] py-[5px] px-[10px] text-[#0D4F15] text-[13px] font-[600] font-[Poppins]'>Confirm</button>
            <button className='bg-[rgba(255,0,0,0.2)] border-none outline-none rounded-[8px] py-[5px] px-[10px] text-[#DB0D0A] text-[13px] font-[600] font-[Poppins]' onClick={onClose2}>Cancel</button>
            </div>
    </div>
  );
}

export default DeletePopup;

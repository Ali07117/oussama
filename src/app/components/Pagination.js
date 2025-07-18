import React from 'react';

function Pagination() {
  return (
    <>
        <div className="flex items-center justify-between gap-4 mt-6 text-sm text-gray-700">
  
  
            {/* Show Results Dropdown */}
  <div className="flex items-center gap-2">
    <span className='font-[mainfont] show-result-text text-[14px] font-[500] text-[#8C8C8C]'>Show result:</span>
    <div className="relative paginatio-select">
      <select className="appearance-none outline-none border border-[#F2F2F2] rounded-[6px] px-[12px] py-[8px] pr-6 text-[16px] font-[500] text-[#191B23] font-[mainfont] ">
        <option>6</option>
        <option>10</option>
        <option>20</option>
        <option>50</option>
      </select>
      {/* Custom down arrow */}
      <img
        src="/images/showresult-downarrow.svg"
        alt=""
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-[10px] "
      />
    </div>
  </div>

  {/* Pagination */}
  <div className="flex items-center gap-1">
    <button className="px-2 py-1 hover:opacity-80">
      <img src="/images/showresult-leftarrow.svg" alt="prev" className="w-[6px]" />
    </button>
    <button className=" text-[#696969] px-3 py-1 rounded hover:bg-[#F2F2F2]">1</button>
    <button className=" text-[#696969] px-3 py-1 rounded bg-[#F2F2F2] font-semibold">2</button>
    <button className=" text-[#696969] px-3 py-1 rounded hover:bg-[#F2F2F2]">3</button>
    <button className=" text-[#696969] px-3 py-1 rounded hover:bg-[#F2F2F2]">4</button>
    <span className="px-2 py-1">...</span>
    <button className="px-3 py-1 rounded text-[#696969] hover:bg-[#F2F2F2]">20</button>
    <button className="px-2 py-1 hover:opacity-80">
      <img src="/images/showresult-leftarrow.svg" alt="next" className="w-[7px] rotate-[180deg]" />
    </button>
  </div>
        </div>
    </>
  );
}

export default Pagination;

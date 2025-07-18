'use client'
import React, { useState } from 'react';
import SimpleCheckbox from './SimpleCheckbox';
import Input from './Input';

function AddModerator({ onClose, action }) {
    const checkboxItems = [
        "Label Tag",
        "Storage Audit",
        "3D Logo",
        "Ribbon",
        "Hot Foil Machine",
        "Tissue Paper",
        "UV Printing",
        "Exit Logistics",
        "Embroidery Printing",
        "Carton Packaging",
        "testdff",
        "bbbbbbbbb",
    ];
    const moderatorTitle = [
        "Packaging Specialist",
        "Storage Specialist",
        "Print technician",
        "Dispatch Preparer",
    ];

    const [checkedStates, setCheckedStates] = useState(
        checkboxItems.reduce((acc, label) => ({ ...acc, [label]: false }), {})
    );

    const toggleCheckbox = (label) => {
        setCheckedStates((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    return (
        <div className="w-[437px] add-moderator-container relative rounded-[8px] bg-[#EAEAEA] py-[20px] px-[15px] space-y-4">
        <img className='absolute right-[10px] cursor-pointer top-[10px]' src="/images/crossicon.svg" alt="" onClick={onClose} />
            <div>
                <p className="font-[Poppins] text-[15px] font-[700] text-[#000000]">Grant Page Access</p>
                <p className="font-[Poppins] text-[13px] font-[400] text-[#434343]">
                    Select the pages this moderator can manage
                </p>
            </div>

            <div className="grid grid-cols-2 gap-y-3  moderator-container-check-box">
                {checkboxItems.map((label) => (
                    <label key={label} className="flex items-center gap-2 cursor-pointer">
                        <SimpleCheckbox
                            isChecked={checkedStates[label]}
                            onChange={() => toggleCheckbox(label)}
                        />
                        <span className="font-[Poppins] text-[14px] font-[500] text-[#1A1A1A]">{label}</span>
                    </label>
                ))}
            </div>
            <div className="">
                <Input label="Full Name" placeholder="Example : Samira" />
                <Input label="E-mail" placeholder="Example : samira@gmail.com" type="email" />
                <Input label="Password" placeholder="Example : 123456789" type="password" />
                <div className="grid grid-cols-5 gap-2 items-end flex items-center">
                    {/* 80% input (4/5 columns) */}
                    <div className="col-span-4 col-span-3-sm">
                        <Input
                            label="Salary"
                            placeholder="3000.00"
                            type="number"
                        />
                    </div>

                    {/* 20% select (1/5 column) */}
                    <div className="relative w-full col-span-2-sm">
                        <select className="appearance-none outline-none mt-2 w-full h-[34px] border border-black rounded-[7px] px-[13px] text-[13px] text-[#7E7E7E] pr-10 bg-white">
                            <option>DH</option>
                            <option>USD</option>
                            <option>PKR</option>
                        </select>
                        <img
                            src="/images/select-main-icon.svg"
                            alt="arrow"
                            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/4 w-4 h-4"
                        />
                    </div>
                </div>
            </div>
            <p className='font-[700] font-[Poppins] text-[15px] text-[#000000] mt-[20px]'>Moderator Title</p>
            <div className="grid grid-cols-2 gap-y-3 moderator-container-check-box">
                {moderatorTitle.map((label) => (
                    <label key={label} className="flex items-center gap-2 cursor-pointer">
                        <SimpleCheckbox
                            isChecked={checkedStates[label]}
                            onChange={() => toggleCheckbox(label)}
                        />
                        <span className="font-[Poppins] text-[14px] font-[500] text-[#1A1A1A]">{label}</span>
                    </label>
                ))}
            </div>
            <div className='flex add-moderator-button-container justify-between'>
            <div className='empty-div'></div>
            <div className='flex items-center gap-[15px] mt-[30px]'>
            <button className='bg-[#D4FDD7] border-none outline-none rounded-[8px] py-[5px] px-[10px] text-[#0D4F15] text-[13px] font-[600] font-[Poppins]'>{action}</button>
            <button className='bg-[rgba(255,0,0,0.2)] border-none outline-none rounded-[8px] py-[5px] px-[10px] text-[#DB0D0A] text-[13px] font-[600] font-[Poppins]' onClick={onClose}>Cancel</button>
            </div>
            </div>
        </div>
    );
}

export default AddModerator;

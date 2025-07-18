'use client'
import { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";

// components/UserTable.js
export default function UserTable({ onClose2, onClose3 }) {
    const [selectedRows, setSelectedRows] = useState([]);
    const [menuOpenIndex, setMenuOpenIndex] = useState(null);
    const users = [
        {
            name: "Youssef Sbai",
            qcPassRate: "100%",
            productsHandled: 107,
            productsLate: 0,
            avgTime: "12 min",
            moderatorType: "Packaging Specialist",
            badgeColor: "bg-[#ECFDF3] text-[#037847]",
            badgeCircle: "bg-[#14BA6D]",
            lastActivity: "2024-06-10 14:30",
        },
        {
            name: "Oussama Bouzaidi",
            qcPassRate: "100%",
            productsHandled: 72,
            productsLate: 0,
            avgTime: "17 min",
            moderatorType: "Print Technician",
            badgeColor: "bg-[rgba(38,109,240,0.1)] text-[#004299]",
            badgeCircle: "bg-[#004299]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Nabila Harmach",
            qcPassRate: "95%",
            productsHandled: 115,
            productsLate: 5,
            avgTime: "24 min",
            moderatorType: "Storage Specialist",
            badgeColor: "bg-[rgba(212,124,22,0.1)] text-[#D47C16]",
            badgeCircle: "bg-[#D47C16]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Samira galouch",
            qcPassRate: "98%",
            productsHandled: 99,
            productsLate: 2,
            avgTime: "09 min",
            moderatorType: "Packaging Specialist",
            badgeColor: "bg-[rgba(236,253,243,1)] text-[#037847]",
            badgeCircle: "bg-[#14BA6D]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
        {
            name: "Jerome Bell",
            qcPassRate: "100%",
            productsHandled: 97,
            productsLate: 0,
            avgTime: "34 min",
            moderatorType: "Dispatch Preparer",
            badgeColor: "bg-[rgba(100,0,205,0.1)] text-[#6400CD]",
            badgeCircle: "bg-[#6400CD]",
            lastActivity: "2024-06-09 14:30",
        },
    ];
    const toggleRow = (index) => {
        setSelectedRows((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };


    return (
        <div className="mr-[40px] mt-[50px] overflow-auto h-[100%]  bg-[]">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white  rounded-lg text-sm text-left">
                    <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
                        <tr className="border-[none]">
                            <th className="px-4 py-3">
                                <CustomCheckbox
                                    isChecked={selectedRows.length === users.length}
                                    onChange={() => {
                                        if (selectedRows.length === users.length) {
                                            setSelectedRows([]);
                                        } else {
                                            setSelectedRows(users.map((_, i) => i));
                                        }
                                    }}
                                />
                            </th>
                            <th className="px-4 py-3 font-[Inter] font-[500] text-[12px] text-[#667085]"><span className="flex items-center gap-1 text-nowrap">User Name <img src="/images/tabledownarrow.svg" alt="" /></span></th>
                            <th className="px-4 py-3 font-[Inter] font-[500] text-[12px] text-[#667085]"><span className="flex items-center gap-1 text-nowrap">QC Pass Rate <img src="/images/tabledownarrow.svg" alt="" /></span></th>
                            <th className="px-4 py-3 font-[Inter] font-[500] text-[12px] text-[#667085]"><span className="flex items-center gap-1 text-nowrap">Products Handled/Day <img src="/images/tabledownarrow.svg" alt="" /></span></th>
                            <th className="px-4 py-3 font-[Inter] font-[500] text-[12px] text-[#667085]"><span className="flex items-center gap-1 text-nowrap">Products Late <img src="/images/tabledownarrow.svg" alt="" /></span></th>
                            <th className="px-4 py-3 font-[Inter] font-[500] text-[12px] text-[#667085]"><span className="flex items-center gap-1 text-nowrap">Avg. Time per Task <img src="/images/tabledownarrow.svg" alt="" /></span></th>
                            <th className="px-4 py-3 font-[Inter] font-[500] text-[12px] text-[#667085]"><span className="flex items-center gap-1 text-nowrap">Moderator Type <img src="/images/tabledownarrow.svg" alt="" /></span></th>
                            <th className="px-4 py-3 font-[Inter] font-[500] text-[12px] text-[#667085]"><span className="flex items-center gap-1 text-nowrap">Last Activity <img src="/images/tabledownarrow.svg" alt="" /></span></th>
                            <th className="px-2 py-3 font-[Inter] font-[500] text-[12px] text-[#667085]"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {users.map((user, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="px-4 py-3">
                                    <CustomCheckbox
                                        isChecked={selectedRows.includes(idx)}
                                        onChange={() => {
                                            setSelectedRows((prev) =>
                                                prev.includes(idx)
                                                    ? prev.filter((i) => i !== idx)
                                                    : [...prev, idx]
                                            );
                                        }}
                                    />
                                </td>
                                <td className="px-4 py-3 font-[Inter] text-[14px] font-[500] text-[#292D32] text-nowrap">{user.name}</td>
                                <td className="px-4 py-3 font-[Inter] text-[14px] font-[400] text-[#667085] text-nowrap">{user.qcPassRate}</td>
                                <td className="px-4 py-3 font-[Inter] text-[14px] font-[400] text-[#667085] text-nowrap">{user.productsHandled}</td>
                                <td className="px-4 py-3 font-[Inter] text-[14px] font-[400] text-[#667085] text-nowrap">{user.productsLate}</td>
                                <td className="px-4 py-3 font-[Inter] text-[14px] font-[400] text-[#667085] text-nowrap">{user.avgTime}</td>
                                <td className="px-4 py-3 flex">
                                    <span className={`px-2 py-1 flex items-center gap-[4px] rounded-full text-nowrap text-xs font-medium ${user.badgeColor}`}>
                                        <div className={`min-h-[6px] min-w-[6px] max-h-[6px] max-w-[6px]  rounded-[50%] bg-[red] ${user.badgeCircle}`}></div>{user.moderatorType}
                                    </span>
                                </td>
                                <td className="px-4 py-3 font-[Inter] text-[14px] font-[400] text-nowrap text-[#667085]">{user.lastActivity}</td>
                                {/* <td className="px-2 py-3 "><img src="/images/tabledots.svg" alt="" /></td> */}
                                <td className="px-2 py-3 relative">
                                    <img
                                        src="/images/tabledots.svg"
                                        alt=""
                                        className="cursor-pointer bg-[] max-h-[12px] min-h-[12px] max-w-[12px] min-w-[12px]"
                                        onClick={() => setMenuOpenIndex(menuOpenIndex === idx ? null : idx)}
                                    />

                                    {menuOpenIndex === idx && (
                                        <div className="absolute top-[-50%] right-[30px] mt-2 mb-1 bg-[#D9D9D9] z-20 min-h-[70px] min-w-[74px] pt-[5px] pr-[10px] pl-[5px] pb-[5px] rounded-[8px]">
                                            {/* Edit */}
                                            <span
                                                className="cursor-pointer flex items-center gap-[1px]"
                                                onClick={() => {
                                                    // handleEdit(user)
                                                    setMenuOpenIndex(null);
                                                }}
                                            >
                                            <span className="flex items-center gap-[1px]" onClick={onClose3}>
                                                <img src="/images/points-edit.svg" alt="" />
                                                <p className="font-[Inter] font-[500] text-[13px] text-[#000000]" >Edit</p>
                                                </span>
                                            </span>

                                            {/* Hold */}
                                            <span
                                                className="cursor-pointer flex items-center gap-[1px]"
                                                onClick={() => {
                                                    // handleHold(user)
                                                    setMenuOpenIndex(null);
                                                }}
                                            >
                                                <img src="/images/points-hold.svg" alt="" />
                                                <p className="font-[Inter] font-[500] text-[13px] text-[#D47C16]">Hold</p>
                                            </span>

                                            {/* Delete */}
                                            <span
                                                className="cursor-pointer flex items-center gap-[1px]"
                                                onClick={() => {
                                                    // handleDelete(user)
                                                    setMenuOpenIndex(null);
                                                }}
                                            >
                                            <span className="flex items-center gap-[1px]" onClick={onClose2}>
                                                <img src="/images/points-delete.svg" alt="" />
                                                <p className="font-[Inter] font-[500] text-[13px] text-[#D40511]" >Delete</p>
                                            </span>
                                            </span>
                                        </div>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

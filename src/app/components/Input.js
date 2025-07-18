
export default function Input({ label, placeholder, type = "text" }) {
    return (
      <div className="mb-4">
        <label className="block text-[13px] font-[500] text-[#000000] mb-1">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border h-[34px] border-[1px] border-[#000000] rounded-[7px] px-[13px] text-[13px] pb-[5px] pt-[5px] text-[#7E7E7E] placeholder-[#7E7E7E] outline-none"
        />
      </div>
    );
  }
  
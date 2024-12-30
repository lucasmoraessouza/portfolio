export function GetInTouch() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-2xl">
      <span className="font-poppins antialiased font-extrabold text-2xl tracking-tighter">
        Get in touch
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-base">
        Lets work together
      </span>
      <form className="flex flex-col w-full gap-4">
        <label htmlFor="name">Name</label>
        <input className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent"></input>
        <label htmlFor="email">Email</label>
        <input className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent"></input>
        <label htmlFor="service">Service</label>
        <input className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent"></input>
        <label htmlFor="message">Message</label>
        <textarea
          className="border-white border-[2px] rounded-[10px] px-4 bg-transparent"
          rows={6}
        ></textarea>
      </form>
      <div className="mt-8 w-full">
        <button className="bg-white rounded-[10px] text-black h-[55px] w-full">
          Get in touch
        </button>
      </div>
    </div>
  );
}

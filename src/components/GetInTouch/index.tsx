export function GetInTouch() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-2xl">
      <span className="font-poppins antialiased font-extrabold text-4xl tracking-tighter">
        Entre em contato
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-base">
        Vamos trabalhar juntos :D
      </span>
      <form className="flex flex-col w-full gap-4">
        <label htmlFor="name">Nome</label>
        <input className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent"></input>
        <label htmlFor="email">Email</label>
        <input className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent"></input>
        <label htmlFor="service">Serviço</label>
        <input className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent"></input>
        <label htmlFor="message">Mensagem</label>
        <textarea
          className="border-white border-[2px] rounded-[10px] p-4 bg-transparent"
          rows={6}
        ></textarea>
      </form>
      <div className="mt-8 w-full">
        <button className="bg-white rounded-[10px] text-black h-[55px] w-full">
          Enviar mensagem
        </button>
      </div>
    </div>
  );
}

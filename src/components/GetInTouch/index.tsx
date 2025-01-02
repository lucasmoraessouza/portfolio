import { useState } from "react";
import emailjs from "emailjs-com";
import { enqueueSnackbar } from "notistack";
import SendIcon from "../../assets/icons/send-icon";

export function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID!;
    const templateId = import.meta.env.VITE_TEMPLATE_ID!;
    const userId = import.meta.env.VITE_USER_ID!;

    if (!serviceId || !templateId || !userId) {
      console.error("Missing EmailJS configuration.");
      alert(
        "Configuração do EmailJS ausente. Verifique as variáveis de ambiente."
      );
      return;
    }

    emailjs.send(serviceId, templateId, formData, userId).then(
      () => {
        enqueueSnackbar("Mensagem enviada com sucesso!", {
          variant: "success",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (err) => {
        console.log(err);
        enqueueSnackbar("Falha ao enviar a mensagem. Tente novamente.", {
          variant: "error",
        });
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-2xl">
      <span className="font-poppins antialiased font-extrabold text-4xl tracking-tighter">
        Entre em contato
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-base">
        Vamos trabalhar juntos :D
      </span>
      <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent focus-visible:outline-none"
          value={formData.name}
          onChange={handleChange}
          // required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent focus-visible:outline-none"
          value={formData.email}
          onChange={handleChange}
          // required
        />
        <label htmlFor="subject">Assunto</label>
        <input
          id="subject"
          name="subject"
          className="border-white border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent focus-visible:outline-none"
          value={formData.subject}
          onChange={handleChange}
          // required
        />
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          className="border-white border-[2px] rounded-[10px] p-4 bg-transparent focus-visible:outline-none"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          // required
        ></textarea>
        <div className="mt-8 w-full">
          <button
            type="submit"
            className="bg-white rounded-[10px] text-black h-[55px] w-full flex justify-center items-center gap-2"
          >
            <SendIcon />
            Enviar mensagem
          </button>
        </div>
      </form>
    </div>
  );
}

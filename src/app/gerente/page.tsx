import { Metadata } from "next"
import Image from "next/image";
import NoSideLayout from '@/components/Layouts/NoSideLayout';

export const metadata: Metadata = {
  title: "Fale com seu gerente",
  description: "",
};

const DynamicPage = () => {

  // ao finalizar deve limpar as entradas do storage
  // deve redirecinar para a quiz

  return (
    <NoSideLayout>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{width: '550px'}}
      >
        <h4 
          className="mb-8 text-heading-6 font-bold text-dark dark:text-white"
        >
          Muito obrigado pela sua participação! 💚
        </h4>
        <p className="mb-4 mt-4">
          Que tal marcar uma conversa com o seu gerente para colocar tudo isso em prática?

        </p>
        <p className="mb-4 mt-4">
          Click no botão ou escanei o qrcode para ser direcionado para o WhatsApp oficial do Sicredi
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '550px',
            marginBottom: '40px'
          }}
        >
        <a 
          href="https://wa.me/555121651571"
          style={{
            all: 'unset',
            width: '100%'
          }} 
        >
          <button
            className="mb-4 w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
          >
            Fale com seu gerente pelo whatsapp!
          </button>
      </a>
      <Image
        width={200}
        height={200}
        src={"/images/qrcode/whats-qrcode.svg"}
        alt="Logo"
      />
      </div>
      <a 
        href="/"
        style={{all: 'unset'}} 
      >
        <button
          className="mb-4 w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
        >
          Voltar para o quiz
        </button>
      </a>
    </div>
  </div>
  </NoSideLayout>
  );
};

export default DynamicPage;



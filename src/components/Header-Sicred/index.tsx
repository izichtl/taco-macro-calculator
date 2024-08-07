import Link from "next/link";
import Image from "next/image";

const Header: any = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark">
      <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10">
        <div className="flex flex-grow items-center justify-center gap-2 2xsm:gap-4 lg:w-full lg:justify-center xl:w-auto xl:justify-center">
          <Link 
            className="block flex-shrink-0" 
            target="blank_" 
            href="https://www.sicredi.com.br/site/fundacao/programa-crescer/"
          >
            <ul className="flex items-center gap-2 2xsm:gap-4">       
              {/* <Image
                width={90}
                height={90}
                src={"/images/sicred/logo-sicred.svg"}
                alt="Logo"
              /> */}
            Calculadora Macro
            </ul>
          </Link> 
        </div>
      </div>
    </header>
  );
};

export default Header;

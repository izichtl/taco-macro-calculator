'use client'
import React, { ReactNode, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';  

const CrescerLogicLayer: React.FC<any> = () => {
  const router = useRouter();
  // aqui será registrado o usuário no programa
  // mascara do input
  // validação do cpf 
  // controle do estado e registro
  // apenas avança pela participação se preenchido
  // enviar o user para o quiz se nao tiver cliente_user
  const goTo = (url: string) => {
    router.push(url)
  }

return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <div
        style={{
          width: '550px'
        }}
        >
        <h4 
          className="mb-8 text-heading-6 font-bold text-dark dark:text-white"
          >
          Programa Crescer
        </h4>
        <p className="mb-4 mt-4">
          Antes de conectar você com seu gerente, temos um pedido importante.
          Essa ação faz parte do Crescer, 
          nosso programa de educação cooperativa.
          Seria incrível poder registrar sua participação.
        </p>
        <label
          className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
          >
          Digite seu CPF
        </label>
        <input
          type="text"
          // value={codigo}
          // onChange={handleChange}
          placeholder="110.220.330.44"
          className="mb-4 w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        <button
          onClick={() => goTo('/gerente')}
          className="mb-4 w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
          >
          Confirmar minha participação
        </button>
        <button
          onClick={() => goTo('/gerente')}
          className="mb-4 w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"

          >
          Não quero participar
        </button>
      </div>
  </div>
  );
};
export default CrescerLogicLayer;

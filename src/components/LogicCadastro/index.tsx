'use client';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

const CadastroLogicLayer: React.FC<any> = () => {
  const router = useRouter()
  const [hasCode, setCode] = useState<boolean>(false)

  const [codigo, setCodigo] = useState<string>('');
  const [showCode, setShowCodigo] = useState<string>('');

  // Função para lidar com a mudança no campo de entrada
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodigo(event.target.value);
  };
  const handleDelete = () => {
    localStorage.removeItem('cooperative_code')
    window.location.reload()
  };
  const goToUrl = (url: string) => {
    router.push(url)
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aqui você pode adicionar lógica para processar o código, como enviá-lo para uma API
    console.log('Código da cooperativa:', codigo)
    localStorage.setItem('cooperative_code', codigo)
    window.location.reload()
  };


  useEffect(() => {
    const codeFromStorage = localStorage.getItem('cooperative_code');
    console.debug(codeFromStorage, 'code')
    if(codeFromStorage !== null) {
      setCode(true)
      setShowCodigo(codeFromStorage)
    } 
  }, [])

return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '500px',
        height: '500px',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {!hasCode && (<>
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
        Cadastrar Código da Cooperativa
      </label>
      <input
        type="text"
        value={codigo}
        onChange={handleChange}
        placeholder="Default Input"
        className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      <button
        type="submit"
        className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
        >
        Enviar
      </button>
    </form>
        </>)}
    {hasCode && (
      <>
        <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
          Já existe um código de cooperativa cadastrado para esse quiz, deseja deletar e cadastrar outro? 
        </label>
        <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
        {showCode}
        </label>
        <button
          onClick={() => handleDelete()}
          className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
          >
          Deletar Codigo
        </button>
        <br />
        <br />
        <button
          onClick={() => goToUrl('/')}
          className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
          >
          Acessar o Quiz
        </button>
      </>
      )}
  </div>
  );
};
export default CadastroLogicLayer;


// 72d4b3e56ec7
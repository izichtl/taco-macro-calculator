'use client';
import React, { useEffect } from 'react';
import QuizContainer from '@/components/QuizOutSiteBox';
import { useRouter } from 'next/navigation';

const QuizLogicLayer: React.FC<any> = () => {
  // limpa o storage
  sessionStorage.setItem('client_result', '')
  const router = useRouter()

  const [page, setPage] = React.useState<number>(1)
  // const [coop_code, setCoopCode] = React.useState<string | null>(null)
  const [isAssociated, setIsAssociated] = React.useState<string>('')

  const nextPage = async () => {
    setPage(prev => prev + 1)
  }

  useEffect( () => {
    const codeFromSesstion = localStorage.getItem('cooperative_code')
    if(codeFromSesstion === null) {
      router.push('/cadastro')
    } 
  }, [])

return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
    {(page === 1  && isAssociated === '')&& (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      
      }}>
      <h4 
        className="mb-8 text-heading-6 font-bold text-dark dark:text-white"
      >
        Vamos decobrir seu perfil
      </h4>
      <button
        onClick={nextPage}
        className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
      >
        Descobrir perfil
      </button> 
    </div>
    )}
    {(page === 2  && isAssociated === '')&& (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <h4 
          className="mb-8 text-heading-6 font-bold text-dark dark:text-white"
        >
          Você é associado sicred?
        </h4>
        <button
          onClick={() => setIsAssociated('associated')}
          className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
        >
          Associado
        </button> 
        <br />
        <button
          className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
          onClick={() => setIsAssociated('notAssociated')}
        >
          Não Associado
        </button> 
      </div>
    )}
    {(page === 2  && isAssociated !== '') && (
      <QuizContainer
        userType={isAssociated}
      />
    )}
  </div>
  );
};
export default QuizLogicLayer
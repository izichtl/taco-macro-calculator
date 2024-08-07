import { notAssociatedQuestions } from '@/database/local-date'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useStorageResponse } from "@/hooks/create-response"
import useSWRMutation from "swr/mutation"

interface QuizAssociatedDataProps {
  question: string
  response: string
  value: number
}

const QuizBox: any = () => {
  const router = useRouter()
  const [stepCount, setStepCount] = useState<number>(-1);
  const [result, setResult] = useState<number>(0);
  const [quizData, setQuizData] = React.useState<QuizAssociatedDataProps[]>([])
  
  const { useStorageResponseFetcher } = useStorageResponse(quizData, 0)
  const { trigger: withdrawTrigger }: any = useSWRMutation(
    'useStorageSWR',
    useStorageResponseFetcher,
  { revalidate: false })

  const HandlerResult = (result: number) => {
    sessionStorage.setItem('client_result', result.toString())
    sessionStorage.setItem('associated', '0')
    setTimeout(() => {
      router.push('/result')
    }, 2500)
  };

  const callRequest = async () => {
    const requestResponse = await withdrawTrigger()
    console.debug(requestResponse, 'requestResponse')
  }

  useEffect(() => {
    const isResult = stepCount === notAssociatedQuestions.qsns.length 
    if(isResult) {
      callRequest().then(r => r).catch(e => console.log(e))
    }
  }, [stepCount])

  const processData = (responseValue: number, qsn: string, responseString: string) => {
    const response = {
      question: qsn,
      response: responseString,
      value: responseValue
    }
    setResult(prev => prev + responseValue)
    setQuizData([... quizData, response])
  }

  const handlerAnswer = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const questionIndex = Number(e.target.name)
    const questionData = notAssociatedQuestions.qsns[questionIndex]
    const responseString = e.target.value
    const responseIndex = notAssociatedQuestions.qsns[questionIndex].optn.indexOf(responseString)
    const responseValue = notAssociatedQuestions.qsns[questionIndex].values[responseIndex]
    processData(responseValue, questionData.qsn, responseString)
    next()
  }


  const landing = () => (
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
          Demora Apenas 3 minutos
        </h4>
        <button onClick={() => next()} 
          className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
        >
          Começar agora
      </button>
    </div>
  );

  
  const nonExist = () => (
    <>
      <p>Nonexistent or Invalid Question, So Sorry ;)</p>
      <button onClick={() => tryAgain()}>Maybe Start over?</button>
    </>
  );




  const tryAgain = () => {
    setResult(0);
    setStepCount(0);
  };

  const next = () => {
    setStepCount(prev => prev + 1);
  };

  const Quiz = ({ qsno }: { qsno: number }) => (
    qsno >= 0 && qsno < notAssociatedQuestions.qsns.length ? (
      <>
        <h4 
          className="mb-8 text-heading-6 font-bold text-dark dark:text-white"
        >
              {notAssociatedQuestions.qsns[qsno].qsn}
        </h4>
        <div className="flex flex-col space-y-4 p-4">
          {notAssociatedQuestions.qsns[qsno].optn.map(ans => (
            <>
              <button
                  // @ts-ignore
                  onClick={handlerAnswer}
                  value={ans}
                  name={qsno.toString()}
                  className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
                  >
                {ans}
              </button>
              </>
          ))}
        </div>
      </>
    ) : nonExist()
  );

  const isQuestion = (stepCount !== notAssociatedQuestions.qsns.length && stepCount !== -1) 
  const isResult = stepCount === notAssociatedQuestions.qsns.length 
  const isLanding = stepCount === -1
  return (
    <div className='fx fxdc fxjcc quiz'>

      {isLanding&& (
        landing()
      )} 
      {isQuestion && (
        <Quiz qsno={stepCount} />
      )}
      {isResult && (
        <>
          
          <h4 
            className="mb-8 text-heading-6 font-bold text-dark dark:text-white"
          >
            Pronto, finalizamos as perguntas!
          </h4>
          <p className="mb-4 mt-4">
            Agora, vamos processar suas respostas e revelar seu perfil cooperativista.
          </p>
          <p className="mt-4">
            Por favor, aguarde alguns instantes.
          </p>
          {HandlerResult(result)}        
        </>
      )} 
    </div>
  );
};

export default QuizBox; 
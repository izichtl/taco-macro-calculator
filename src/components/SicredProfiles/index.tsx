import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  


const ShowProfiles: any = ({ data }: any) => {
  console.log(data)
  const router = useRouter();

  const [nextSteps, setNextSteps] = useState(false)
  const [resultData, setResultData] = useState({
    title: '',
    profile: '',
    nextSteps: ['']
  })
  useEffect(() => {
    setResultData(data)
  }, [data])

  const goTo = (url: string) => {
    router.push(url)
  }

  const clearUser = () => {
    sessionStorage.setItem('client_result', '')
    setNextSteps(true)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '550px'
      }}
    >
      {!nextSteps && (
        <div
          className="mt-4"
        >
          <h4 
            className="mb-8 text-heading-6 font-bold text-dark dark:text-white"
          >
            {resultData.title}
          </h4>
          <p className="mb-4 mt-4">
            {resultData.profile}
          </p>
          <button
            onClick={clearUser}
            className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
          >
            Próximos passos
          </button>
        </div>
      )}
      {nextSteps && (
        <div
          className="mt-4"
        >
          {resultData.nextSteps[0] !== undefined && (
            resultData.nextSteps.map(step => {
              return (
                <div 
                  key={step}
                >
                  <h5 
                    className="mb-8 text-heading-8 font-bold text-dark dark:text-white"
                  >
                    {step}
                  </h5>
                </div>
              )
            })
            
          )}
            <button
              onClick={() => goTo('/crescer')}
              className="w-full rounded-[7px] bg-primary py-3 text-white transition hover:bg-primary-dark"
            >
              Quero falar com meu gerente sobre isso!
            </button>
        </div>
      )}
    </div>
  );
};

export default ShowProfiles; 



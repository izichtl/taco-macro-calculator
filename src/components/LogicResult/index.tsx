'use client';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { associatedProfiles, notAssociatedProfiles } from '@/database/local-date'
import ShowProfiles from '../SicredProfiles'

const getAssociatedProfile = (result: number) => {
  switch (true) {
    default:
      return associatedProfiles[0]
    case (result > 8 && result <= 12 ):
      return associatedProfiles[1]
    case (result > 13 && result <= 15 ):
      return associatedProfiles[2]
    case (result > 16):
      return associatedProfiles[3]
  }
}

const getNotAssociatedProfile = (result: number) => {
  switch (true) {
    default:
      return notAssociatedProfiles[0]
    case (result > 40 && result <= 70 ):
      return notAssociatedProfiles[1]
    case (result >= 71):
      return notAssociatedProfiles[2]
  }
}

const ResultLogicLayer: React.FC<any> = () => {
  const router = useRouter()
  const [result, setResult] = useState<null | number>(null)
  const [associated, setAssociated] = useState<null | string>(null)

  useEffect(() => {
    const resultFromStorage = sessionStorage.getItem('client_result')
    const isAssociated = sessionStorage.getItem('associated')
    if(resultFromStorage === '' || resultFromStorage === null) {
      router.push('/')
    } else {
      setResult(Number(resultFromStorage))
      setAssociated(isAssociated)
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
      {true && (
        <>
          {result !== null && (
            <>
            {associated === '1' && (
              <ShowProfiles
              data={getAssociatedProfile(result)}
              />
            )}
            {associated === '0' && (
              <ShowProfiles
              data={getNotAssociatedProfile(result)}
              />
            )}
              </>
          )}
        </>
    )}
  </div>
  );
};
export default ResultLogicLayer;

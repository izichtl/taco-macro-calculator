'use client';
import { APIDecoratorWithBaseURI } from "../../service/api";

export interface useWithdrawProps {
  fetcher: (id: string) => Promise<any>
}

export const useStorageResponse = (payload: any, isAssociated: number) => {

    const url: string = "/api/data"
    const coop_id = localStorage.getItem('cooperative_code')

    const result_ = payload.reduce((acumulador: number, atual: any) => acumulador + atual.value, 0)
    const body = {
      data: payload,
      id: coop_id,
      associated: isAssociated,
      result_
    }



    console.debug(body, 'swr')
    const useStorageResponseFetcher = async () => { 
      return await APIDecoratorWithBaseURI().post(url,
        body
      ) 
    }
    return {
      useStorageResponseFetcher
    }
}

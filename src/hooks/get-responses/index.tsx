'use client';
import useSWR from "swr";
import { APIDecoratorWithBaseURI } from "../../service/api";

export interface useWithdrawProps {
  fetcher: (id: string) => Promise<any>
}

export const useGetResponses = () => {

    const url: string = "/api/data"
    const useGetResponsesFetcher = async () => { 
      return await APIDecoratorWithBaseURI().get(url) 
    }

    const { data, error, isLoading } = useSWR(url, useGetResponsesFetcher,
      {
        refreshInterval: 60000, // Refresh every 10 seconds
        revalidateOnFocus: true // Optionally, set to false if you don't want to revalidate on focus
      }
    )

    return {
      responses: data,
      isLoading,
      isError: error
    }
}


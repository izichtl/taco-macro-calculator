"use client";
import React, { useEffect } from "react";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import MapOne from "../Maps/MapOne";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import ChartOne from "@/components/Charts/ChartOne";
import useSWRMutation from "swr/mutation";
import { useGetResponses } from "@/hooks/get-responses";
import PieChartSicred from "../PieChart-Sicred";
import { calculatePercentages } from "@/helper/percent";

const QuizResponses: React.FC = () => {
  const [responses, setResponses] = React.useState<null | any>([])
  const [associatedResponses, setAssociatedResponses] = React.useState<null | any>([])
  const [notAssociatedResponses, setNotAssociatedResponses] = React.useState<null | any>([])
  
  
  const useGetResponsesObject = useGetResponses()

  useEffect(()=> {
    const hasResponses = useGetResponsesObject.responses
    if (hasResponses) {
      const innerReponses = hasResponses.data

      // console.debug(associated, 'associated')
      // console.debug(notAssociated, 'notAssociated')
      setResponses(hasResponses.data)
      // setAssociatedResponses(associated)
      // setNotAssociatedResponses(notAssociated)
    }
  }, [useGetResponsesObject])

  const associated = responses.filter((response: any) => response.associated === 1)
  const notAssociated = responses.filter((response: any) => response.associated === 0)
  
  const numberOfassociated = associated.length
  const numberOfNotAssociated = notAssociated.length
  const legend = calculatePercentages(numberOfassociated, numberOfNotAssociated, 'Associado', 'Não Associado')
  return (
    <>
      {/* <DataStatsOne /> */}

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* <ChartOne /> */}
        {/* <ChartTwo /> */}
        <PieChartSicred
          dataSeries={[numberOfassociated, numberOfNotAssociated]}
          dataTags={legend}
        />
        {/* <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div> */}
        {/* <ChatCard /> */}
      </div>
      {responses !== null && (<>
        <pre><code id="json-output">{JSON.stringify(responses, null, 2)}</code></pre>
      </>
      )}
    </>
  );
};

export default QuizResponses;

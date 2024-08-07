import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";




const PieChartSicred: any = ({ dataSeries, dataTags }: any) => {
  const series = dataSeries;

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    colors: ["#3FA110", "#dd8843"],
    labels: ["Associado", "Não Associado"],
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          background: "transparent",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Respostas",
              fontSize: "16px",
              fontWeight: "400",
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: "bold",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 415,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-7 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5">
      <div className="mb-9 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Usuarios do quiz
          </h4>
        </div>
        {/* <div>
          <DefaultSelectOption options={["Monthly", "Yearly"]} />
        </div> */}
      </div>

      <div className="mb-8">
        <div className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[350px]">
        <div className="-mx-7.5 flex flex-wrap items-center justify-center gap-y-2.5">
          {true && (
              dataTags.map((item: any) => {
              return (
                <div className="w-full px-7.5 sm:w-1/2"
                  key={item.title}
                >
                <div className="flex w-full items-center">
                  <span style={{ backgroundColor: item.color }} className="mr-2 block h-3 w-full max-w-3 rounded-full"></span>
                  <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                    <span> {item.title} </span>
                    <span> {item.percent} </span>
                  </p>
                </div>
              </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PieChartSicred;
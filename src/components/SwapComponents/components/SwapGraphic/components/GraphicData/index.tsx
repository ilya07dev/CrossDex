import { useEffect } from "react";

import { ColorType, createChart } from "lightweight-charts";
import { InformationgraphicPair } from "../../config";
import numeral from "numeral";
import { useMediaQuery } from "hooks";

interface GraphicSwapDataProps {
  graphic:InformationgraphicPair[]
}

const miniStepen = {
  "0":"₀",
  "1":"₁",
  "2":"₂",
  "3":"₃",
  "4":"₄",
  "5":"₅",
  "6":"₆",
  "7":"₇",
  "8":"₈",
  "9":"₉",
  "10":"₁₀",
  "11":"₁₁",
  "12":"₁₂",
  "13":"₁₃",
  "14":"₁₄",
  "15":"₁₅",
  "16":"₁₆",
  "17":"₁₇",
  "18":"₁₈",
  "19":"₁₉",
  "20":"₂₀",
  "21":"₂₁",
  "22":"₂₂",
  "23":"₂₃",
  "24":"₂₄",
  "25":"₂₅",
  "26":"₂₆",
  "27":"₂₇",
  "28":"₂₈",
  "29":"₂₉",
  "30":"₃₀",
}

export function GraphicSwapData({graphic}: GraphicSwapDataProps) {
  const isMobile = useMediaQuery("(max-width: 600px)")
  
  useEffect(() => {
    const chartDiv = document.getElementById(`swap-graphic-data`);
    if (chartDiv) {
      chartDiv.innerHTML = "";
      const maxDigits = Math.max(
        ...graphic.map((data) => data.value.toString().length)
      );

      // Calculate the base font size and the maximum font size
      const baseFontSize = isMobile ? 12 : 18;
      const maxFontSize = isMobile ? 13 : 20;

      // Calculate the font size based on the number of digits
      const fontSize = baseFontSize - (maxDigits - 1) * 2;

      const chart = createChart(document.getElementById(`swap-graphic-data`)!, {
        localization: {
          priceFormatter:function(price:number) {
            let value = price.toString();

            value = (+value).toFixed(30);
            const index = value.indexOf(".");
            const indexNumb = value.split("").findIndex((symbol) => +symbol !== 0 && !Number.isNaN(+symbol));
            const zeroes = value.slice(index+1, indexNumb);
          
            if(
              (+value < 1
              &&
              +value > 0
              ||
              +value > -1
              &&
              +value < 0)
              &&
              zeroes.length >= 4
            ) {
              
              const content = value.split(zeroes);
              console.log(zeroes.length-1)
          
              // @ts-ignore
              return `${content[0]}0${miniStepen?.[(zeroes.length-1).toString()] ?? '₃₀₊'}${content[1].slice(0, 4)}`
            }
            let decimals;
          
            if(
              +value > 1
              ||
              +value < -0
            ) {
              decimals = '00'
            }
          
            if(
              (+value < 1
              &&
              +value > 0
              ||
              +value > -1
              &&
              +value < 0)
            ) {
              decimals = '0000'
            }
          
            let result:string = numeral(value).format(`0,0[.][${decimals}]`);
          
            return result;
          },
          locale: "en",
        },
        autoSize: true,
        height: 1,
        
        handleScroll: {
          horzTouchDrag: false,
        },
        crosshair: {
          vertLine: {
            visible: false,
          },
          horzLine: {
            visible: false,
          },
        },
        timeScale: {
          borderVisible: false,
          visible: true,
        },
        leftPriceScale: {
          visible: true,
          textColor: "#fff",
          borderVisible: false,
    
        },
        rightPriceScale: {
          visible: false,
          borderVisible: false,
        },

        grid: {
          vertLines: {
            visible: false,
          },
          horzLines: {
            visible: false,
          },
        },
        layout: {
          fontSize: Math.max(fontSize, maxFontSize),
          fontFamily: "Figtree",
          textColor: "white",
          background: { type: ColorType.Solid, color: "#37383D" },
        },
      });
      const timeScaleContainer = chartDiv.querySelector(
        ".time-scale .pane-views-container"
      );
      if (timeScaleContainer) {
        timeScaleContainer.classList.add("custom-time-scale");
      }
      // Add any additional CSS styling as needed
      const areaSeries = chart.addAreaSeries({
        lineType: 2,
        baseLineColor: "#37383D",
        topColor: "#37383D",
        bottomColor: "#37383D",
        lineColor: "#7BE9A5",
      });

      areaSeries.setData(graphic as any);
      const minTime = graphic?.[0]?.time;
      const maxTime = graphic?.[graphic.length - 1]?.time;
      chart
        .timeScale()
        .subscribeVisibleTimeRangeChange((visibleTimeRange: any) => {
          if (visibleTimeRange.from <= minTime) {
            chart.timeScale().setVisibleRange({
              from: minTime as any,
              to: visibleTimeRange.to,
            });
          } else if (visibleTimeRange.to >= maxTime) {
            chart.timeScale().setVisibleRange({
              from: visibleTimeRange.from,
              to: maxTime as any,
            });
          }
        });

      chart.timeScale().fitContent();
    }
  }, [graphic]);

  return (
    <div
      className="w-full flex-grow min-h-[270px] h-auto sm:min-h-max sm:h-full mt-auto graphicMain"
      id={`swap-graphic-data`}
    ></div>
  );
}

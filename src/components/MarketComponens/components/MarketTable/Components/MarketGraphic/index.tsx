import { useEffect } from "react";

import { ColorType, createChart } from "lightweight-charts";
import axios from "axios";
import { tradingTokensUrl } from "query/apiUrl";
import { graphic } from "query/useGetMarket";
import { useStore } from "effector-react";
import { $choseChain } from "config/stateChain";

interface MarketGraphicProps {
  index: number,
  address:string,
}

export function MarketGraphic({ index, address }: MarketGraphicProps) {
  const chain = useStore($choseChain);

  useEffect(() => {
    async function setGraphic() {

      const getTradings = await axios(tradingTokensUrl(address, chain, "D7"));
      const graphicTradings:graphic[] = getTradings.data;

      const chartDiv = document.getElementById(`graphic-detail-${index}`);
      if (chartDiv) {
        chartDiv.innerHTML = "";
        const chart = createChart(
          document.getElementById(`graphic-detail-${index}`)!,
          {
            // width: 170,
            height: 46,
            autoSize: true,

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
              timeVisible: false,
              ticksVisible: false,
              visible: false,
              barSpacing: 0,
              secondsVisible: false,
              minBarSpacing: 0,
              shiftVisibleRangeOnNewBar: true,
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
              textColor: "black",

              background: { type: ColorType.Solid, color: "#37383D" },
            },
          }
        );
        const areaSeries = chart.addAreaSeries({
          lineType: 2,
          baseLineColor: "#37383D",
          topColor: "#37383D",
          bottomColor: "#37383D",
          lineColor: "#7BE9A5",
        });
        areaSeries.setData(graphicTradings as any);
        const minTime = graphicTradings[0].time;
        const maxTime = graphicTradings[graphicTradings.length - 1].time;
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
    }

    setGraphic();
    
  }, [address, chain]);
  return (
    <td
      className="ml-auto w-[120px] 2xl:w-[170px]"
      id={`graphic-detail-${index}`}
    ></td>
  );
}

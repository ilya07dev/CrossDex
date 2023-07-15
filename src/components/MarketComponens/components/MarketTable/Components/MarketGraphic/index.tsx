import { useEffect } from "react";

import { ColorType, createChart } from "lightweight-charts";
import { graphic } from "query/useGetMarket";

interface MarketGraphicProps {
  index: number,
  graphic:graphic[],
}

export function MarketGraphic({ index, graphic }: MarketGraphicProps) {
  
  useEffect(() => {
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
      areaSeries.setData(graphic as any);
      const minTime = graphic[0].time;
      const maxTime = graphic[graphic.length - 1].time;
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
    <td
      className="ml-auto w-[120px] 2xl:w-[170px]"
      id={`graphic-detail-${index}`}
    ></td>
  );
}

import { useEffect } from "react";

import { ColorType, createChart } from "lightweight-charts";
import { InformationgraphicPair } from "../../config";

interface GraphicSwapDataProps {
  graphic:InformationgraphicPair[]
}

export function GraphicSwapData({graphic}: GraphicSwapDataProps) {

  useEffect(() => {
    const chartDiv = document.getElementById(`swap-graphic-data`);
    if (chartDiv) {
      chartDiv.innerHTML = "";
      const chart = createChart(document.getElementById(`swap-graphic-data`)!, {
        autoSize: true,
        height: 1,
        localization: {
          locale: "en",
        },
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
          fontSize: 18,
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
      className="w-full flex-grow min-h-[270px] h-auto sm:min-h-max sm:h-full mt-auto"
      id={`swap-graphic-data`}
    ></div>
  );
}

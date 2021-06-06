import React, { FC, useEffect, useRef } from "react";
import { Center } from "@chakra-ui/layout";

const WIDTH = 700;
const HEIGHT = 400;
const LEFT_PADDING = 50;
const TOP_BOTTOM_PADDING = 50;
const DPI_COEFFICIENT = 2;
const DPI_WIDTH = WIDTH * DPI_COEFFICIENT;
const DPI_HEIGHT = HEIGHT * DPI_COEFFICIENT;
const VIEW_HEIHGT = DPI_HEIGHT - TOP_BOTTOM_PADDING;
const ZONES = [2, 4, 7.3, 10];

type Props = {
  data: Array<{
    label: string;
    data: number[];
  }>;
};

const LineChart: FC<Props> = ({ data = [] }) => {
  const DATA = data;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    createChart();
  }, [data]);

  const calculateYBoundaries = () => {
    let min: number = DATA[0]?.data[0];
    let max: number = DATA[0]?.data[0];

    for (const { data } of DATA) {
      data.forEach((value) => {
        if (value < min) min = value;
        if (value > max) max = value;
      });
    }

    return [min, max];
  };

  const calculateAverage = () => {
    let sum = 0;
    let count = 0;
    for (const { data } of DATA) {
      data.forEach((value) => (sum += value));
      count += data.length;
    }

    return Math.round((sum / count) * 100) / 100;
  };

  const createChart = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.style.width = `${WIDTH}px`;
      canvas.style.height = `${HEIGHT}px`;
      canvas.width = DPI_WIDTH;
      canvas.height = DPI_HEIGHT;

      if (ctx) {
        const [, yMax] = calculateYBoundaries();

        // === Y axis
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#C4C4C4";
        ctx.font = "normal 28px Helvetica";
        ctx.fillStyle = "#696C74";
        ctx.moveTo(LEFT_PADDING, 0);
        ctx.lineTo(LEFT_PADDING, VIEW_HEIHGT);

        const ySteps = Math.round(yMax) + 2;
        const yStep = VIEW_HEIHGT / ySteps;

        for (let i = 1; i < ySteps; i++) {
          const y = yStep * i;
          ctx.moveTo(LEFT_PADDING, y);
          ctx.lineTo(LEFT_PADDING + 20, y);
          ctx.fillText(`${i}`, 0, VIEW_HEIHGT - y + 8);
        }
        ctx.stroke();
        ctx.closePath();
        // ===

        // === ZONES
        ctx.beginPath();
        ctx.setLineDash([10, 10]);
        ctx.strokeStyle = "#C4C4C4";
        for (const zone of ZONES) {
          const y = zone * yStep;
          ctx.moveTo(LEFT_PADDING, VIEW_HEIHGT - y);
          ctx.lineTo(LEFT_PADDING + DPI_WIDTH, VIEW_HEIHGT - y);
        }
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.closePath();
        // ===

        // === X axis
        const xMax = DATA.length;
        let divider = 2.8;

        if (xMax > 14) {
          ctx.font = "normal 22px Helvetica";
          divider = 3.5;
        }

        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#C4C4C4";
        ctx.moveTo(LEFT_PADDING, VIEW_HEIHGT);
        ctx.lineTo(DPI_WIDTH, VIEW_HEIHGT);

        const xSteps = Math.round(xMax) + 2;
        const xStep = DPI_WIDTH / xSteps;

        for (let i = 1; i < xSteps; i++) {
          const x = xStep * i;
          ctx.moveTo(LEFT_PADDING + x, VIEW_HEIHGT);
          ctx.lineTo(LEFT_PADDING + x, TOP_BOTTOM_PADDING);
          if (i === xSteps - 1) continue;
          ctx.fillText(
            `${DATA[i - 1].label}`,
            LEFT_PADDING + x + xStep / divider,
            VIEW_HEIHGT + 35
          );
        }

        ctx.stroke();
        ctx.closePath();
        // ===

        // === Line Chart
        ctx.lineWidth = 2;
        ctx.font = "normal 22px Helvetica";
        DATA.forEach(({ data }, i) => {
          let xDayStep = 0;

          ctx.beginPath();

          let sum = 0;
          data.forEach((value) => (sum += value));
          const avg = Math.round((sum / data.length) * 100) / 100;
          if (avg > 7.3) {
            ctx.strokeStyle = "#EA3B0B";
          } else if (avg < 4) {
            ctx.strokeStyle = "#384EBD";
          } else {
            ctx.strokeStyle = "#5DA88A";
          }

          if (avg && xMax <= 14) {
            ctx.fillText(
              avg.toString(),
              LEFT_PADDING + (i + 1) * xStep + xStep / 3,
              TOP_BOTTOM_PADDING
            );
          }

          data.forEach((rawY) => {
            const x = (i + 1 + xDayStep) * xStep;
            const y = rawY * yStep;
            ctx.lineTo(LEFT_PADDING + x, VIEW_HEIHGT - y);
            xDayStep += 1 / data.length;
          });

          if (i !== DATA.length - 1) {
            let j = i + 1;
            while (!DATA[j].data.length) {
              if (j + 1 > DATA.length - 1) break;
              j++;
            }

            if (DATA[j].data.length) {
              const xNext = (j + 1) * xStep;
              const yNext = DATA[j].data[0] * yStep;
              ctx.lineTo(LEFT_PADDING + xNext, VIEW_HEIHGT - yNext);
            }
          }

          ctx.stroke();
          ctx.closePath();
        });

        // === AVG
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "#000";
        const yAvg = VIEW_HEIHGT - calculateAverage() * yStep;

        ctx.moveTo(LEFT_PADDING, yAvg);
        ctx.lineTo(DPI_WIDTH - 70, yAvg);
        ctx.fillText(calculateAverage().toString(), DPI_WIDTH - 54, yAvg + 6);

        ctx.stroke();
        ctx.closePath();
        // ===
      }
    }
  };

  return (
    <Center w="100%" h="100%">
      <canvas ref={canvasRef}></canvas>
    </Center>
  );
};

export default LineChart;

/* useEffect(() => {
  createChart([
    [1, 3.7],
    [2, 6.3],
    [3, 5.1],
    [4, 8.3],
    [5, 7.4],
    [6, 6.5],
    [7, 5.2]
  ]);
});

const calculateYBoundaries = (data: Array<[number, number]>) => {
  let min: number = data[0][1];
  let max: number = data[0][1];

  for (const [, y] of data) {
    if (y < min) min = y;
    if (y > max) max = y;
  }

  return [min, max];
};

const calculateXBoundaries = (data: Array<[number, number]>) => {
  let min: number = data[0][0];
  let max: number = data[0][0];

  for (const [x] of data) {
    if (x < min) min = x;
    if (x > max) max = x;
  }

  return [min, max];
};

const createChart = (data: Array<[number, number]>) => {
  if (canvasRef.current) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.style.width = `${WIDTH}px`;
    canvas.style.height = `${HEIGHT}px`;
    canvas.width = DPI_WIDTH;
    canvas.height = DPI_HEIGHT;

    if (ctx) {
      const [yMin, yMax] = calculateYBoundaries(data);
      const [xMin, xMax] = calculateXBoundaries(data);

      // === Y axis
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#C4C4C4";
      ctx.font = "normal 28px Helvetica";
      ctx.fillStyle = "#696C74";
      ctx.moveTo(LEFT_PADDING, 0);
      ctx.lineTo(LEFT_PADDING, VIEW_HEIHGT);

      const ySteps = Math.round(yMax) + 1;
      const yStep = VIEW_HEIHGT / ySteps;

      for (let i = 1; i < ySteps; i++) {
        const y = yStep * i;
        ctx.fillText(`${i}`, 0, VIEW_HEIHGT - y + 8);
        ctx.moveTo(LEFT_PADDING, y);
        ctx.lineTo(LEFT_PADDING + 20, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.closePath();
      // ===

      // === ZONES
      ctx.beginPath();
      ctx.setLineDash([10, 10]);
      ctx.strokeStyle = "#C4C4C4";
      for (const zone of ZONES) {
        const y = zone * yStep;
        ctx.moveTo(LEFT_PADDING, VIEW_HEIHGT - y);
        ctx.lineTo(LEFT_PADDING + DPI_WIDTH, VIEW_HEIHGT - y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.closePath();
      // ===

      // === X axis
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#C4C4C4";
      ctx.moveTo(LEFT_PADDING, VIEW_HEIHGT);
      ctx.lineTo(DPI_WIDTH, VIEW_HEIHGT);

      const xSteps = Math.round(xMax) + 2;
      const xStep = DPI_WIDTH / xSteps;

      for (let i = 1; i < xSteps; i++) {
        const x = xStep * i;
        ctx.moveTo(LEFT_PADDING + x, VIEW_HEIHGT);
        ctx.lineTo(LEFT_PADDING + x, VIEW_HEIHGT - 20);
        if (i === xSteps - 1) continue;
        ctx.fillText(`${i}`, LEFT_PADDING + x + xStep / 2, VIEW_HEIHGT + 35);
      }

      ctx.stroke();
      ctx.closePath();
      // ===

      // === Line Chart
      ctx.lineWidth = 2;

      data.forEach(([rawX, rawY], i) => {
        ctx.beginPath();
         if (rawY > 7.3) {
          ctx.strokeStyle = "#EA3B0B";
        } else if (rawY < 4) {
          ctx.strokeStyle = "#384EBD";
        } else {
          ctx.strokeStyle = "#5DA88A";
        }
        ctx.strokeStyle = "#5DA88A";

        const x = rawX * xStep;
        const y = rawY * yStep;
        if (i > 0) {
          const xPrev = data[i - 1][0] * xStep;
          const yPrev = data[i - 1][1] * yStep;

          ctx.moveTo(LEFT_PADDING + xPrev, VIEW_HEIHGT - yPrev);
          ctx.lineTo(LEFT_PADDING + x, VIEW_HEIHGT - y);
        }
        ctx.stroke();
        ctx.closePath();
      });
      // ===
    }
  }
}; */

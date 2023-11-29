import { useEffect, useRef, useState } from "react";

const StotyLine = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    var container = document.getElementById("container") as HTMLDivElement;
    const ScrollValue = Math.floor(
      (container.scrollLeft / (container.scrollWidth - container.clientWidth)) *
        100
    );

    setValue(ScrollValue);
  }, []);

  const onWheel = (e: any) => {
    e.preventDefault();
    var container = document.getElementById("container") as HTMLDivElement;

    container.scrollTo({
      top: 0,
      left: container.scrollLeft + e.deltaY,
    });

    const ScrollValue = Math.floor(
      (container.scrollLeft / (container.scrollWidth - container.clientWidth)) *
        100
    );

    setValue(ScrollValue);
  };

  return (
    <div className="flex h-[92vh] max-h-[calc(100vh-64px)] w-full flex-col">
      <progress className="progress" value={value} max="100"></progress>
      <div
        id="container"
        className="scroll-inv h-full overflow-auto"
        onWheel={onWheel}
      >
        <div className="w-[5000px]">a</div>
      </div>
    </div>
  );
};

export default StotyLine;

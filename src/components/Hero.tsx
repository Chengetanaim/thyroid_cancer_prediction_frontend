import { Button } from "./ui/button";
import { ChartLine } from "lucide-react";

export function Hero() {
  return (
    <>
      <div className="flex justify-between px-48 py-20">
        <div className="w-1/2">
          <h1 className="text-5xl tracking-wide font-mono">
            Early detection means early fixing.
          </h1>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-md"
            src="https://www.americanoncology.com/static/uploads/6b72deda-8125-4d22-9f26-3cac437ef977-1723470404840.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-64 mx-auto ">
        <Button className="p-8 rounded-xl bg-amber-300 text-black hover:bg-opacity-35">
          <ChartLine />
          PREDICT NOW
        </Button>
      </div>
    </>
  );
}

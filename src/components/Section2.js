"use client";
import TimeLineButton from "@/components/TimeLineButton";

export default function Section2({displayText}) {
    return (
      <div className="flex flex-col items-center justify-between">
        <div className='text-xl sm:text-3xl font-bold p-3 m-3'>
            { displayText }
        </div>
        <div className=''>
            <TimeLineButton />
        </div>
      </div>
    );
  }
  
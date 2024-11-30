"use client";
import RotateSquareButton from "@/components/RotateSquareButton";

export default function Section4({displayText}) {
    return (
      <div className="relative">
        <div className='text-xl sm:text-3xl font-bold p-3 m-3'>
            { displayText }
        </div>
        <div className=''>
            <RotateSquareButton />
        </div>
      </div>
    );
  }
  
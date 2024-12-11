"use client";
import TimeLineButton from "@/components/TimeLineButton";
import StationMap from "@/components/StationMap";

export default function Section2({displayText, displayText2}) {
    return (
      <div className="flex flex-col items-center justify-between">        
        {/* <TimeLineButton displayText={displayText} displayText2={displayText2}/> */}
        <StationMap displayText={displayText} displayText2={displayText2} />
      </div>
    );
  }
  
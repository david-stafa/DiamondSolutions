"use client";
import GoogleMap from "@/components/map/map";

const Map = () => {
  return (
    <div className="h-40 w-full overflow-hidden rounded-2xl lg:h-52">
      <GoogleMap />
    </div>
  );
};

export default Map;

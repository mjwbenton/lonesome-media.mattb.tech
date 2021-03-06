import React from "react";
import { StripeElement } from "../component/StripedList";
import TwoRowText from "../component/TwoRowText";

const IMAGE_SIZE = "64";

const Track: React.FunctionComponent<{ track: any; index: number }> = ({
  track,
  index,
}) => (
  <StripeElement index={index}>
    <img
      height={IMAGE_SIZE}
      width={IMAGE_SIZE}
      className="w-16 h-16"
      src={track.album.images[2].url}
      alt={`Album art for ${track.album.name}`}
    />
    <TwoRowText
      row1={track.name}
      row2={track.artists.map((a) => a.name).join(", ")}
    />
  </StripeElement>
);
export default Track;

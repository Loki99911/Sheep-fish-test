import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";

export const Spinner: FC = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="1.2"
        width="96"
        visible={true}
      />
    </div>
  );
};

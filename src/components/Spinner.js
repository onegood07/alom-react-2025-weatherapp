import { SpinnerWrapper } from "./styles/StyledComponents";
import { ClockLoader } from "react-spinners";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ClockLoader color="white" size={150} />
    </SpinnerWrapper>
  );
};

export default Spinner;

import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

// redux의 state값을 가져와서 number에 담아서 리턴
const mapReduxStateToReactProps = (state) => {
  return {
    number: state.number,
  };
};

// connect()에 인자는 생략 가능하다.
export default connect(mapReduxStateToReactProps, null)(DisplayNumber);

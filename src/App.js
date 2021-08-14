import "./App.css";
import useWindowDimensions from "./Utilities/getWindowDimensions";
import HeaderView from "./Header/HeaderView";
import BodyPageOneView from "./Body/BodyPageOneView/BodyPageOneView";
import BodyPageTwoView from "./Body/BodyPageTwoView/BodyPageTwoView";
import BodyPageThreeView from "./Body/BodyPageThreeView/BodyPageThreeView";
import BodyPageFourView from "./Body/BodyPageFourView/BodyPageFourView";
import BodyPageFiveView from "./Body/BodyPageFiveView/BodyPageFiveView";
import Footer from "./Footer/Footer";

function App() {
  console.log(useWindowDimensions());
  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <HeaderView width={width} />
      <BodyPageOneView width={width} />
      <BodyPageTwoView width={width} />
      <BodyPageThreeView width={width} />
      <BodyPageFourView width={width} />
      <BodyPageFiveView width={width} />
      <Footer width={width} />
    </div>
  );
}

export default App;

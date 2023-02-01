import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Body4 from "./components/Body4";
import Body5 from "./components/Body5";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AppTheme from "./theme/AppTheme";

function App() {
  return (
    <>
      <AppTheme>
        <NavBar />
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        <Body5 />
        <Footer />
      </AppTheme>
    </>
  );
}

export default App;

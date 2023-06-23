import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Menu></Menu>
        <Footer openHour={12} closeHour={22}></Footer>
      </div>
    </>
  );
}

export default App;

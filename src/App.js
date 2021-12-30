import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <FeedbackItem />
        </div>
      </div>
    </>
  );
}

export default App;

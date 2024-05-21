import ListGroup from "./components/ListGroup";
import CardGroups from "./components/CardGroups";
import NoteInputForm from "./components/NoteInputForm";

function App() {
  return (
    <div className="container px-4 text-center">
      <div className="row gx-5">
        <div className="col">
          <NoteInputForm />
        </div>
        <div className="col">
          <CardGroups />
        </div>
      </div>
    </div>
  );
}

export default App;

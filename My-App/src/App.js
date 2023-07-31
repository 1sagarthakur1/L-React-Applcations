
import './App.css';
import Nevbar from './Components/Nevbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Nevbar title="TextUtils"/>
    <div className="container my-3">
       <TextForm heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;

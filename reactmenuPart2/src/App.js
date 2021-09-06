import './App.css';
import Buttons from './components/Buttons';

function App() {
  return (
    <div style={{marginTop:"10%"}}>
      <Buttons
        btn1={"JOIN US"}
        btn2={"LOGIN"}
        btn3={"SEARCH"}
        btn4={"HOME"}
        btn5={"SETTINGS"}
        btn6={"CONTACT US"}
        btn7={"HELP"}
        btn8={"DOWNLOAD"}
      />
    </div>
  );
}

export default App;

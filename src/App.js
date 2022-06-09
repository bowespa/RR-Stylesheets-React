import './App.css';
import Window from './Window';
import SeatingChart from './SeatingChart';

const homeText = {
  fontSize: "50px",
  textAlign: "center"
}

const imageStyle = {
  borderRadius: "60%",
  border: "5px solid purple"
};

function App() {
  return (
    <div style={homeText}>
      <h1>Styling in React</h1>
      <img style={imageStyle} src='https://placekitten.com/200/300' alt='cute kitten' />
      <Window />
      <SeatingChart />
    </div>
  );
}

export default App;

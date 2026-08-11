import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:5000");
function App() {
    return <h1>Web Socket</h1>;
}

export default App;

import "./App.css";
import Profile from "./Components/profile";
import { globalData } from "./Components/global";
import Login from "./Components/login";
function App() {
    return (
        <div className="App">
            <globalData.Provider value="This is my data">
                <Profile />
                <Login />
            </globalData.Provider>
        </div>
    );
}

export default App;

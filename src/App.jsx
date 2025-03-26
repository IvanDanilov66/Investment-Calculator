import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => ({
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }));
    }

    return (
        <div className="min-h-screen bg-radial-dark text-teal-100">
            <Header />
            <UserInput userInput={userInput} onChange={handleChange} />
            {!inputIsValid && <p className="text-center text-red-400 mt-4">Please enter a valid duration</p>}
            {inputIsValid && <Results input={userInput} />}
        </div>
    );
}

export default App;

export default function UserInput({ onChange, userInput }) {
    return (
        <section className="bg-gradient-to-b from-teal-700 to-blue-800 p-6 max-w-xl mx-auto rounded-md shadow-lg">
            <div className="flex justify-evenly gap-6">
                <p className="flex flex-col">
                    <label className="uppercase text-xs font-bold font-robotoCondensed text-white">Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onChange("initialInvestment", event.target.value)}
                        className="w-full p-2 border border-teal-300 rounded bg-transparent text-teal-100 text-lg"
                    />
                </p>
                <p className="flex flex-col">
                    <label className="uppercase text-xs font-bold font-robotoCondensed text-white">Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => onChange("annualInvestment", event.target.value)}
                        className="w-full p-2 border border-teal-300 rounded bg-transparent text-teal-100 text-lg"
                    />
                </p>
            </div>
            <div className="flex justify-evenly gap-6 mt-4">
                <p className="flex flex-col">
                    <label className="uppercase text-xs font-bold font-robotoCondensed text-white">Expected Return (%)</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => onChange("expectedReturn", event.target.value)}
                        className="w-full p-2 border border-teal-300 rounded bg-transparent text-teal-100 text-lg"
                    />
                </p>
                <p className="flex flex-col">
                    <label className="uppercase text-xs font-bold font-robotoCondensed text-white">Duration (years)</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => onChange("duration", event.target.value)}
                        className="w-full p-2 border border-teal-300 rounded bg-transparent text-teal-100 text-lg"
                    />
                </p>
            </div>
        </section>
    );
}

import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    return (
        <table className="w-full max-w-5xl mx-auto mt-6 border-t-2 border-separate border-spacing-4 text-right">
            <thead>
            <tr className="text-sm font-robotoCondensed text-blue-400 uppercase">
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody className="text-blue-200 text-lg">
            {resultsData.map((yearData, index) => {
                const totalInterest =
                    yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                return (
                    <tr
                        key={yearData.year}
                    >
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

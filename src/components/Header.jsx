import logo from "../assets/investment.png";

export default function Header() {
    return (
        <header className="text-center my-12">
            <img src={logo} alt="logo showing a money bag" className="w-60 h-60 mx-auto" />
        </header>
    );
}

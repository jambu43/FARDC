import Logo from "../shared/logo"

function Header() {
    return (
        <header className="bg-white py-2 shadow">
            <div className="container">
                <Logo />
            </div>
        </header>
    )
}

export default Header
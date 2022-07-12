import logo from '../../Assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="ds-meta-logo-container">
            <img src={logo} alt="ds-meta"/>
                <h1>DSMeta</h1>
                <p> Desenvolvido por
                    <a href="https://github.com/AgnaldoSouza47"> Agnaldo</a>
                </p>

            </div>

        </header>

    )


}

export default Header
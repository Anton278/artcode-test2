import "./App.scss";
import "./assets/fonts/OrelegaOne/font-face.css";
import "./assets/fonts/Lato/font-face.css";
import logo from "./assets/img/logo.png";
import img from "./assets/img/img.png";

const App = () => {
    return (
        <>
            <header className="header">
                <img
                    src={logo}
                    alt="logo"
                    className="header__logo"
                    width={156}
                    height={50}
                />
                <nav>
                    <ul className="header__links">
                        <li className="header__link-item">
                            <a href="#" className="header__link">
                                about us
                            </a>
                        </li>
                        <li className="header__link-item">
                            <a href="#" className="header__link">
                                our servises
                            </a>
                        </li>
                        <li className="header__link-item">
                            <a href="#" className="header__link">
                                become a driver
                            </a>
                        </li>
                        <li className="header__link-item">
                            <a href="#" className="header__link">
                                dispatchers
                            </a>
                        </li>
                        <li className="header__link-item">
                            <a href="#" className="header__link">
                                contact us
                            </a>
                        </li>
                        <li className="header__btn-item">
                            <button type="button" className="header__btn">
                                TRACK SHIPMENT
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <h1 className="main__title">We are hiring!</h1>
                <h3 className="main__subtitle">
                    The road is your second home? Join us!
                </h3>
                <div className="grid-box">
                    <div className="grid-box__text">
                        <p>
                            We hire drivers from all across the United States,
                            promoting quality opportunities for hardworking
                            individuals of all backgrounds.
                        </p>
                        <p>
                            We require our drivers to have a minimum of two
                            years experience, knowing they have the skills and
                            reputation to successfully take on any special
                            requests we receive from our customers.
                        </p>
                    </div>
                    <img
                        src={img}
                        alt="img"
                        className="grid-box__img"
                        width={461}
                        // height={723}
                    />
                    <div className="grid-box__form">
                        <p className="grid-box__row">
                            <input type="text" placeholder="Name" />
                        </p>
                        <p className="grid-box__row">
                            <input type="number" placeholder="Phone" />
                        </p>
                        <p className="grid-box__row">
                            <select>
                                <option value="">
                                    Class a driving experience
                                </option>
                            </select>
                        </p>
                        <button className="grid-box__btn">SEND</button>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <h1 className="footer__title">
                    Or send all needed information directly to our HR department
                </h1>
                <button className="footer__btn">
                    APPLY NOW <img src="" alt="" />
                    <span className="btn-arrow"></span>
                </button>
            </footer>
        </>
    );
};

export default App;

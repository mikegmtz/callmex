import logo from "./assets/logo.png";
import Map from "./assets/usamex.png";
import Banner from "./assets/banner.png";
import Mobile from "./assets/mobile.png";
import styled, { css } from "styled-components";
import "./App.css";
const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  color: #8c11aa;
  font-family: "Nexa", sans-serif;
  font-weight: 700;
`;
const Title2 = styled.h2`
  font-size: 40px;
  text-align: center;
  color: #8c11aa;
  font-family: "Nexa", sans-serif;
  font-weight: 700;
  position: relative;
`;
const Button = styled.button`
  color: #fff;
  font-size: 23px;
  margin-top: 20px;
  padding: 0.25em 0;
  border-radius: 54px;
  background: #ffad3e;
  border: none;
  font-family: "Helvetica", sans-serif;
  font-weight: bold;
  width: 232px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65px;
  line-height: 25px;
`;
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);
const StyledLink = styled(Link)`
  color: #8c11aa;
  font-family: "Nexa", sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  top: 15px;
  display: flex;
    justify-content: flex-end;
`;
function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header ">
        {/* Contenido del header */}
        <div className="row container">
          <div className="col-9">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-3">
            <StyledLink>Contacto</StyledLink>
          </div>
        </div>
      </header>

      <main className="container mt-5">
        {/* Contenido del cuerpo */}
        <section>
          <div className="row">
            <div className="col-12 col-sm-6 text-align-left">
              <Title>
                Experience Unlimited <br></br>Calling Possibilities
              </Title>
              <p className="text">
                Make and receive local calls in Mexico from the comfort of your
                US phone. Say goodbye to costly international rates and hello to
                unlimited connections
              </p>

              <div>
                <Button>
                  BUY NOW
                  <small>Just US3$/month</small>
                </Button>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <img src={Map} className="App-Map img-fluid" alt="calls" />
            </div>
          </div>
        </section>
        {/* banner de página */}

        <section>
          <div className="row mt-5">
            <div className="col">
              <img src={Banner} className="App-Banner img-fluid" alt="calls" />
            </div>
          </div>
        </section>

        <section>
          {/* contenido destacado */}
          <div className="row mt-5">
            <div className="col-12">
              <Title2 className="h2">
                Answer on your US phone anytime anywhere
              </Title2>
            </div>
            <div className="col-12 col-sm-4">
              <img src={Mobile} className="App-Mobile img-fluid" alt="Answer" />
            </div>
            <div className="col-12 col-sm-8 text txt-top">
              <p>
                Introducing Call Mex, the revolutionary service that brings you
                seamless and hassle-free communication with your friends and
                family in Mexico. With unlimited call time and an affordable
                monthly fee, you can now make and receive local calls in Mexico
                right from your US phone.{" "}
              </p>
              <p>
                {" "}
                Whether it’s a landline or a mobile phone, Call Mex ensures that
                you stay connected without any limitations. Say goodbye to
                expensive international rates and hello to unlimited
                connections.
              </p>
            </div>
          </div>
        </section>
        <section>
          {/* Puntos importantes */}
          <div className="row mt-5 text">
            <div className="col-12 col-sm-4">
              <ul>
                <li>
                  <p>Unlimited call time- for an affordable monthly fee</p>
                </li>
                <li>
                  <p>Call them- and have then call you back</p>
                </li>
                <li>
                  <p>Easy to use App- to help manage your account </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-4">
              <ul>
                <li>
                  <p>No internet needed- on your, or the receiving side </p>
                </li>
                <li>
                  <p>One monthly rate- and no hidden or extra fees</p>
                </li>
                <li>
                  <p>Use any kind of phone- to make calls from anywhere </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-4">
              <ul>
                <li>
                  <p>
                    Uninterrupted connection- through high quality phone lines
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-5">
        {/* Contenido del pie de página */}
        <div className="row">
          <div className="col">
            <p>
              Even when you´re on the go, <strong>Call Mex gives you the flexibility you<br></br>
              need.</strong> Simply dial our dedicated local number in the US and <strong>we´ll<br></br>
              connect you instantly with your friends and family in Mexico.</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

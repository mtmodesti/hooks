import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";
import { UseStateComponent } from "../useState";

export const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="header">
              <p>Use State</p>

              <button onClick={() => fullpageApi.moveSectionDown()}>
                Seção abaixo
              </button>
            </div>

            <UseStateComponent />
          </div>
          <div className="section">
                  <p>Próximo hook - UseEffect</p>
                  <p> Ainda em construção</p>

            <button onClick={() => fullpageApi.moveSectionUp()}>
              Seção acima
            </button>

          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

import logoBsi from "../assets/logo-bsi.png";
import viteLogo from "/vite.svg";

function Logo() {
  return (
    <>
      <p>Ini Logo</p>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={logoBsi} className="logo react" alt="React logo" />
      </a>
    </>
  );
}

export default Logo;

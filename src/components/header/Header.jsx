import Styles from "./header.module.css";

function Header() {
  return (
    <header className={Styles.header}>
      <button className={Styles.headerButton}>
        <div className={Styles.headerImage}>
          <img src="" alt="" />
        </div>
      </button>
    </header>
  );
}

export default Header;

import React from "react";
import Heading from "./Heading/Heading";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    const { header, handleHeading, counter } = this.props;
    return (
      <>
        <Heading
          header={header}
          handleHeading={handleHeading}
          counter={counter}
        />
        <h1 className={styles["header"]}>CSS MODULE</h1>
        <h1 className={styles.header2}>CSS MODULE with ID</h1>
      </>
    );
  }
}

export default Header;

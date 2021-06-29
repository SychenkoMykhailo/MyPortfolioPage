import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import paths from "../../paths/paths";
export default function Navigation() {
  const { item, item__active, container, item__container } = styles;
  return (
    <>
      <div className={container}>
        {paths.map((path) => (
          <div className={item__container} key={path}>
            <NavLink
              exact
              className={item}
              activeClassName={item__active}
              to={`/${path}`}
            >
              {path}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

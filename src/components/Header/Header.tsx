import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Header: FC = () => {
  return (
    <>
      <header>
        <NavLink to="/">List of products</NavLink>
        <NavLink to="/add">Add product</NavLink>
      </header>
    </>
  );
};

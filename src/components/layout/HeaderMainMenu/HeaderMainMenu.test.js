import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainMenu from "./HeaderMainMenu";
import { BrowserRouter } from "react-router-dom";
import { renderWithRoute } from "../../../services/testUtils";

describe("<HeaderMainMenu />", () => {
  test("it should mount", () => {
    renderWithRoute(<HeaderMainMenu />);

    const categories = screen.getByText("Esplora");

    expect(categories).toBeInTheDocument();
  });

  test("Contribute should navigate to search", () => {
    render(
      <BrowserRouter>
        <HeaderMainMenu />
      </BrowserRouter>
    );

    const vocabularyNavLink = screen
      .getByText("Come contribuire")
      .closest(".nav-link");

    expect(vocabularyNavLink).toBeInTheDocument();
    expect(vocabularyNavLink).toHaveAttribute("href", "/how-to-contribute");
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

describe.skip("Smoke (surface-level) tests", () => {
  test("renders wish list header", () => {
    render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    );
    const linkElement = screen.getByText(/Wish List App/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders RUB", () => {
    render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    );
    const linkElement = screen.getByText(/rur/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders ADD", async () => {
    render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    );
    await waitFor(() => {
      const linkElement = screen.getAllByText(/add/i)[0];
      expect(linkElement).toBeInTheDocument();
    });
  });
});

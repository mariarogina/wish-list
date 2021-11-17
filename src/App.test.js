import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

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
  const linkElement = screen.getByText(/руб/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders SUM", () => {
  render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
  const linkElement = screen.getByText(/cумма:/i);
  expect(linkElement).toBeInTheDocument();
});

// test("renders add button", () => {
//   render(
//     <Provider store={store}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </Provider>
//   );
//   const linkElement = screen.getByText(/добавить/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders element ", () => {
  render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
  const linkElement = screen.querySelector(
    "#root > div > div:nth-child(1) > div > ul > li:nth-child(1) > div"
  );
  expect(linkElement).toBeInTheDocument();
});

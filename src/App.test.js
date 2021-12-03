import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  createEvent,
} from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

//UI test
describe.only("UI tests", () => {
  const beforeEach = () =>
    render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    );
  //render here
  test("renders wish list header", () => {
    beforeEach();
    const linkElement = screen.getByText(/Wish List App/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders RUB", () => {
    beforeEach();
    const linkElement = screen.getByText(/rur/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders ADD, after click renders DELETE", async () => {
    beforeEach();
    let linkElement;

    await waitFor(() => {
      linkElement = screen.getAllByText(/add/i)[0];
      expect(linkElement).toBeInTheDocument();
    });

    //create event createEvent
    const clickEvent = createEvent.click(linkElement, { button: 0 });

    fireEvent(linkElement, clickEvent);

    await waitFor(() => {
      linkElement = screen.getAllByText(/in wishlist/i)[0];
      expect(linkElement).toBeInTheDocument();
    });
  });

  test.only("renders TOTAL PRICE after item was added to wish list", async () => {
    beforeEach();
    //test how total price changes
    let totalpriceElement;

    //no waitFor for this expect to run first

    totalpriceElement = screen.getByTestId("total_price");
    expect(totalpriceElement).toHaveTextContent("0");

    await waitFor(() => {
      const linkElements = screen.getAllByText(/add/i);
      const clickEvent_one = createEvent.click(linkElements[0], { button: 0 });
      const clickEvent_two = createEvent.click(linkElements[1], { button: 0 });
      fireEvent(linkElements[0], clickEvent_one);
      fireEvent(linkElements[1], clickEvent_two);
    });

    await waitFor(() => {
      totalpriceElement = screen.getByTestId("total_price");
      expect(totalpriceElement).toHaveTextContent("144");
    });
  });
});

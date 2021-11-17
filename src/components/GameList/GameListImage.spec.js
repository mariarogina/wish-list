import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import GameListImage from "./GameListImage";
import { act } from "react-dom/test-utils";

const mockImage = {
  cover:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
};
const mockBrokenImage = {
  cover: "http://s.gama-gama.ru/fullsize/f5a4b5577e4fe62039d4d8712d007644.jpg",
};

test("renders image", () => {
  render(<GameListImage item={mockImage} />);

  const linkElement = screen.queryByAltText(/gameImg/i);
  expect(linkElement).toHaveAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  );
});

it("should render not found image when  image is NOT found", () => {
  render(<GameListImage item={mockBrokenImage} />);

  const linkElement = screen.queryByAltText(/gameImg/i);

  expect(linkElement).toHaveAttribute(
    "src",
    "http://s.gama-gama.ru/fullsize/f5a4b5577e4fe62039d4d8712d007644.jpg"
  );

  fireEvent(linkElement, new Event("error"));

  expect(linkElement).toHaveAttribute(
    "src",
    "https://www.cubexled.com/assets/img/no_image.jpg"
  );
});

import { fireEvent, render, screen } from "@testing-library/react";
import { FollowingButtonComponent } from "features/following/button";

describe("FollowingButton", () => {
  it("renders correctly when favved", () => {
    const onToggleFavorite = jest.fn();
    render(<FollowingButtonComponent isFav onToggleFavorite={onToggleFavorite} />);
    expect(screen.getByAltText("is_favorite")).toBeInTheDocument();
  });
  it("renders correctly when not favved", () => {
    const onToggleFavorite = jest.fn();
    render(<FollowingButtonComponent isFav={false} onToggleFavorite={onToggleFavorite} />);
    expect(screen.getByAltText("is_not_favorite")).toBeInTheDocument();
  });

  it("calls correctly the onToggleFavorite", () => {
    const onToggleFavorite = jest.fn();
    render(<FollowingButtonComponent isFav={false} onToggleFavorite={onToggleFavorite} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onToggleFavorite).toHaveBeenCalledWith(true);
  });
});

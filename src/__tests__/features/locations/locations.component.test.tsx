import { LocationsComponent } from "features/locations";
import { customRender } from "utils/test-utils";
import { screen, waitFor } from "@testing-library/react";

describe("LocationsComponent", () => {
  it("should render loading by default", () => {
    customRender(<LocationsComponent />);
    expect(screen.getByText("Loading interplanetary locations...")).toBeInTheDocument();
  });

  it("should render error when error", async () => {
    customRender(<LocationsComponent />);

    expect(
      await screen.findByText("Error when loading. Please try again later.")
    ).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByText("Error when loading. Please try again later.")).toBeInTheDocument();
    // });
  });
});

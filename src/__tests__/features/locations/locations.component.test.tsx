import { LocationsComponent } from "features/locations";
import { customRender } from "utils/test-utils";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { server } from "mocks/server";
import { errorHandlers } from "mocks/errorHandlers";
import { LocationsTableProps } from "features/locations/table";

// const mockChildComponent = jest.fn();
// jest.mock(
//   "features/locations/table/locations-table.component",
//   () => (props: LocationsTableProps) => {
//     mockChildComponent(props);
//     return <div>Componente</div>;
//   }
// );

describe("LocationsComponent", () => {
  it("should render loading by default", () => {
    customRender(<LocationsComponent />);
    expect(screen.getByText("Loading interplanetary locations...")).toBeInTheDocument();
  });

  it("should render error when error", async () => {
    server.use(...errorHandlers);

    customRender(<LocationsComponent />);

    expect(
      await screen.findByText("Error when loading. Please try again later.")
    ).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByText("Error when loading. Please try again later.")).toBeInTheDocument();
    // });
  });

  it("should render locations when success", async () => {
    customRender(<LocationsComponent />);
    expect(await screen.findByText("Earth (C-137)")).toBeInTheDocument();
    expect(await screen.findByText("Dimension C-137")).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByText("Earth (C-137)")).toBeInTheDocument();
    //   expect(screen.getByText("Dimension C-137")).toBeInTheDocument();
    // });
  });

  it("should bring new data when paginating", async () => {
    customRender(<LocationsComponent />);
    const [button] = await screen.findAllByText("Next");
    fireEvent.click(button);
    expect(await screen.findByText("Abadango")).toBeInTheDocument();
    expect(await screen.findByText("unknown")).toBeInTheDocument();
  });

  // it("should bring new data when paginating v2", async () => {
  //   customRender(<LocationsComponent />);
  //   const [button] = await screen.findAllByText("Next");
  //   fireEvent.click(button);

  //   await waitFor(() => {
  //     expect(mockChildComponent).lastCalledWith(
  //       expect.objectContaining({
  //         locations: [
  //           {
  //             id: 2,
  //             name: "Abadango",
  //             type: "Cluster",
  //             dimension: "unknown",
  //             residents: ["https://rickandmortyapi.com/api/character/6"]
  //           }
  //         ]
  //       })
  //     );
  //   });
  // });
});

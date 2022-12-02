import { LocationsComponent } from "features/locations";
import { customRender } from "utils/test-utils";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { server } from "mocks/server";
import { errorHandlers } from "mocks/errorHandlers";

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


  it("get data containing Abdango", async()=> {
    customRender(<LocationsComponent/>)
    const input = screen.getByPlaceholderText("Search...")
    userEvent.type(input, "Abdango");
    expect(await screen.findByText("Abadango")).toBeInTheDocument();
  })

  /**
   * 1. Renderizar App
   * 2. Buscar el input
   * 3. Generar el evento onChange en el input
   * 4. Cambiar nuestro handler para que retorne data distinta, dependiendo del query param "name"
   * 5. Expect screen.findByText("Nueva data")
   */
});

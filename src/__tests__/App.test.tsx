import App from "App";
import { screen, waitFor } from "@testing-library/react";
import { customRender } from "utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should filter table data according to searchbar input", async () => {
    customRender(<App />);
    const input = screen.getByPlaceholderText("Search...");
    userEvent.type(input, "Abadango");
    // 1. ---------------------------------------------------------
    // No necesito hacer un waitFor porque ya sabemos que se esperó por el primer render
    // significa que Earth no tendría que estar en el DOM en ese punto
    expect(await screen.findByText("Abadango")).toBeInTheDocument();
    expect(screen.queryByText("Earth (C-137)")).not.toBeInTheDocument();

    // 2. ---------------------------------------------------------
    // Acá como no tenemos un await inicial, si quisieramos SOLAMENTE revisar que
    // Earth no se encuentre en el DOM luego de la búsqueda, tendría que esperar
    // await waitFor(() => {
    //   expect(screen.queryByText("Earth (C-137)")).not.toBeInTheDocument();
    // });
  });
});

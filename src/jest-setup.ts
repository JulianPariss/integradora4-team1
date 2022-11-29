import "@testing-library/jest-dom";
import React from "react";
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
global.React = React; // this also works for other globally available libraries

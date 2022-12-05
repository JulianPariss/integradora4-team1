import "@testing-library/jest-dom";
import React from "react";
import { server } from "./mocks/server";
import { fetch, Headers, Request, Response } from "cross-fetch";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
global.React = React; // this also works for other globally available libraries

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;

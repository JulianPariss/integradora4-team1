import { rest } from "msw";

export const errorHandlers = [
  rest.get("https://rickandmortyapi.com/api/location/", (_, res, ctx) => res.once(ctx.status(403)))
];

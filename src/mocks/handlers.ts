import { rest } from "msw";

export const handlers = [
  rest.get("https://rickandmortyapi.com/api/location/", (req, res, ctx) => {
    if (req.url.searchParams.get("page") !== "1") {
      return res(
        ctx.json({
          info: {
            count: 108,
            pages: 6,
            next: "https://rickandmortyapi.com/api/location/?page=2",
            prev: ""
          },
          results: [
            {
              id: 2,
              name: "Abadango",
              type: "Cluster",
              dimension: "unknown",
              residents: ["https://rickandmortyapi.com/api/character/6"]
            }
          ]
        })
      );
    }

    return res(
      ctx.json({
        info: {
          count: 108,
          pages: 6,
          next: "https://rickandmortyapi.com/api/location/?page=2",
          prev: ""
        },
        results: [
          {
            id: 1,
            name: "Earth (C-137)",
            type: "Planet",
            dimension: "Dimension C-137",
            residents: ["https://rickandmortyapi.com/api/character/38"]
          }
        ]
      })
    );
  }),
  rest.get("https://rickandmortyapi.com/api/location", (req, res, ctx) => {
    if (req.url.searchParams.get("name") == "Abdango") {
      return res(
        ctx.json({
          info: {
            count: 108,
            pages: 6,
            next: "https://rickandmortyapi.com/api/location/?page=2",
            prev: ""
          },
          results: [
            {
              id: 2,
              name: "Abadango",
              type: "Cluster",
              dimension: "unknown",
              residents: ["https://rickandmortyapi.com/api/character/6"]
            }
          ]
        })
      );
    }

    return res(
      ctx.json({
        info: {
          count: 108,
          pages: 6,
          next: "https://rickandmortyapi.com/api/location/?page=2",
          prev: ""
        },
        results: [
          {
            id: 1,
            name: "Earth (C-137)",
            type: "Planet",
            dimension: "Dimension C-137",
            residents: ["https://rickandmortyapi.com/api/character/38"]
          }
        ]
      })
    );
  })
];

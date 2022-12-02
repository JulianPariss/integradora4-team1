import { rest } from "msw";

export const handlers = [
  rest.get("https://rickandmortyapi.com/api/location/", (req, res, ctx) => {
    const paginationTest = req.url.searchParams.get("page") !== "1";
    const filterNameTest = req.url.searchParams.get("name") == "Abadango";

    if (paginationTest || filterNameTest) {
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

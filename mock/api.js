/* http://mockjs.com/examples.html */

import { mock, Random } from "mockjs";

export default {
  "GET /api/users": mock({
    "data|10": [
      {
        id: () => Random.increment(),
        name: () => Random.cname(),
        age: () => Random.integer(15, 60),
        address: () => Random.county(true).replace(/[ -]/g, ""),
        idcard: () => Random.id(),
        birthday: () => Random.date(),
        avatar() {
          return Random.image("100x100", "#50B347", "#FFF", "png", this.name.substr(-1, 1));
        },
      },
    ],
  }),

  "GET /api/users/1": mock({
    id: () => Random.increment(),
    name: () => Random.cname(),
    age: () => Random.integer(15, 60),
    address: () => Random.county(true),
    idcard: () => Random.id(),
    birthday: () => Random.date(),
    avatar() {
      return Random.image("100x100", "#50B347", "#FFF", "png", this.name.substr(-1, 1));
    },
  }),
};

import { Todo } from './use-objectid-false';

import * as mongodb from 'mongodb';

const id1 = new mongodb.ObjectId();
const id2 = new mongodb.ObjectId();

describe('useObjectId=false', () => {
  it('generates types that compile and encode', () => {
    const output = Todo.encode({
      id: '6883ed6e-bd0d-4817-ba58-c2a53c73edc2',
      oid: { value: id1.toString() },
      repeatedOid: [{ value: id1.toString() }, { value: id2.toString() }],
      mapOfOids: {
        id1: { value: id1.toString() },
        id2: { value: id2.toString() },
      },
    }).finish();

    expect(Todo.decode(output)).toMatchInlineSnapshot(`
      Object {
        "id": "6883ed6e-bd0d-4817-ba58-c2a53c73edc2",
        "mapOfOids": Object {
          "id1": Object {
            "value": "${id1.toString()}",
          },
          "id2": Object {
            "value": "${id2.toString()}",
          },
        },
        "oid": Object {
          "value": "${id1.toString()}",
        },
        "optionalOid": undefined,
        "repeatedOid": Array [
          Object {
            "value": "${id1.toString()}",
          },
          Object {
            "value": "${id2.toString()}",
          },
        ],
      }
    `);

    expect(Todo.toJSON(Todo.decode(output))).toMatchInlineSnapshot(`
      Object {
        "id": "6883ed6e-bd0d-4817-ba58-c2a53c73edc2",
        "mapOfOids": Object {
          "id1": Object {
            "value": "${id1.toString()}",
          },
          "id2": Object {
            "value": "${id2.toString()}",
          },
        },
        "oid": Object {
          "value": "${id1.toString()}",
        },
        "repeatedOid": Array [
          Object {
            "value": "${id1.toString()}",
          },
          Object {
            "value": "${id2.toString()}",
          },
        ],
      }
    `);
  });
});

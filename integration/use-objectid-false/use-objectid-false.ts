/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = '';

export interface ObjectId {
  value: string;
}

export interface Todo {
  id: string;
  oid: ObjectId | undefined;
  repeatedOid: ObjectId[];
  optionalOid?: ObjectId | undefined;
  mapOfOids: { [key: string]: ObjectId };
}

export interface Todo_MapOfOidsEntry {
  key: string;
  value: ObjectId | undefined;
}

function createBaseObjectId(): ObjectId {
  return { value: '' };
}

export const ObjectId = {
  encode(message: ObjectId, writer: Writer = Writer.create()): Writer {
    if (message.value !== '') {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ObjectId {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectId {
    return {
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: ObjectId): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectId>, I>>(object: I): ObjectId {
    const message = createBaseObjectId();
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseTodo(): Todo {
  return { id: '', oid: undefined, repeatedOid: [], optionalOid: undefined, mapOfOids: {} };
}

export const Todo = {
  encode(message: Todo, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.oid !== undefined) {
      ObjectId.encode(message.oid, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.repeatedOid) {
      ObjectId.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.optionalOid !== undefined) {
      ObjectId.encode(message.optionalOid, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.mapOfOids).forEach(([key, value]) => {
      Todo_MapOfOidsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Todo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTodo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.oid = ObjectId.decode(reader, reader.uint32());
          break;
        case 3:
          message.repeatedOid.push(ObjectId.decode(reader, reader.uint32()));
          break;
        case 4:
          message.optionalOid = ObjectId.decode(reader, reader.uint32());
          break;
        case 5:
          const entry5 = Todo_MapOfOidsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.mapOfOids[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Todo {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      oid: isSet(object.oid) ? ObjectId.fromJSON(object.oid) : undefined,
      repeatedOid: Array.isArray(object?.repeatedOid) ? object.repeatedOid.map((e: any) => ObjectId.fromJSON(e)) : [],
      optionalOid: isSet(object.optionalOid) ? ObjectId.fromJSON(object.optionalOid) : undefined,
      mapOfOids: isObject(object.mapOfOids)
        ? Object.entries(object.mapOfOids).reduce<{ [key: string]: ObjectId }>((acc, [key, value]) => {
            acc[key] = ObjectId.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: Todo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.oid !== undefined && (obj.oid = message.oid ? ObjectId.toJSON(message.oid) : undefined);
    if (message.repeatedOid) {
      obj.repeatedOid = message.repeatedOid.map((e) => (e ? ObjectId.toJSON(e) : undefined));
    } else {
      obj.repeatedOid = [];
    }
    message.optionalOid !== undefined &&
      (obj.optionalOid = message.optionalOid ? ObjectId.toJSON(message.optionalOid) : undefined);
    obj.mapOfOids = {};
    if (message.mapOfOids) {
      Object.entries(message.mapOfOids).forEach(([k, v]) => {
        obj.mapOfOids[k] = ObjectId.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Todo>, I>>(object: I): Todo {
    const message = createBaseTodo();
    message.id = object.id ?? '';
    message.oid = object.oid !== undefined && object.oid !== null ? ObjectId.fromPartial(object.oid) : undefined;
    message.repeatedOid = object.repeatedOid?.map((e) => ObjectId.fromPartial(e)) || [];
    message.optionalOid =
      object.optionalOid !== undefined && object.optionalOid !== null
        ? ObjectId.fromPartial(object.optionalOid)
        : undefined;
    message.mapOfOids = Object.entries(object.mapOfOids ?? {}).reduce<{ [key: string]: ObjectId }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ObjectId.fromPartial(value);
        }
        return acc;
      },
      {}
    );
    return message;
  },
};

function createBaseTodo_MapOfOidsEntry(): Todo_MapOfOidsEntry {
  return { key: '', value: undefined };
}

export const Todo_MapOfOidsEntry = {
  encode(message: Todo_MapOfOidsEntry, writer: Writer = Writer.create()): Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ObjectId.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Todo_MapOfOidsEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTodo_MapOfOidsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ObjectId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Todo_MapOfOidsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? ObjectId.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Todo_MapOfOidsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ObjectId.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Todo_MapOfOidsEntry>, I>>(object: I): Todo_MapOfOidsEntry {
    const message = createBaseTodo_MapOfOidsEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null ? ObjectId.fromPartial(object.value) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

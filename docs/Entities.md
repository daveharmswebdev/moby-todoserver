# Todos By Region

## Create / Edit Form

## Todo

```ts
interface ITodo {
  id: number;
  regionId: number;
  name: string;
  description: string;
  status: Status,
  doerId: number
}
```

## Doer

```ts
interface IDoer {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
}
```

## Region

```ts
interface IRegion {
  id: number;
  name: string;
}
```

## Status

```ts
enum Status {
  NEW,
  IN_PROGRESS,
  COMPLETE,
  ABANDONED
}
```
type MockApiRespinses1<T> = { status: "success"; data: T; timestamp: Date } | { status: "error"; error: string; timestamp: Date };

let response: MockApiRespinses1<string> = {
  status: "success",
  data: "test",
  timestamp: new Date(),
};

let response2: MockApiRespinses1<string> = {
  status: "error",
  error: "There was an error",
  timestamp: new Date(),
};

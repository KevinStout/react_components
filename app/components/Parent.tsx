import { Child } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child name="jane" gender="female" weight={300} />
      <Child name="joe" gender="male" salary={100000} />
    </div>
  );
};

export { Parent };

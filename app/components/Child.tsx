// this is combining more than one type using the & operator
// this is a common pattern in TypeScript
// The or operator | is used to conditionaly combine types
type Props = {
  name: string;
} & (MaleProps | FemaleProps);

type MaleProps = {
  gender: "male";
  salary: number;
};

type FemaleProps = {
  gender: "female";
  weight: number;
};

// this is using a type guard to conditionally render the salary or weight
// In TypeScript, the type guards are used to determine a variable's type, often inside a conditional or functional block. The type guards usually take the variable and return a Boolean value or the variable type.
const Child = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.gender}</h1>
      <h1>{props.gender === "male" ? props.salary : props.weight}</h1>
      <br />
    </div>
  );
};

export { Child };

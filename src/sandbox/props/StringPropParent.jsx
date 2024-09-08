import StringPropChild from "./StringPropChild";

export default function StringPropParent() {
  let string = "Text from the father";
  return <StringPropChild data={string} />;
}
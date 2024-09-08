import { node } from "prop-types";

export default function ChildComponent({ data, children }) {
  return (
    <div>
      {data} {children}
    </div>
  );
}

ChildComponent.propTypes = {
  data: node,
  children: node,
};

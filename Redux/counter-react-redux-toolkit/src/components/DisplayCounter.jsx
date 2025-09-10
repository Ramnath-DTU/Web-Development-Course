import { useSelector } from "react-redux";

export default function DisplayCounter() {
  const { counterVal } = useSelector((store) => store.counter);
  // const counterObj = useSelector((store) => store.counter);
  // const counter = counterObj.counterVal;
  return <p className="lead mb-4">Counter current value: {counterVal}</p>;
}

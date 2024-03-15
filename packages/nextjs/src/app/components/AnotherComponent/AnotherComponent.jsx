import { app } from "@angulareact-poc/angularjs-legacy";
import { angularToReact } from "angulareact";

const AnotherAngularComponent = angularToReact('another-component', app)

export default function AnotherComponent({ title, onTitleChange }) {
  return (<AnotherAngularComponent title={title} onTitleChange={onTitleChange} />);
}

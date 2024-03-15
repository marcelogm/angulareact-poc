import { app } from "@angulareact-poc/angularjs-legacy";
import { angularToReact } from "angulareact";

const TestDirective = angularToReact('test-directive', app, {
  onTitleChange: ['newTitle']
})

export default function TestComponent({ title, onTitleChange }) {
  return (<TestDirective title={title} onTitleChange={onTitleChange} />);
}



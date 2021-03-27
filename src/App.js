import "./App.css";
import { default as ComponentsApp } from "./components/App";
import { default as EffectsApp } from "./effects/App";
import { default as PropsApp } from "./props/App";
import { default as StateApp } from "./state/App";

function App() {
  return (
    <div class="main">
      <h1>TuffyHacks Intro to React</h1>
      <a href="https://www.tuffyhacks.com/">[slides]</a>
      <p>
        You can see the code samples for each of the portions mentioned in the
        slides at:
        <ul>
          <li>
            <strong>Components:</strong> <code>src/components/App.js</code>
            <ComponentsApp />
          </li>
          <li>
            <strong>Props:</strong> <code>src/props/App.js</code>
            <PropsApp />
          </li>
          <li>
            <strong>State:</strong> <code>src/state/App.js</code>
            <StateApp />
          </li>
          <li>
            <strong>Effects:</strong> <code>src/effects/App.js</code>
            <EffectsApp />
          </li>
        </ul>
      </p>
    </div>
  );
}

export default App;

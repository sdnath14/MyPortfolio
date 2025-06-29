import React from "react";
import "./ConsoleOutput.css";

const ConsoleOutput = () => {
  return (
    <div className="console-wrapper">
      <code className="console-line">
        <span className="code-keyword">System</span>
        <span className="code-dot">.</span>
        <span className="code-object">out</span>
        <span className="code-dot">.</span>
        <span className="code-func">println</span>
        <span className="code-bracket">("</span>
        <span className="string">
          <span className="greeting en">Hello World!</span>
          <span className="greeting es">¡Hola Mundo!</span>
          <span className="greeting de">Hallo Welt!</span>
          <span className="greeting it">Ciao Mondo!</span>
        </span>
        <span className="code-bracket">");</span>
      </code>
    </div>
  );
};

export default ConsoleOutput;

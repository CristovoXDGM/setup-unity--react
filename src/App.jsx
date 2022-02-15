import "./App.css";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/assets/KeepBeating.loader.js",
  dataUrl: "/assets/KeepBeating.data.unityweb",
  frameworkUrl: "/assets/KeepBeating.framework.js.unityweb",
  codeUrl: "/assets/KeepBeating.wasm.unityweb",
});

function App() {
  return (
    <div>
      <Unity
        style={{
          width: "80%",

          justifySelf: "center",
          alignSelf: "center",
        }}
        unityContext={unityContext}
      />
    </div>
  );
}

export default App;

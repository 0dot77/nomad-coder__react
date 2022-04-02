import { useEffect } from "react";

function Hello() {
  //   function destroyedFn() {
  //     console.log("bye :(");
  //   }
  //   function effetFn() {
  //     console.log("created");
  //     return destroyedFn;
  //   }
  useEffect(() => {
    console.log("hi");
    return () => {
      console.log("bye");
    };
  }, []);
  return <h1>Hello</h1>;
}
export default Hello;

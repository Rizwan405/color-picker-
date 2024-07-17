import Values from "values.js";
import ColorList from "./ColorList";
import Form from "./Form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  function colorValue(color) {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <main>
      <ToastContainer position="top-center" />
      <Form colorValue={colorValue} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;

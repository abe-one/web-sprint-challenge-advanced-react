import { useState } from "react";

// write your custom hook here to control your checkout form
const useForm = (initialInputs) => {
  //use state
  const [inputs, setInputs] = useState(initialInputs);

  const handleInputs = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const resetInputs = (e) => setInputs(initialInputs);

  return [inputs, handleInputs, resetInputs];
};

export default useForm;

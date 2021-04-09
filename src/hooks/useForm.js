import useLocalStorage from "./useLocalStorage";

// write your custom hook here to control your checkout form
const useForm = (formKey, initialInputs) => {
  //use state
  const [inputs, setInputs] = useLocalStorage(formKey, initialInputs);

  const handleInputs = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const resetInputs = (e) => setInputs(initialInputs);

  return [inputs, handleInputs, resetInputs];
};

export default useForm;

import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const isPenging = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPenging.value = true;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    isPenging.value = false;
    return res;
  } catch (err) {
    console.log(err.value);
    error.value = "Incorrect login credentials";
    isPenging.value = false;
  }
};

const useLogin = () => {
  return { error, login, isPenging };
};

export default useLogin;

import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const isPenging = ref(false);
const signup = async (email, password, displayName) => {
  error.value = null;
  isPenging.value = true;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete the signup!");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    isPenging.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPenging.value = false;
  }
};

const useSignup = () => {
  return { error, signup, isPenging };
};

export default useSignup;

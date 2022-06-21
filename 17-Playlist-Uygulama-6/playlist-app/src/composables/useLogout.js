import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const isPenging = ref(false);

const logout = async () => {
  error.value = null;
  isPenging.value = true;

  try {
    await projectAuth.signOut();
    isPenging.value = false;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPenging.value = false;
  }
};

const useLogout = () => {
  return { logout, error, isPenging };
};

export default useLogout;

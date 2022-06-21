import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null);
  const isPenging = ref(false);

  const addDoc = async (doc) => {
    error.value = null;
    isPenging.value = true;
    try {
      const res = await projectFirestore.collection(collection).add(doc);
      isPenging.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
      isPenging.value = false;
    }
  };
  return { error, addDoc, isPenging };
};

export default useCollection;

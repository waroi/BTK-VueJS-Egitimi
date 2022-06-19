import { ref } from "vue";

const getContentsFetch = () => {
  const contents = ref([]);
  const err = ref(null);
  const getContents = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      contents.value = await data.json();

      if (!data.ok) {
        throw new Error("Verilere Erişilemedi!");
      }
    } catch (error) {
      err.value = error.message;
    }
  };
  return { contents, err, getContents };
};

export default getContentsFetch;

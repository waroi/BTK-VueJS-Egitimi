<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Content:</label>
    <textarea v-model="content" required></textarea>
    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { fb } from "../firebase/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const content = ref("");
    const id = Date.now();
    const router = useRouter();
    function handleSubmit() {
      const post = {
        title: title.value,
        content: content.value,
        id: id,
      };
      const db = getFirestore(fb);
      const fbRef = collection(db, "posts");
      addDoc(fbRef, post);
      router.push({
        name: "Home",
      });
    }

    return { title, content, handleSubmit };
  },
};
</script>

<style>
form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #76dd78;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
}
</style>

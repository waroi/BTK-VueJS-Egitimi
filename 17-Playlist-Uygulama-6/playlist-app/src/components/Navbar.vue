<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'home' }"
        ><img src="@/assets/logo.png" alt=""
      /></router-link>
      <h1><router-link :to="{ name: 'home' }">PlayList</router-link></h1>
      <div class="links">
        <div v-if="user">
          <span>Hi, {{ user.displayName }}</span>
          <router-link class="btn" :to="{ name: 'createplaylist' }"
            >Create Playlist</router-link
          >
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { user } = getUser();
    const { logout } = useLogout();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("user logged out");
      router.push({ name: "login" });
    };
    return { handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: #fff;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-right: 16px;
  padding-right: 16px;
  border-right: 1px solid #ccc;
}
</style>

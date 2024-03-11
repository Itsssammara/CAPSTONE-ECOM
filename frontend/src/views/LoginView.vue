<template>
  <div class="login">
    <h1>Login</h1>
    <form action="/signup" method="POST">
    <div class="data">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="data">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
    </div>
    <router-link to="/signup">
      <button type="submit">Login </button>
    </router-link>
    <div class="regist-link">Don't have an account?
     <router-link to="/signup">Sign up now</router-link>
    </div>
    
    </form>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
.login{
  background-color: rgb(226, 165, 112);
  height: 100vh;
}
.login form{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: block;
  background: white;
  width: 410px;
  padding: 30px;
}
.login form .data{
  height: 45px;
  width: 100%;
  margin: 40px 0;
}
form .data label{
  font-size: 18px;
}
form .data input {
  height: 100%;
  widows: 100%;
  padding-left: 10px;
  font-size: 17px;
  border: 1px solid silver;
}
form .data input:focus{
  border-color: brown;
  border-bottom-width: 2px;
}

</style>
<template>
  <div class="login">
    <h1>Login</h1>
    <form action="/signup" method="POST">
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
    </div>
    <router-link to="/signup">
      <button type="submit">Login </button>
    </router-link>
    
    </form>
  </div>
</template>

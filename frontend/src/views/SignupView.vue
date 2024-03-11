<template>
  <div class="signup">
    <h1>Create Account</h1>
    <form action="/signup" method="POST">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
    </div>
    <router-link to="/login">
      <button type="submit">Register </button>
    </router-link>
    
    </form>
  </div>
</template>

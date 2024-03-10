    <template>
       
    <div class="sidebar" :style="{ width: sidebarWidth + 'px' }">
    <button class="close-btn" @click="closeNav">&times;</button><br><br>
    <router-link to="/" class="sidebar-link">Home</router-link>
    <router-link to="/about" class="sidebar-link">About</router-link>
    <router-link to="/products" class="sidebar-link">Products</router-link>
    <router-link to="/checkout" class="sidebar-link">Checkout</router-link>
    <router-link to="/admin" class="sidebar-link">Admin</router-link>
    <router-link to="/login" class="sidebar-link">Login</router-link>
    <router-link to="/signup" class="sidebar-link">Sign Up</router-link>
    <router-link to="/contact" class="sidebar-link">Contact</router-link>
    </div>
    <div class="content" :style="{ marginLeft: contentMargin + 'px' }">
    <div class="navbar">
        <button class="open-btn" @click="openNav">&#9776;</button>
        <div class="logo-container">
        <img src="https://i.postimg.cc/kGLpVP38/thelogo.png" alt="Logo" class="logo-img">
    </div>
    </div>
    </div>
    
    <router-view/>
    
    </template>

    <script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: false, // Initially sidebar is closed
      sidebarWidth: 0,
      contentMargin: 0
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.openNav();
      } else {
        this.closeNav();
      }
    },
    openNav() {
      this.sidebarWidth = 250; 
      this.contentMargin = 20; 
    },
    closeNav() {
      this.sidebarWidth = 0;
      this.contentMargin = 0;
    }
  }
};
</script>

  <style>
  .navbar {
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  align-items: center; /* Center vertically */
  }
.open-btn{
    color: #000000;/*color of open btn */
    margin-left: 20px;
}

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  .sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #5a1e1e;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  .sidebar a {
    padding: 10px 15px;
    text-decoration: none;
    font-size: 25px;
    color: #A04848;
    display: block;
    transition: 0.3s;
  }
  .sidebar a:hover {
    color: #f9dfdf;
  }
  .sidebar .close-btn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  .content {
    transition: margin-left 0.5s;
    padding: 5px;
  }
  .open-btn {
    font-size: 20px;
    cursor: pointer;
    border: none;
    background: none;
  }
  .open-btn:hover {
    color: #000000;
  }
  .sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #E4B8B8;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  .sidebar .close-btn {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 36px;
    margin-left: 50px;
    color: rgb(255, 255, 255);/*adjusts color of close btn*/
    background: none;
    border: none;
    cursor: pointer;
  }
  .sidebar .close-btn:hover {
    color: #ccc;
  }
  .navbar {
    background-color: #ffffff; /* Dark color for the navbar background */
    padding: 0.5rem 0.1rem; /* Add padding to the navbar */
  }
  .navbar-brand {
    margin-right: auto; /* Make the brand logo push to the left */
  }
  .nav-link {
    color: #D4D4D4; /* Light color for the link text */
    text-decoration: none;
    padding: 0.5rem 1rem; /* Add padding to the links */
    margin-right: 0.5rem; /* Add margin between the links */
    border-radius: 0.25rem; /* Add a slight border-radius to the links */
    transition: background-color 0.3s; /* Smooth background color transition */
  }
  .nav-link:hover {
    background-color: transparent; /* Light blue color on hover */
  }
  .router-link-exact-active {
    background-color: #EAEFF8; /* Light blue color for the active link */
  }
  .router-link-exact-active:hover {
    background-color: #FFFFFF; /* Keep the same color on hover for the active link */
  }
  .router-link-exact-active .nav-link {
    color: #c3b6b6; /* White color for the active link text */
  }
  .logo-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: auto; /* Set the height of the logo */
  width: 100%; /* Adjust the width as needed */
  margin-top: 10px; /* Optional: Adjust margin top */
}

.logo-img {
  height: 40px; /* Set the height of the logo */
  width: auto; /* Allow the width to adjust automatically */
  margin-right: 90px; /* Optional: Adjust margin right */
  margin-left: 30px; /* Optional: Adjust margin left */
}

  /* Adjust navbar for medium and small devices (<992px) */
  @media (max-width: 991.98px) {
    .navbar {
      padding: 0.2rem 0.1rem; /* Reduce padding for smaller screens */
    }
    .nav-link {
      padding: 0.2rem 0.1rem; /* Reduce padding for the links */
    }
    .logo-img {
      margin-top: 2px;
      height: 30px;
      width: 170px;
    }
  }
  /* Very small devices (<= 390px) */
  @media (max-width: 390px) {
    .nav-link {
      font-size: 0.8rem;
      padding: 0.25rem;
    }
  }
  .sidebar {
  height: 100%;
  width: 250px; /* Adjust the width as needed */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e9afaf; /* Adjusts the bg color of sidebar*/
  overflow-x: hidden;
  padding-top: 20px;
}

.sidebar-link {
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  color: #bcb1b1; /* Adjust the text color */
}

.sidebar-link:hover {
  background-color: #ffd1d1; /* Adjust the hover background color */
}

  </style>
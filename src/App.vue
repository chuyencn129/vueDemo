<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.box-card{
  max-width: 420px;
  margin: auto;
  background-color: #fbfaff !important;
}

.header-card{
  text-align: left;
  color: #b8b6bf;
}

.st-shadow{
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

.contact-card{
  position: relative;
}

.body-card{
  margin-top: 40px;
  text-align: left;
  overflow: auto;
  height: 70vh;
  padding-bottom: 20px;
}
.footer-card{
  position: absolute;
  width: 100%;
  margin-left: -20px;
  bottom: 0;
  background: #ffffff;
  border-top: 1px solid #dcdfe6;
}

.footer-card .footer-btn{
  transform: translate(0px, -50%);
  margin: 5px;
}
</style>

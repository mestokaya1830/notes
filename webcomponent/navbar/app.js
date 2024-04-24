class Navbar extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <nav class="navbar">
      <a href="./index.html">Home</a>
      <a href="./about.html">About</a>
      <a href="./contact.html">Contact</a>
    </nav>

    <style>
      .navbar{
        display: flex;
        align-items: center;
        height:70px;
        padding: 0 20px;
        background-color: #333;
      }
      .navbar a{
        color: #fff;
        text-decoration: none;
        margin:0 15px;
        font-size:20px;
      }
    </style>
    `
  }
}

customElements.define('nav-bar', Navbar)
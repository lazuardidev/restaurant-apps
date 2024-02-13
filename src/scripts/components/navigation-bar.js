class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
      <nav id="nav" class="nav container">
        <div class="nav-wrapper">
          <button id="menu" class="header_menu hamburger" tabindex="0">
            ☰
          </button>
          <ul class="nav_list">
            <li class="nav_item active"><a href="/">Home</a></li>
            <li class="nav_item"><a href="#">Favorite</a></li>
            <li class="nav_item">
              <a href="https://github.com/lazuardidev" target="_blank">About Us</a>
            </li>
          </ul>
        </div>
        <div class="nav-brand">
          <div class="header_inner">
            <a class="header_title color-primary" href="#" tabindex="1">
              Restoo
            </a>
          </div>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define('navigation-bar', Navbar);

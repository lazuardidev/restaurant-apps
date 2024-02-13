class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="container">
      <div class="footer-bottom" tabindex="0">
        <span>Copyright © 2024 • Restoo</span>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);

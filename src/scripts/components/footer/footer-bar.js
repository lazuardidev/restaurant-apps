class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container footer-bottom" tabindex="0">
        <span>Copyright © 2024 • Restoo</span>
      </div>
    `;
  }
}
customElements.define("footer-bar", FooterBar);

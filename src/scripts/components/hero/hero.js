class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<div class="hero">
			<div class="img-wrapper">
				<picture>
					<source media="(max-width: 425px)" srcset="./images/hero-image_4-small.jpg">
				 	<source media="(max-width: 768px)" srcset="./images/hero-image_4-large.jpg">
					<img
						class="lazyload" 
						src="./images/heros/hero-image_4.jpg"
						alt="Hero Image" 
					/>
				</picture>
				<div class="text-wrapper container">
					<div class="text">
					<h1>
						The world's most creative spaces
					</h1>
					<h3>“Restaurants & Bars are the world's most creative spaces because they continually innovate in search of new and exciting ways to express their identity."</h3>
					</div>
				</div>
			</div>
		</div>
    `;
  }
}
customElements.define("hero-banner", Hero);

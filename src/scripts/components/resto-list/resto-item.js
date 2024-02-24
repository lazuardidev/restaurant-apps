import API_ENDPOINT from "../../globals/api-endpoint";
import "../resto-detail/resto-detail";

class RestoItem extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card" tabindex="0">
            <a href="#/detail/${this._resto.id}"/>
			<img
				class="img-card lazyload"
                data-src="${API_ENDPOINT.IMAGE_SMALL(this._resto.pictureId)}"
                alt="${this._resto.name} Restaurant Image"
				loading="lazy" 
                tabindex="0"
			/>
			<div class="text-card-wrapper">
				<div class="card-description">
					<div class="card-upper">
						<h3 class="resto-title" tabindex="0">
							${this._resto.name}
						</h3>
						<div class="rating">
							<i class="fas fa-star rating-icon"></i>
							<span class="rating-value" tabindex="0">${this._resto.rating}</span>
						</div>
					</div>
					<div class="card-bottom">
						<p class="resto-location" tabindex="0">${this._resto.city}</p>
						<p class="resto-description" tabindex="0">
							${this._resto.description}
						</p>
				    </div>
			    </div>
			</div>
		</div>
        `;
  }
}
customElements.define("resto-item", RestoItem);

import './content/content';
import './menu/menu';
import './reviews/review-list';

class RestoDetail extends HTMLElement {
    set Detail(detail) {
        this._detail = detail;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="section-top-detail">
                <div class="background-wrapper">
                    <div class="gradient"></div>
                    <img src="./images/heros/hero-image_4.jpg" alt="Hero Image" loading="lazy" />
                </div>
                <content-info></content-info>
            </div>

            <div class="section-bottom-detail mt-60">
                <div class="description">
                    <h2 class="section-title">Description</h2>
                    <p class="description-detail">${this._detail.description}</p>
                </div>

                <div class="menus mt-60">
                    <menu-elements></menu-elements>
                </div>

                <div class="reviews mt-60">
                    <h2 class="section-title">Reviews</h2>
                    <review-list></review-list>
                </div>

            </div>

        `;

        const content = document.querySelector('content-info');
        content.contentInfo = this._detail;

        const menus = document.querySelector('menu-elements');
        menus.menu = this._detail.menus;

        const customerReviews = document.querySelector('review-list');
        customerReviews.reviewList = this._detail.customerReviews;
    }
}
customElements.define('resto-detail', RestoDetail);

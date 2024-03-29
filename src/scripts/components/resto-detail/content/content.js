import API_ENDPOINT from '../../../globals/api-endpoint';

class ContentInfo extends HTMLElement {
    set contentInfo(content) {
        this._contentInfo = content;
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <div class="content">
            <div class="resto-image">
                <img
                    class="lazyload"
                    data-src="${API_ENDPOINT.IMAGE_SMALL(
                        this._contentInfo.pictureId
                    )}"
                    alt="Profile Image"
                />
            </div>
            <div class="resto-info">
                <h2 class="resto-name">${this._contentInfo.name}</h2>
                <div class="location-rating d-flex align-items-center">
                    <div class="location d-flex align-items-center">
                        <span class="location-name">${
                            this._contentInfo.city
                        }</span>
                    </div>

                    <div class="rating">
                        <span class="icon-star"><i class="fas fa-star"></i></span>
                        <span class="rating-number">${
                            this._contentInfo.rating
                        }</span>
                    </div>
                </div>
                <div class="address-section">
                    <div class="address">
                        <span>${this._contentInfo.address}</span>
                    </div>
                </div>
            </div>
            <div class="like-button" id="likeButtonContainer">
                <button aria-label="like this resto" id="likeButton" class="like">
                    <i class="far fa-heart" aria-hidden="true"></i>
                </button>
            </div>
        </div>

        `;
    }
}

customElements.define('content-info', ContentInfo);

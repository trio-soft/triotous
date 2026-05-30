import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-contact-info')
export class TrioContactInfo extends LitElement {
  @property({ type: Object }) content: any = {};

  static styles = css`
    :host { display: block; }
    .title {
      color: #4f46e5; font-size: 12px; font-weight: 600; line-height: 1;
      letter-spacing: 0.05em; text-transform: uppercase;
      padding: 2.5rem 0 1rem; margin: 0;
    }
    .text { color: #464555; font-size: 16px; line-height: 1.6; padding: 0.25rem 0 0.5rem; margin: 0; }
    .map-wrap { display: flex; padding: 0.75rem 0; }
    .map-frame-wrap { width: 100%; aspect-ratio: 16/9; border-radius: 0.75rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.08); }
    .map-frame { width: 100%; height: 100%; border: 0; }
  `;

  render() {
    const c = this.content;
    return html`
      <h2 class="title">${c.infoTitle}</h2>
      <p class="text">${c.address}</p>
      <p class="text">${c.phone}</p>
      <p class="text">${c.email}</p>
      <div class="map-wrap"><div class="map-frame-wrap"><iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.749442277467!2d139.6295169!3d35.4501557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cf783637a3d%3A0xf5fc887b7ca7b451!2z5pel5pys44CSMjMxLTAwMDQgS2FuYWdhd2EsIFlva29oYW1hLCBOYWthIFdhcmQsIE1vdG9oYW1hY2jFjSwgMy1jaMWNbWXiiJIyMS0yIOODmOODquOCquOCuemWouWGheODk-ODqyA0NDE0!5e0!3m2!1szh-TW!2sde!4v1753498457617!5m2!1szh-TW!2sde" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>
    `;
  }
}

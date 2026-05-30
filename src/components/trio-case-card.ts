import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-case-card')
export class TrioCaseCard extends LitElement {
  @property({ type: String }) image = '';
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';
  @property({ type: String }) client = '';
  @property({ type: Boolean }) horizontal = false;
  @property({ type: String }) lang = 'en';

  static styles = css`
    :host { display: block; width: 100%; }

    /* Vertical layout (Home page) */
    .case-card { display: flex; flex-direction: column; gap: 14px; border-radius: 0.75rem; min-width: 240px; }
    .case-card-image-wrap {
      width: 100%; aspect-ratio: 16/9; border-radius: 0.75rem; overflow: hidden; background: #e9edff;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.08);
    }
    .case-card-image {
      width: 100%; height: 100%; object-fit: cover; display: block;
      transition: transform 0.3s ease;
    }
    .case-card:hover .case-card-image { transform: scale(1.03); }
    .case-card-body { display: flex; flex-direction: column; gap: 6px; }
    .case-card-client { color: #777587; font-size: 12px; font-weight: 600; margin: 0; letter-spacing: 0.03em; text-transform: uppercase; }
    .case-card-title { color: #141b2b; font-size: 16px; font-weight: 600; line-height: 1.4; margin: 0; }
    .case-card-description { color: #777587; font-size: 14px; line-height: 1.5; margin: 0; }

    /* Horizontal layout (Cases page) */
    .case-card.horizontal {
      flex-direction: row-reverse;
      align-items: flex-start;
      gap: 24px;
      padding: 24px 0;
      border-bottom: 1px solid #c7c4d8;
    }
    .case-card.horizontal .case-card-image-wrap {
      flex: 0 0 40%;
      max-width: 400px;
    }
    .case-card.horizontal .case-card-body {
      flex: 1;
      gap: 8px;
    }
    .case-card.horizontal .case-card-client {
      font-size: 22px;
      font-weight: 700;
      color: #141b2b;
      text-transform: none;
      letter-spacing: -0.01em;
    }
    .case-card.horizontal .case-card-title {
      font-size: 16px;
      font-weight: 400;
      color: #464555;
    }

    @media (max-width: 768px) {
      .case-card { min-width: 0; }
      .case-card.horizontal {
        flex-direction: column;
      }
      .case-card.horizontal .case-card-image-wrap {
        max-width: 100%;
        flex: none;
      }
    }
  `;

  render() {
    const href = this.lang === 'jp' ? '#/jp/cases' : '#/cases';
    return html`
      <div class="case-card ${this.horizontal ? 'horizontal' : ''}">
        <div class="case-card-image-wrap">
          <a href="${href}">
            <img class="case-card-image" src="${this.image}" alt="${this.title}" />
          </a>
        </div>
        <div class="case-card-body">
          ${this.client ? html`<p class="case-card-client">${this.client}</p>` : ''}
          <p class="case-card-title"><a href="${href}" style="text-decoration: none; color: inherit;">${this.title}</a></p>
          <p class="case-card-description">${this.description}</p>
        </div>
      </div>
    `;
  }
}

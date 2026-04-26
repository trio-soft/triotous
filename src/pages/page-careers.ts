import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../components/trio-cta-section';
import { USERS_SVG, ROCKET_SVG, LIGHTBULB_SVG, GEAR_SVG, GLOBE_24_SVG } from '../icons';

const iconMap: Record<string, string> = {
  users: USERS_SVG,
  rocket: ROCKET_SVG,
  lightbulb: LIGHTBULB_SVG,
  gear: GEAR_SVG,
  globe: GLOBE_24_SVG,
};

@customElement('page-careers')
export class PageCareers extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: any = {};

  static styles = css`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0;
      padding: 1rem;
    }
    .section-heading {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      padding: 1.25rem 1rem 0.75rem;
      margin: 0;
    }
    .text-content {
      font-size: 16px;
      line-height: 1.6;
      color: #111518;
      padding: 0.25rem 1rem 0.75rem;
      margin: 0;
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
    .value-card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem;
      border-radius: 0.5rem;
      border: 1px solid #d5dce2;
      background-color: #f9fafb;
    }
    .value-icon {
      color: #1572cf;
      width: 24px;
      height: 24px;
    }
    .value-title {
      font-size: 16px;
      font-weight: bold;
      color: #111518;
      margin: 0;
    }
    .value-desc {
      font-size: 14px;
      line-height: 1.6;
      color: #5e7387;
      margin: 0;
    }
    .culture-list {
      padding: 0.5rem 1rem 0.75rem 2.5rem;
      margin: 0;
    }
    .culture-list li {
      font-size: 15px;
      line-height: 1.8;
      color: #333;
    }
    .json-ld { display: none; }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .values-grid { grid-template-columns: 1fr; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>

        <h2 class="section-heading">${this.data.introTitle}</h2>
        <p class="text-content">${this.data.intro}</p>

        <h2 class="section-heading">${this.data.valuesTitle}</h2>
        <div class="values-grid">
          ${this.data.values?.map((v: any) => html`
            <div class="value-card">
              <div class="value-icon">${unsafeHTML(iconMap[v.icon] || USERS_SVG)}</div>
              <h3 class="value-title">${v.title}</h3>
              <p class="value-desc">${v.description}</p>
            </div>
          `)}
        </div>

        <h2 class="section-heading">${this.data.cultureTitle}</h2>
        <ul class="culture-list">
          ${this.data.cultureItems?.map((item: string) => html`<li>${item}</li>`)}
        </ul>

        <trio-cta-section
          .title=${this.data.applyTitle}
          .subtitle=${this.data.applySubtitle}
          .buttonText=${this.data.applyButton}
          .buttonHref=${this.lang === 'jp' ? '#/jp/contact' : '#/contact'}
          .lang=${this.lang}>
        </trio-cta-section>

      </div>
    `;
  }
}

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
      padding: 0 24px;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0;
      padding: 1rem 0;
    }
    .section-heading {
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--accent);
      padding: 2.5rem 0 1rem;
      margin: 0;
    }
    .text-content {
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-secondary);
      padding: 0.25rem 0 0.75rem;
      margin: 0;
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      padding: 0.5rem 0 1rem;
    }
    .value-card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem;
      border-radius: 0.75rem;
      border: 1px solid var(--border);
      background-color: var(--surface);
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.25s ease, transform 0.2s ease;
    }
    .value-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .value-icon {
      color: var(--accent);
      width: 24px;
      height: 24px;
    }
    .value-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }
    .value-desc {
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-muted);
      margin: 0;
    }
    .culture-list {
      padding: 0.5rem 0 0.75rem 1.5rem;
      margin: 0;
    }
    .culture-list li {
      font-size: 15px;
      line-height: 1.8;
      color: var(--text-secondary);
    }
    .json-ld { display: none; }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .container { padding: 0 16px; }
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

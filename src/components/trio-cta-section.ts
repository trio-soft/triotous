import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-cta-section')
export class TrioCtaSection extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) buttonText = '';
  @property({ type: String }) buttonHref = '';
  @property({ type: String }) lang = 'en';

  static styles = css`
    :host { display: block; }
    .cta-wrap { padding: 2.5rem 24px; }
    .cta-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 28px;
      padding: 3rem 2rem;
      background: linear-gradient(135deg, #e2dfff 0%, #f1f3ff 100%);
      border-radius: 0.75rem;
      border: 1px solid #c7c4d8;
    }
    .cta-text { display: flex; flex-direction: column; gap: 12px; text-align: center; align-items: center; }
    .cta-title {
      color: #141b2b;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin: 0;
      max-width: 640px;
    }
    @media (max-width: 768px) {
      .cta-title { font-size: 22px; }
      .cta-box { padding: 2rem 1.5rem; }
      .cta-wrap { padding: 1.5rem 16px; }
    }
    .cta-subtitle {
      color: #464555;
      font-size: 16px;
      line-height: 1.6;
      margin: 0;
      max-width: 640px;
    }
    .cta-action { display: flex; justify-content: center; }
    .cta-button {
      display: inline-flex;
      min-width: 120px;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 48px;
      padding: 0 28px;
      background: #4f46e5;
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.015em;
      text-decoration: none;
      transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
    }
    .cta-button:hover { background: #3525cd; box-shadow: 0 4px 12px rgb(79 70 229 / 0.4); transform: translateY(-1px); }
  `;

  render() {
    const href = this.buttonHref || (this.lang === 'jp' ? '#/jp/contact' : '#/contact');
    return html`
      <div class="cta-wrap">
        <div class="cta-box">
          <div class="cta-text">
            <h2 class="cta-title">${this.title}</h2>
            ${this.subtitle ? html`<p class="cta-subtitle">${this.subtitle}</p>` : ''}
          </div>
          <div class="cta-action">
            <a class="cta-button" href="${href}">${this.buttonText}</a>
          </div>
        </div>
      </div>
    `;
  }
}

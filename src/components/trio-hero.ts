import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-hero')
export class TrioHero extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) buttonText = '';
  @property({ type: String }) buttonHref = '';
  @property({ type: String }) backgroundImage = '/hero-en.webp';

  static styles = css`
    :host { display: block; }
    .hero-container { padding: 24px; }
    .hero-banner {
      position: relative;
      display: flex;
      min-height: 520px;
      flex-direction: column;
      gap: 24px;
      border-radius: 0.75rem;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 48px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    .hero-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: var(--hero-overlay);
    }
    .hero-content { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 28px; align-items: flex-start; }
    .hero-text { display: flex; flex-direction: column; gap: 12px; }
    .hero-title {
      color: white; font-size: clamp(32px, 5vw, 48px); font-weight: 700;
      line-height: 1.1; letter-spacing: -0.02em; margin: 0;
    }
    .hero-subtitle { color: rgba(255,255,255,0.9); font-size: 18px; line-height: 1.6; margin: 0; max-width: 640px; }
    .hero-btn {
      display: inline-flex; min-width: 84px; align-items: center; justify-content: center;
      border-radius: 9999px; height: 48px; padding: 0 28px; background: var(--accent); color: var(--accent-contrast);
      font-size: 16px; font-weight: 600; letter-spacing: 0.015em; text-decoration: none;
      transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
    }
    .hero-btn:hover { background: var(--accent-strong); box-shadow: var(--shadow-md); transform: translateY(-1px); }
    @media (max-width: 768px) {
      .hero-container { padding: 16px; }
      .hero-banner { min-height: 360px; padding: 28px 20px; }
      .hero-title { font-size: 28px; }
      .hero-subtitle { font-size: 16px; }
    }
  `;

  render() {
    return html`
      <div class="hero-container">
        <div class="hero-banner">
          <img class="hero-image" src="${this.backgroundImage}" alt="" />
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">${this.title}</h1>
              <p class="hero-subtitle">${this.subtitle}</p>
            </div>
            <a class="hero-btn" href="${this.buttonHref}">${this.buttonText}</a>
          </div>
        </div>
      </div>
    `;
  }
}

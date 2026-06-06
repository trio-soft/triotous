import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/trio-service-grid.js';
import '../components/trio-cta-section.js';

@customElement('page-services')
export class PageServices extends LitElement {
  @property({ type: Object }) data: any = {};
  @property({ type: String }) lang = 'en';
  static styles = css`
    :host { display: block; }
    .page-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; padding: 2rem 24px; }
    .page-head-box { display: flex; min-width: 288px; flex-direction: column; gap: 12px; }
    .page-title { color: var(--text-primary); font-size: 32px; font-weight: 700; line-height: 1.1; margin: 0; letter-spacing: -0.02em; }
    .page-subtitle { color: var(--text-muted); font-size: 16px; line-height: 1.6; margin: 0; }
    .section-title {
      color: var(--accent); font-size: 12px; font-weight: 600; line-height: 1;
      letter-spacing: 0.05em; text-transform: uppercase;
      padding: 2.5rem 24px 1rem; margin: 0;
    }
    .grid-wrap { padding: 0.5rem 24px 1rem; }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .page-head { padding: 1.5rem 16px; }
      .page-head-box { min-width: 0; }
      .section-title { padding: 2rem 16px 0.75rem; }
      .grid-wrap { padding: 0.5rem 16px 1rem; }
    }
  `;
  render() {
    const s = this.data;
    if (!s) return html`<div>Loading...</div>`;
    const contactHref = this.lang === 'jp' ? '#/jp/contact' : '#/contact';
    return html`<div class="page-head"><div class="page-head-box"><p class="page-title">${s.pageTitle}</p><p class="page-subtitle">${s.pageSubtitle}</p></div></div>${s.sections.map((section: any) => html`<h2 class="section-title">${section.title}</h2><div class="grid-wrap"><trio-service-grid .services=${section.cards}></trio-service-grid></div>`)}<trio-cta-section .title=${s.ctaTitle} .subtitle=${s.ctaSubtitle} .buttonText=${s.ctaButton} .buttonHref=${contactHref} tone="blue"></trio-cta-section>`;
  }
}

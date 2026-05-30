import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/trio-hero.js';
import '../components/trio-service-grid.js';
import '../components/trio-case-list.js';
import '../components/trio-news-item.js';
import '../components/trio-cta-section.js';

@customElement('page-home')
export class PageHome extends LitElement {
  @property({ type: Object }) data: any = {};
  @property({ type: String }) lang = 'en';

  static styles = css`
    :host { display: block; }
    .section-title {
      color: #141b2b; font-size: 12px; font-weight: 600; line-height: 1;
      letter-spacing: 0.05em; text-transform: uppercase;
      padding: 2.5rem 24px 1rem; margin: 0; color: #4f46e5;
    }
    .intro-wrap { display: flex; flex-direction: column; gap: 2rem; padding: 1rem 24px 2rem; }
    .intro-head { display: flex; flex-direction: column; gap: 12px; }
    .intro-title { color: #141b2b; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; margin: 0; max-width: 640px; }
    .intro-desc { color: #464555; font-size: 16px; line-height: 1.6; margin: 0; max-width: 640px; }
    .news-list { display: flex; flex-direction: column; }
    @media (max-width: 768px) {
      .section-title { padding: 2rem 16px 0.75rem; }
      .intro-wrap { padding: 0.75rem 16px 1.5rem; gap: 1.5rem; }
      .intro-title { font-size: 22px; }
      .intro-desc { font-size: 14px; }
    }
  `;

  render() {
    const h = this.data;
    if (!h) return html`<div>Loading...</div>`;
    const servicesHref = this.lang === 'jp' ? '#/jp/services' : '#/services';
    const contactHref = this.lang === 'jp' ? '#/jp/contact' : '#/contact';
    const heroImage = this.lang === 'jp' ? '/hero-jp.jpg' : '/hero-en.jpg';
    return html`
      <trio-hero .title=${h.heroTitle} .subtitle=${h.heroSubtitle} .buttonText=${h.heroButton} .buttonHref=${servicesHref} .backgroundImage=${heroImage}></trio-hero>
      <h2 class="section-title">${h.expertiseTitle}</h2>
      <div class="intro-wrap"><div class="intro-head"><h2 class="intro-title">${h.expertiseSubtitle}</h2><p class="intro-desc">${h.expertiseDescription}</p></div><trio-service-grid .services=${h.services}></trio-service-grid></div>
      <h2 class="section-title">${h.casesTitle}</h2>
      <trio-case-list .cases=${h.cases} .scrollable=${true}></trio-case-list>
      <h2 class="section-title">${h.newsTitle}</h2>
      <div class="news-list">${h.news.map((item: any) => html`<trio-news-item .category=${item.category} .title=${item.title} .description=${item.description} .image=${item.image}></trio-news-item>`)}</div>
      <trio-cta-section .title=${h.ctaTitle} .buttonText=${h.ctaButton} .buttonHref=${contactHref} tone="blue"></trio-cta-section>
    `;
  }
}

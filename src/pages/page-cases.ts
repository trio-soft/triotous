import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/trio-case-list';

@customElement('page-cases')
export class PageCases extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: any = {};

  static styles = css`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem 0 1.5rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0;
      min-width: 288px;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; min-width: 0; }
      .container { padding: 0 16px; }
    }
    .footer-actions {
      display: flex;
      justify-content: center;
      padding: 2rem 0;
    }
    .btn-contact {
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 2.75rem;
      padding: 0 2rem;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.015em;
      border: none;
      text-decoration: none;
      background-color: var(--accent);
      color: var(--accent-contrast);
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    .btn-contact:hover {
      background-color: var(--accent-strong);
      box-shadow: var(--shadow-md);
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>

        <trio-case-list .cases=${this.data.items} .scrollable=${false} .lang=${this.lang}></trio-case-list>

        <div class="footer-actions">
          <a href="${this.lang === 'jp' ? '#/jp/contact' : '#/contact'}" class="btn-contact">
            ${this.data.contactUs}
          </a>
        </div>
      </div>
    `;
  }
}

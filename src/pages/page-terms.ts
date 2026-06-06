import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('page-terms')
export class PageTerms extends LitElement {
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
      margin: 0 0 1.5rem 0;
      padding: 1rem 0;
    }
    .content {
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-secondary);
      padding: 0;
    }
    .content h3 {
      font-size: 18px;
      font-weight: 600;
      color: var(--text-primary);
      margin-top: 2.5rem;
      margin-bottom: 0.75rem;
    }
    .content p {
      margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .content { font-size: 14px; }
      .container { padding: 0 16px; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>
        <div class="content">
          ${unsafeHTML(this.data.content)}
        </div>
      </div>
    `;
  }
}

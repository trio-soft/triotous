import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-language-selector')
export class TrioLanguageSelector extends LitElement {
  @property({ type: Object }) data: any = {};

  static styles = css`
    :host {
      display: block;
      height: 100vh;
      background:
        radial-gradient(circle at top left, rgb(79 70 229 / 0.12), transparent 28%),
        radial-gradient(circle at top right, rgb(56 189 248 / 0.12), transparent 22%),
        var(--app-bg);
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 1.25rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      align-items: center;
      width: 100%;
      max-width: 960px;
    }
    .header {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .title {
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
      letter-spacing: -0.02em;
    }
    .subtitle {
      font-size: 1rem;
      color: var(--text-muted);
      margin: 0;
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 448px;
    }
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 0.75rem;
      border: 1px solid var(--border);
      background-color: var(--surface);
      text-decoration: none;
      box-shadow: var(--shadow-sm);
      transition: all 0.25s ease;
    }
    .card:hover {
      background-color: var(--surface-muted);
      border-color: var(--accent);
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }
    .lang-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .flag-circle {
      display: flex;
      width: 3rem;
      height: 3rem;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      background-color: var(--accent-soft-strong);
      font-size: 1.5rem;
    }
    .lang-text {
      display: flex;
      flex-direction: column;
    }
    .lang-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }
    .lang-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin: 0;
    }
    .caret {
      color: var(--text-faint);
      transition: color 0.2s ease;
    }
    .card:hover .caret { color: var(--accent); }
  `;

  render() {
    return html`
      <div class="wrapper">
        <div class="content">
          <div class="header">
            <h1 class="title">${this.data.title}</h1>
            <p class="subtitle">${this.data.subtitle}</p>
          </div>
          <div class="options">
            <a href="${this.data.en.href}" class="card">
              <div class="lang-info">
                <div class="flag-circle">${this.data.en.flag}</div>
                <div class="lang-text">
                  <h3 class="lang-name">${this.data.en.name}</h3>
                  <p class="lang-desc">${this.data.en.desc}</p>
                </div>
              </div>
              <div class="caret">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </a>
            <a href="${this.data.jp.href}" class="card">
              <div class="lang-info">
                <div class="flag-circle">${this.data.jp.flag}</div>
                <div class="lang-text">
                  <h3 class="lang-name">${this.data.jp.name}</h3>
                  <p class="lang-desc">${this.data.jp.desc}</p>
                </div>
              </div>
              <div class="caret">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

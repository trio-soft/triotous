import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../components/trio-cta-section';
import { USER_SVG, LIGHTBULB_SVG, USERS_SVG, ROCKET_SVG, ROBOT_SVG } from '../icons';

@customElement('page-about')
export class PageAbout extends LitElement {
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
    .text-content {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.6;
      color: var(--text-secondary);
      padding: 0.25rem 0 0.75rem;
      margin: 0;
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
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      padding: 0.5rem 0 1rem;
    }
    .card {
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
    .card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .card--ai {
      background-color: var(--surface-muted);
      border-color: var(--border-strong);
    }
    .card--ai:hover { box-shadow: var(--shadow-md); }
    .card-icon {
      color: var(--text-secondary);
      width: 24px;
      height: 24px;
    }
    .card--ai .card-icon { color: var(--accent); }
    .card-icon--ai { color: var(--accent); }
    .card-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.2;
      color: var(--text-primary);
      margin: 0;
    }
    .card-desc {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.5;
      color: var(--text-muted);
      margin: 0;
    }
    .badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--accent);
      background: var(--accent-soft-strong);
      border-radius: 4px;
      padding: 2px 6px;
      margin-top: 4px;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; min-width: 0; }
      .container { padding: 0 16px; }
      .grid { grid-template-columns: 1fr; }
      .text-content { font-size: 14px; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>
        <p class="text-content">${this.data.intro}</p>

        <h2 class="section-heading">${this.data.storyTitle}</h2>
        <p class="text-content">${this.data.story}</p>

        <h2 class="section-heading">${this.data.teamTitle}</h2>
        <div class="grid">
          ${this.data.team.map((member: any) => html`
            <div class="card ${member.isAI ? 'card--ai' : ''}">
              <div class="card-icon ${member.isAI ? 'card-icon--ai' : ''}">${unsafeHTML(member.isAI ? ROBOT_SVG : USER_SVG)}</div>
              <div class="title-group">
                <h3 class="card-title">${member.name}</h3>
                <p class="card-desc">${member.role}</p>
                ${member.isAI ? html`<span class="badge">Digital Employee</span>` : ''}
              </div>
            </div>
          `)}
        </div>
        <p class="text-content">${this.data.teamDescription}</p>

        <h2 class="section-heading">${this.data.valuesTitle}</h2>
        <div class="grid">
          ${this.data.values.map((value: any) => html`
            <div class="card">
              <div class="card-icon">
                <!-- Simple mapping for icons -->
                ${value.icon === 'lightbulb' ? unsafeHTML(LIGHTBULB_SVG) : ''}
                ${value.icon === 'users' ? unsafeHTML(USERS_SVG) : ''}
                ${value.icon === 'rocket' ? unsafeHTML(ROCKET_SVG) : ''}
              </div>
              <div class="title-group">
                <h3 class="card-title">${value.title}</h3>
                <p class="card-desc">${value.description}</p>
              </div>
            </div>
          `)}
        </div>

        <trio-cta-section 
          .title=${this.data.ctaTitle} 
          .subtitle=${this.data.ctaSubtitle}
          .buttonText=${this.data.ctaButton}
          .buttonHref=${this.lang === 'jp' ? '#/jp/contact' : '#/contact'}
          .lang=${this.lang}>
        </trio-cta-section>
      </div>
    `;
  }
}

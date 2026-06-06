import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { USER_SVG, ROBOT_SVG } from '../icons.js';

@customElement('trio-team-member')
export class TrioTeamMember extends LitElement {
  @property({ type: String }) name = '';
  @property({ type: String }) role = '';
  @property({ type: Boolean }) isAI = false;

  static styles = css`
    :host { display: flex; }
    .card {
      display: flex; flex: 1; gap: 12px; border-radius: 0.75rem;
      border: 1px solid var(--border); background: var(--surface);
      padding: 20px; flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.25s ease, transform 0.2s ease;
    }
    .card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .card.ai {
      background: var(--surface-muted);
      border-color: var(--border-strong);
    }
    .card.ai:hover { box-shadow: var(--shadow-md); }
    .icon { color: var(--text-secondary); width: 24px; height: 24px; }
    .card.ai .icon { color: var(--accent); }
    .body { display: flex; flex-direction: column; gap: 4px; }
    .name { color: var(--text-primary); font-size: 16px; font-weight: 600; margin: 0; }
    .role { color: var(--text-muted); font-size: 14px; margin: 0; }
    .badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--accent);
      background: var(--accent-soft-strong);
      border-radius: 4px;
      padding: 2px 8px;
      margin-top: 4px;
      width: fit-content;
      text-transform: uppercase;
    }
  `;

  render() {
    return html`
      <div class="card ${this.isAI ? 'ai' : ''}">
        <div class="icon">${unsafeHTML(this.isAI ? ROBOT_SVG : USER_SVG)}</div>
        <div class="body">
          <h2 class="name">${this.name}</h2>
          <p class="role">${this.role}</p>
          ${this.isAI ? html`<span class="badge">Digital Employee</span>` : ''}
        </div>
      </div>
    `;
  }
}

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
      border: 1px solid #c7c4d8; background: #ffffff;
      padding: 20px; flex-direction: column;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
      transition: box-shadow 0.25s ease, transform 0.2s ease;
    }
    .card:hover { box-shadow: 0 8px 16px -4px rgb(0 0 0 / 0.1); transform: translateY(-2px); }
    .card.ai {
      background: #f1f3ff;
      border-color: #c3c0ff;
    }
    .card.ai:hover { box-shadow: 0 8px 16px -4px rgb(79 70 229 / 0.15); }
    .icon { color: #464555; width: 24px; height: 24px; }
    .card.ai .icon { color: #4f46e5; }
    .body { display: flex; flex-direction: column; gap: 4px; }
    .name { color: #141b2b; font-size: 16px; font-weight: 600; margin: 0; }
    .role { color: #777587; font-size: 14px; margin: 0; }
    .badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: #4f46e5;
      background: #e2dfff;
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

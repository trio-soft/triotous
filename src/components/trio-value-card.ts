import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getIcon } from './trio-service-card.js';

@customElement('trio-value-card')
export class TrioValueCard extends LitElement {
  @property({ type: String }) icon = 'lightbulb';
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';

  static styles = css`
    :host { display: flex; }
    .card {
      display: flex; flex: 1; gap: 12px; border-radius: 0.75rem; border: 1px solid var(--border);
      background: var(--surface); padding: 20px; flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.25s ease, transform 0.2s ease;
    }
    .card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .icon { color: var(--accent); width: 24px; height: 24px; }
    .title { color: var(--text-primary); font-size: 16px; font-weight: 600; margin: 0; }
    .description { color: var(--text-muted); font-size: 14px; line-height: 1.5; margin: 0; }
  `;

  render() { return html`<div class="card"><div class="icon">${unsafeHTML(getIcon(this.icon))}</div><h2 class="title">${this.title}</h2><p class="description">${this.description}</p></div>`; }
}

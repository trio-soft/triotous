import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-contact-form')
export class TrioContactForm extends LitElement {
  @property({ type: Object }) content: any = {};

  static styles = css`
    :host { display: block; }
    .field-row { display: flex; max-width: 520px; flex-wrap: wrap; align-items: flex-end; gap: 8px; padding: 8px 0; }
    .field-label-wrap { display: flex; flex-direction: column; min-width: 160px; flex: 1; }
    .field-label { color: var(--text-primary); font-size: 14px; font-weight: 600; padding-bottom: 6px; }
    .field-input, .field-textarea {
      width: 100%; border-radius: 0.5rem; color: var(--text-primary); border: 1px solid var(--border); background: var(--surface);
      padding: 0.75rem 1rem; font-size: 16px; line-height: 1.5; box-sizing: border-box;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .field-input:focus, .field-textarea:focus {
      outline: none; border-color: var(--accent); box-shadow: var(--focus-ring);
    }
    .field-input { height: 3rem; }
    .field-textarea { min-height: 144px; resize: vertical; }
    .submit-row { display: flex; padding: 1rem 0; justify-content: flex-start; }
    .submit-btn {
      display: inline-flex; min-width: 84px; align-items: center; justify-content: center; border-radius: 9999px; height: 2.75rem;
      padding: 0 2rem; background: var(--accent); color: var(--accent-contrast); font-size: 14px; font-weight: 600; border: none; cursor: pointer;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    .submit-btn:hover { background: var(--accent-strong); box-shadow: var(--shadow-md); }
  `;

  render() {
    const c = this.content;
    return html`
      ${[['nameLabel','namePlaceholder','input'],['emailLabel','emailPlaceholder','email'],['subjectLabel','subjectPlaceholder','input']].map(([label, ph, type]) => html`
        <div class="field-row"><label class="field-label-wrap"><span class="field-label">${c[label]}</span><input class="field-input" type="${type === 'email' ? 'email' : 'text'}" placeholder="${c[ph]}" /></label></div>
      `)}
      <div class="field-row"><label class="field-label-wrap"><span class="field-label">${c.messageLabel}</span><textarea class="field-textarea" placeholder="${c.messagePlaceholder}"></textarea></label></div>
      <div class="submit-row"><button class="submit-btn" type="button">${c.submit}</button></div>
    `;
  }
}

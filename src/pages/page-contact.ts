import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

const FORMSPREE_URL = 'https://formspree.io/f/mreyloqo';

@customElement('page-contact')
export class PageContact extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: any = {};

  @state() private _status: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  @state() private _errorMessage = '';

  @query('form') private _form!: HTMLFormElement;

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
    .title-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-width: 288px;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0;
    }
    .page-subtitle {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.6;
      color: var(--text-muted);
      margin: 0;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.5rem 0;
      max-width: 520px;
    }
    .field-label {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      color: var(--text-primary);
      padding-bottom: 0.25rem;
      margin: 0;
    }
    .form-input {
      display: flex;
      width: 100%;
      min-width: 0;
      flex: 1;
      border-radius: 0.5rem;
      color: var(--text-primary);
      border: 1px solid var(--border);
      background-color: var(--surface);
      height: 3rem;
      padding: 0.75rem 1rem;
      font-size: 16px;
      font-family: inherit;
      box-sizing: border-box;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .form-input:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: var(--focus-ring);
    }
    .form-textarea {
      min-height: 9rem;
      resize: none;
    }
    .btn-container {
      display: flex;
      padding: 1rem 0;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }
    .btn-submit {
      display: flex;
      min-width: 84px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 2.75rem;
      padding: 0 2rem;
      background-color: var(--accent);
      color: var(--accent-contrast);
      font-size: 14px;
      font-weight: 600;
      border: none;
      font-family: inherit;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    .btn-submit:hover {
      background-color: var(--accent-strong);
      box-shadow: var(--shadow-md);
    }
    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .status-message {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
      padding: 0.5rem 0;
    }
    .status-success {
      color: var(--success);
    }
    .status-error {
      color: var(--danger);
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
    .info-text {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.6;
      color: var(--text-secondary);
      padding: 0.25rem 0 0.5rem;
      margin: 0;
    }
    .map-container {
      display: flex;
      padding: 0.75rem 0;
    }
    .map-wrapper {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: var(--image-shadow);
    }
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .title-group { min-width: 0; }
      .container { padding: 0 16px; }
    }
  `;

  private async _handleSubmit(e: Event) {
    e.preventDefault();
    this._status = 'submitting';
    this._errorMessage = '';

    const formData = new FormData(this._form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        this._status = 'success';
        this._form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          this._errorMessage = data.errors.map((err: any) => err.message).join(', ');
        } else {
          this._errorMessage = this.lang === 'jp'
            ? 'フォームの送信中に問題が発生しました。'
            : 'Oops! There was a problem submitting your form.';
        }
        this._status = 'error';
      }
    } catch {
      this._errorMessage = this.lang === 'jp'
        ? 'フォームの送信中に問題が発生しました。'
        : 'Oops! There was a problem submitting your form.';
      this._status = 'error';
    }
  }

  private _renderStatusMessage() {
    if (this._status === 'success') {
      const msg = this.lang === 'jp' ? 'お問い合わせありがとうございます！' : 'Thanks for your submission!';
      return html`<p class="status-message status-success">${msg}</p>`;
    }
    if (this._status === 'error') {
      return html`<p class="status-message status-error">${this._errorMessage}</p>`;
    }
    return '';
  }

  render() {
    const isSubmitting = this._status === 'submitting';

    return html`
      <div class="container">
        <div class="header-section">
          <div class="title-group">
            <h1 class="page-title">${this.data.pageTitle}</h1>
            <p class="page-subtitle">${this.data.pageSubtitle}</p>
          </div>
        </div>

        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.nameLabel}</p>
              <input class="form-input" name="name" placeholder="${this.data.namePlaceholder}" required />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.emailLabel}</p>
              <input class="form-input" name="email" type="email" placeholder="${this.data.emailPlaceholder}" required />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.subjectLabel}</p>
              <input class="form-input" name="subject" placeholder="${this.data.subjectPlaceholder}" />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.messageLabel}</p>
              <textarea class="form-input form-textarea" name="message" placeholder="${this.data.messagePlaceholder}" required></textarea>
            </label>
          </div>

          <div class="btn-container">
            <button class="btn-submit" type="submit" ?disabled=${isSubmitting}>
              ${isSubmitting ? (this.lang === 'jp' ? '送信中...' : 'Submitting...') : this.data.submit}
            </button>
          </div>
        </form>

        ${this._renderStatusMessage()}
      </div>
    `;
  }
}

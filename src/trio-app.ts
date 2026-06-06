import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { en } from './data/en';
import { jp } from './data/jp';
import './components/trio-header';
import './components/trio-footer';
import './pages/page-home';
import './pages/page-services';
import './pages/page-cases';
import './pages/page-about';
import './pages/page-contact';
import './pages/page-privacy';
import './pages/page-terms';
import './pages/page-careers';
import './components/trio-language-selector';

@customElement('trio-app')
export class TrioApp extends LitElement {
  @property({ type: String, reflect: true })
  theme = this._getInitialTheme();

  @state()
  private route = window.location.hash || '#/';

  @state()
  public lang = this.route.startsWith('#/jp') ? 'jp' : 'en';

  static styles = css`
    :host {
      --app-bg: #f9f9ff;
      --surface: #ffffff;
      --surface-muted: #f1f3ff;
      --surface-strong: #e9edff;
      --surface-accent: #e2dfff;
      --border: #c7c4d8;
      --border-strong: #c3c0ff;
      --text-primary: #141b2b;
      --text-secondary: #464555;
      --text-muted: #777587;
      --text-faint: #918f9a;
      --accent: #4f46e5;
      --accent-strong: #3525cd;
      --accent-contrast: #ffffff;
      --accent-soft: #e9edff;
      --accent-soft-strong: #e2dfff;
      --hero-overlay: linear-gradient(to bottom, rgb(20 27 43 / 0.05) 0%, rgb(20 27 43 / 0.55) 100%);
      --cta-gradient: linear-gradient(135deg, #e2dfff 0%, #f1f3ff 100%);
      --header-bg: color-mix(in srgb, #f9f9ff 85%, transparent);
      --shadow-sm: 0 4px 6px -1px rgb(0 0 0 / 0.05);
      --shadow-md: 0 8px 16px -4px rgb(79 70 229 / 0.12);
      --shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1);
      --image-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.08);
      --focus-ring: 0 0 0 3px rgb(79 70 229 / 0.15);
      --success: #16a34a;
      --danger: #dc2626;
      display: block;
      min-height: 100vh;
      font-family: 'Inter', 'Noto Sans JP', 'Noto Sans', sans-serif;
      background:
        radial-gradient(circle at top left, rgb(79 70 229 / 0.12), transparent 28%),
        radial-gradient(circle at top right, rgb(56 189 248 / 0.12), transparent 22%),
        var(--app-bg);
      color: var(--text-primary);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    :host([theme='dark']) {
      --app-bg: #07111f;
      --surface: #0f1b2d;
      --surface-muted: #13233a;
      --surface-strong: #17314e;
      --surface-accent: #1c2743;
      --border: #223553;
      --border-strong: #345082;
      --text-primary: #edf3ff;
      --text-secondary: #bfd0ee;
      --text-muted: #8ea5c9;
      --text-faint: #6982aa;
      --accent: #7c8dff;
      --accent-strong: #99a7ff;
      --accent-contrast: #08111e;
      --accent-soft: #18294a;
      --accent-soft-strong: #203660;
      --hero-overlay: linear-gradient(to bottom, rgb(3 8 18 / 0.16) 0%, rgb(3 8 18 / 0.8) 100%);
      --cta-gradient: linear-gradient(135deg, #101f35 0%, #172b45 100%);
      --header-bg: color-mix(in srgb, #07111f 82%, transparent);
      --shadow-sm: 0 10px 30px -18px rgb(2 8 20 / 0.9);
      --shadow-md: 0 18px 38px -22px rgb(2 8 20 / 0.95);
      --shadow-lg: 0 24px 60px -26px rgb(2 8 20 / 0.95);
      --image-shadow: 0 18px 38px -24px rgb(2 8 20 / 0.95);
      --focus-ring: 0 0 0 3px rgb(124 141 255 / 0.22);
      --success: #4ade80;
      --danger: #f87171;
      color-scheme: dark;
    }
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      max-width: 1120px;
      margin: 0 auto;
    }
    main {
      flex-grow: 1;
      width: 100%;
    }
    @media (max-width: 1200px) {
      .app-container {
        max-width: 100%;
      }
    }
  `;

  constructor() {
    super();
    this._syncDocumentTheme();
    window.addEventListener('hashchange', () => {
      this.route = window.location.hash || '#/';
      this.lang = this.route.startsWith('#/jp') ? 'jp' : 'en';
      window.scrollTo(0, 0);
    });
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('theme')) {
      this._syncDocumentTheme();
    }
  }

  private _getInitialTheme() {
    try {
      return window.localStorage.getItem('triotous-theme') ?? 'dark';
    } catch {
      return 'dark';
    }
  }

  private _handleThemeToggle = () => {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    try {
      window.localStorage.setItem('triotous-theme', this.theme);
    } catch {
      // Ignore storage failures and keep the in-memory preference.
    }
  };

  private _syncDocumentTheme() {
    document.documentElement.style.colorScheme = this.theme;
    document.body.style.backgroundColor = getComputedStyle(this).getPropertyValue('--app-bg').trim() || '';
  }

  render() {
    const data = this.lang === 'jp' ? jp : en;
    
    return html`
      <div class="app-container">
        ${this.route === '#/language' 
          ? html`<trio-language-selector .data=${data.language}></trio-language-selector>`
          : html`
            <trio-header .lang=${this.lang} .data=${data} .theme=${this.theme}></trio-header>
            <main>
              ${this.renderPage(data)}
            </main>
            <trio-footer .lang=${this.lang} .data=${data.footer}></trio-footer>
          `}
      </div>
    `;
  }

  private renderPage(data: any) {
    const path = this.lang === 'jp' ? this.route.replace('#/jp', '') || '/' : this.route.replace('#', '') || '/';
    
    switch (path) {
      case '/':
        return html`<page-home .lang=${this.lang} .data=${data.home}></page-home>`;
      case '/services':
        return html`<page-services .lang=${this.lang} .data=${data.services}></page-services>`;
      case '/cases':
        return html`<page-cases .lang=${this.lang} .data=${data.cases}></page-cases>`;
      case '/about':
        return html`<page-about .lang=${this.lang} .data=${data.about}></page-about>`;
      case '/contact':
        return html`<page-contact .lang=${this.lang} .data=${data.contact}></page-contact>`;
      case '/privacy':
        return html`<page-privacy .lang=${this.lang} .data=${data.privacy}></page-privacy>`;
      case '/terms':
        return html`<page-terms .lang=${this.lang} .data=${data.terms}></page-terms>`;
      case '/careers':
        return html`<page-careers .lang=${this.lang} .data=${data.careers}></page-careers>`;
      default:
        return html`<page-home .lang=${this.lang} .data=${data.home}></page-home>`;
    }
  }
}

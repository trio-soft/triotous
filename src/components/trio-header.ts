import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { GLOBE_SVG } from '../icons.js';
import type { NavItem } from '../data/en.js';

@customElement('trio-header')
export class TrioHeader extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: String }) theme: 'light' | 'dark' = 'dark';
  @property({ type: Object }) data: { brand: string; nav: NavItem[]; getStarted: string } = {
    brand: 'Triotous',
    nav: [],
    getStarted: 'Get Started',
  };

  @state() private _menuOpen = false;

  static styles = css`
    :host { display: block; }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
      border-bottom: 1px solid var(--border);
      padding: 16px 24px;
      gap: 1rem;
      background: var(--header-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .header-brand { display: flex; align-items: center; gap: 14px; color: var(--text-primary); }
    .header-logo-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      flex-shrink: 0;
    }
    .header-logo {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    .header-brand-name {
      font-size: 18px; font-weight: 700; color: var(--text-primary); text-decoration: none; letter-spacing: -0.02em;
    }
    .header-right { display: flex; flex: 1; justify-content: flex-end; gap: 32px; align-items: center; }
    .header-nav { display: flex; align-items: center; gap: 32px; }
    .header-nav-link {
      color: var(--text-secondary); font-size: 14px; font-weight: 500; text-decoration: none;
      transition: color 0.2s ease;
    }
    .header-nav-link:hover { color: var(--accent); }
    .header-actions { display: flex; gap: 8px; }
    .header-lang-btn,
    .header-theme-btn {
      display: flex; cursor: pointer; align-items: center; justify-content: center; border-radius: 9999px;
      height: 40px; min-width: 40px; padding: 0 12px; background: var(--accent-soft); color: var(--text-secondary); text-decoration: none; border: 1px solid transparent;
      transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
    }
    .header-lang-btn:hover,
    .header-theme-btn:hover { background: var(--accent-soft-strong); color: var(--accent); border-color: var(--border-strong); transform: translateY(-1px); }
    .header-theme-btn {
      gap: 8px;
      font-size: 13px;
      font-weight: 600;
      min-width: 92px;
    }
    .theme-icon {
      font-size: 16px;
      line-height: 1;
    }
    .hamburger {
      display: none;
      cursor: pointer;
      background: none;
      border: none;
      font-size: 24px;
      color: var(--text-primary);
      padding: 4px 8px;
      line-height: 1;
    }
    .mobile-nav {
      display: none;
    }

    @media (max-width: 768px) {
      .header { padding: 12px 16px; }
      .header-nav { display: none; }
      .hamburger { display: flex; align-items: center; }
      .mobile-nav {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--surface);
        border-bottom: 1px solid var(--border);
        padding: 8px 0;
        z-index: 100;
        box-shadow: var(--shadow-md);
      }
      .mobile-nav[hidden] { display: none; }
      .mobile-nav-link {
        color: var(--text-primary);
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        padding: 14px 24px;
        border-bottom: 1px solid var(--border);
        transition: background 0.15s ease;
      }
      .mobile-nav-link:last-child { border-bottom: none; }
      .mobile-nav-link:hover { background: var(--surface-muted); color: var(--accent); }
    }

    @media (max-width: 900px) and (min-width: 769px) {
      .header { padding: 14px 20px; }
      .header-nav { gap: 20px; }
    }
  `;

  private _toggleMenu() {
    this._menuOpen = !this._menuOpen;
  }

  private _closeMenu() {
    this._menuOpen = false;
  }

  private _toggleTheme = () => {
    const app = (this.getRootNode() as ShadowRoot).host as { theme?: 'light' | 'dark' } | undefined;
    if (!app) return;
    const nextTheme = app.theme === 'dark' ? 'light' : 'dark';
    app.theme = nextTheme;
    try {
      window.localStorage.setItem('triotous-theme', nextTheme);
    } catch {
      // Ignore storage failures and still switch the in-memory theme.
    }
  };

  render() {
    const langHref = '#/language';
    const homeHref = this.lang === 'jp' ? '#/jp/' : '#/';
    const toggleLabel = this.theme === 'dark'
      ? (this.lang === 'jp' ? 'ライト' : 'Light')
      : (this.lang === 'jp' ? 'ダーク' : 'Dark');
    const toggleTitle = this.theme === 'dark'
      ? (this.lang === 'jp' ? 'ライトテーマに切り替え' : 'Switch to light theme')
      : (this.lang === 'jp' ? 'ダークテーマに切り替え' : 'Switch to dark theme');
    const toggleIcon = this.theme === 'dark' ? '☀' : '☾';

    return html`
      <header class="header">
        <div class="header-brand">
          <div class="header-logo-wrap">
            <img class="header-logo" src="/icons/icon-192.webp" alt="Triotous logo" />
          </div>
          <a class="header-brand-name" href="${homeHref}">${this.data.brand}</a>
        </div>
        <div class="header-right">
          <nav class="header-nav">
            ${this.data.nav.map(item => html`<a class="header-nav-link" href="${item.href}">${item.label}</a>`)}
          </nav>
          <div class="header-actions">
            <button
              class="header-theme-btn"
              @click=${this._toggleTheme}
              title=${toggleTitle}
              aria-label=${toggleTitle}
            >
              <span class="theme-icon" aria-hidden="true">${toggleIcon}</span>
              <span>${toggleLabel}</span>
            </button>
            <a class="header-lang-btn" href="${langHref}" title="Change language">${unsafeHTML(GLOBE_SVG)}</a>
          </div>
          <button class="hamburger" @click=${this._toggleMenu} aria-label="Toggle menu">☰</button>
        </div>
        <nav class="mobile-nav" ?hidden=${!this._menuOpen}>
          ${this.data.nav.map(item => html`<a class="mobile-nav-link" href="${item.href}" @click=${this._closeMenu}>${item.label}</a>`)}
        </nav>
      </header>
    `;
  }
}

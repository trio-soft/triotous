import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { LOGO_SVG, GLOBE_SVG } from '../icons.js';
import type { NavItem } from '../data/en.js';

@customElement('trio-header')
export class TrioHeader extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: { brand: string; nav: NavItem[]; getStarted: string } = {
    brand: 'Trio-Soft',
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
      border-bottom: 1px solid #c7c4d8;
      padding: 16px 24px;
      gap: 1rem;
      background: color-mix(in srgb, #f9f9ff 85%, transparent);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .header-brand { display: flex; align-items: center; gap: 12px; color: #141b2b; }
    .header-logo { width: 20px; height: 20px; color: #4f46e5; }
    .header-brand-name {
      font-size: 18px; font-weight: 700; color: #141b2b; text-decoration: none; letter-spacing: -0.02em;
    }
    .header-right { display: flex; flex: 1; justify-content: flex-end; gap: 32px; align-items: center; }
    .header-nav { display: flex; align-items: center; gap: 32px; }
    .header-nav-link {
      color: #464555; font-size: 14px; font-weight: 500; text-decoration: none;
      transition: color 0.2s ease;
    }
    .header-nav-link:hover { color: #4f46e5; }
    .header-actions { display: flex; gap: 8px; }
    .header-cta-btn {
      display: flex; min-width: 84px; cursor: pointer; align-items: center; justify-content: center; border-radius: 9999px;
      height: 40px; padding: 0 20px; background: #4f46e5; color: #ffffff; font-size: 14px; font-weight: 600;
      letter-spacing: 0.015em; border: none; text-decoration: none;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    .header-cta-btn:hover { background: #3525cd; box-shadow: 0 4px 6px -1px rgb(79 70 229 / 0.3); }
    .header-lang-btn {
      display: flex; cursor: pointer; align-items: center; justify-content: center; border-radius: 9999px;
      height: 40px; min-width: 40px; padding: 0 10px; background: #e9edff; color: #464555; text-decoration: none; border: none;
      transition: background 0.2s ease;
    }
    .header-lang-btn:hover { background: #e2dfff; color: #4f46e5; }
    .hamburger {
      display: none;
      cursor: pointer;
      background: none;
      border: none;
      font-size: 24px;
      color: #141b2b;
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
        background: #f9f9ff;
        border-bottom: 1px solid #c7c4d8;
        padding: 8px 0;
        z-index: 100;
        box-shadow: 0 8px 16px -4px rgba(0,0,0,0.1);
      }
      .mobile-nav[hidden] { display: none; }
      .mobile-nav-link {
        color: #141b2b;
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        padding: 14px 24px;
        border-bottom: 1px solid #e9edff;
        transition: background 0.15s ease;
      }
      .mobile-nav-link:last-child { border-bottom: none; }
      .mobile-nav-link:hover { background: #f1f3ff; color: #4f46e5; }
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

  render() {
    const langHref = '#/language';
    const homeHref = this.lang === 'jp' ? '#/jp/' : '#/';

    return html`
      <header class="header">
        <div class="header-brand">
          <div class="header-logo">${unsafeHTML(LOGO_SVG)}</div>
          <a class="header-brand-name" href="${homeHref}">${this.data.brand}</a>
        </div>
        <div class="header-right">
          <nav class="header-nav">
            ${this.data.nav.map(item => html`<a class="header-nav-link" href="${item.href}">${item.label}</a>`)}
          </nav>
          <div class="header-actions">
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

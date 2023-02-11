import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard5 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      m.wrapper {
        width: 400px;
        border: 2px solid black;
        display: inline-flex;
      }
      
      .image {
        width: 400px;
      }
      
      .header {
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
      }
      
      .header h3:hover {
        font-style: italic;
        font-size: 1.1em;
      }
      
      .header h3,
      .header h4 {
        transition: .3s ease-in-out all;
        margin: 16px;
        font-style: normal;
      }
      
      .buttons button:focus,
      .buttons button:hover {
        background-color: rgba(200,0,50,.5);
      }
      
      .buttons button:active {
        background-color: rgba(50,0,200,.5);
      }
      
      .buttons {
        display: block;
      }
      
      button {
        padding: 12px;
        font-size: 32px;
      }
      
      details {
        margin-left: 24px;
        padding: 10px;
      }
      .details summary {
        font-size: 20px;
        font-weight: bold;
      }
      
      
      @media only screen and (max-width: 1200px){
        .wrapper {
          background-color: aquamarine;
        }
      }
      @media only screen and (max-width: 600px){
        .wrapper {
          background-color: purple;
        }
      }
      @media only screen and (max-width: 425px){
        .wrapper {
          font-weight: normal;
        }
        .wrapper .header h3 {
          font-size: 12px;
        }
        .wrapper .header h4 {
          font-size: 10px !important;
        }
        details {
          display: none;
        }
      }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      

<div class="buttons">
<button class="duplicate">Duplicate last card</button>
<button class="modifytitle">Change Name</button>
<button id="bg" class="button">Change Background</button>
<button id="deletelastcard">Delete</button>
<button data-toggle-btn>Toggle description</button>
</div>
<div class="wrapper">
<div class="container">
<img class="image" src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg">
<div class="header">
  <h3>Landscaping Company</h3>
  <h4>A beautiful green tree</h4>
</div>
<details class="details">
  <summary>Description</summary>
  <div>
    <ul>
      <li>A tree as beautiful as this one should be cut down</li>
      <li>Trees!</li>
     </ul>
  </div>
  </details>
</div>
    `;
  }
}

customElements.define('my-card5', MyCard5);
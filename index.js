
class khmerMultiSelect extends HTMLElement {

    constructor() {
      super();
      const title = this.getAttribute('title');
      console.log('The title is ', title);
      this.innerHTML = title;
    }
}

window.customElements.define('khmer-multi-select', khmerMultiSelect);

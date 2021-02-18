class LiveTimer extends TimeFormatted {

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
    this.setAttribute("hour", "numeric");
    this.setAttribute("minute", "numeric");
    this.setAttribute("second", "numeric");
    this.timerID = setInterval(() => this.update(), 1000);
  }

  update() {
    this.date = new Date();
    this.setAttribute('datetime', this.date);
    this.dispatchEvent(new CustomEvent('tick', { detail: this.date }));
  }

  disconnectedCallback() {
    clearInterval(this.timerID);
  }


}

customElements.define("live-timer", LiveTimer);
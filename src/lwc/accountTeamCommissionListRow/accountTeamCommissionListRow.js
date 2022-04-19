import { LightningElement, api } from 'lwc';

export default class AccountTeamCommissionListRow extends LightningElement {
  _member = {};
  @api
  set member(v) {
    this._member = v;
  }
  get member() {
    return this._member;
  }

  handlePercentageUpdate(value) {
    this._member = { ...this.member, pct: parseInt(value, 10) || 0 };
    this.dispatchEvent(
      new CustomEvent('rowchange', {
        detail: this.member,
        bubbles: true,
        composed: true
      })
    );
  }

  handleSliderInput({ detail: { value } }) {
    this.handlePercentageUpdate(value);
  }

  handleNumberInput({ currentTarget: { value } }) {
    this.handlePercentageUpdate(value);
  }

  renderedCallback() {
    const table = this.template.querySelector('.row');
    if (this.error) {
      table.classList.add('error');
    } else {
      table.classList.remove('error');
    }
  }
}

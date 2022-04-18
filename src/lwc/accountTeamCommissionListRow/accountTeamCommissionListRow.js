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
    console.log(value);
    this._member = { ...this.member, pct: parseInt(value, 10) || 0 };
  }

  handleSliderInput({ detail: { value } }) {
    this.handlePercentageUpdate(value);
  }

  handleNumberInput({ currentTarget: { value } }) {
    this.handlePercentageUpdate(value);
  }
}

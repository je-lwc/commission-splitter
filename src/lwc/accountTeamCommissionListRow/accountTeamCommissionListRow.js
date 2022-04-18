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
    this._member = { ...this.member, pct: value };
  }

  handleSliderInput({ detail: value }) {
    this.handlePercentageUpdate(value);
  }

  handleNumberInput({ currentTarget: { value } }) {
    this.handlePercentageUpdate(value);
  }
}

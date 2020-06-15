/* eslint-disable no-underscore-dangle */
export default class StyleBuilder {
  constructor() {
    this.avatar = { padding: 10 };
  }

  header(background, text) {
    this._header = {
      background,
      color: text,
    };
    return this;
  }

  indicator(color) {
    this._indicator = {
      backgroundColor: color,
    };
    return this;
  }

  body(background, text) {
    this._body = {
      backgroundColor: background,
      color: text,
      padding: 75,
      paddingLeft: '10rem',
      maxWidth: 700,
    };
    return this;
  }

  preClick(color) {
    this._preClick = { color };
    return this;
  }

  postClick(color) {
    this._postClick = { color };
    return this;
  }

  build() {
    return {
      header: this._header,
      indicator: this._indicator,
      body: this._body,
      preClick: this._preClick,
      postClick: this._postClick,
      avatar: this._avatar,
    };
  }
}

class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkServerRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => this._checkServerRes(res));
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => this._checkServerRes(res));
  }

  setUserData({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    })
    .then((res) => this._checkServerRes(res));
  }

  addCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
    .then((res) => this._checkServerRes(res));
  }

  addCardLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => this._checkServerRes(res));
  }

  removeCardLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkServerRes(res));
  }

  changeLikeCardStatus(cardId, status) {
    if (status) {
      return this.addCardLike(cardId);
    } else {
      return this.removeCardLike(cardId);
    }
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkServerRes(res));
  }

  changeAvatar({ avatar }) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar })
    })
    .then((res) => this._checkServerRes(res));
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: 'b7beb2f2-51a9-4b03-8658-31d9c29a3434',
    'Content-Type': 'application/json'
  }
})

export default api;
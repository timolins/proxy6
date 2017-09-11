const qs = require('querystring')
const request = require('request-promise-native')

class Proxy6 {
  constructor(apiKey) {
    if (!apiKey) {
      return console.error('No API key provided!')
    }

    this.request = request.defaults({
      baseUrl: `https://proxy6.net/api/${apiKey}`,
      json: true
    })
  }
  handleRequest(method, params = {}) {
    return new Promise((resolve, reject) => {
      this.request(`${method}?${qs.stringify(params)}`).then(data => {
        if (data.error) {
          return reject(data.error)
        }
        resolve(data)
      }).catch(reject)
    })
  }
  getPrice(params) {
    return this.handleRequest('getprice', params)
  }
  getCount(params) {
    return this.handleRequest('getcount', params)
  }
  getCountry(params) {
    return this.handleRequest('getcountry', params)
  }
  setType(params) {
    return this.handleRequest('settype', params)
  }
  setDescription(params) {
    return this.handleRequest('setdescr', params)
  }
  buy(params) {
    return this.handleRequest('buy', params)
  }
  extend(params) {
    return this.handleRequest('prolong', params)
  }
  delete(params) {
    return this.handleRequest('deleted', params)
  }
}

module.exports = Proxy6

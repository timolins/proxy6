# Proxy6

A tiny JavaScript wrapper for the [Proxy6.net API](https://proxy6.net/en/developers).

### Example
```js
import Proxy6 from 'proxy6'

const proxy6 = new Proxy6('<YOUR API KEY>')

proxy6.getPrice({
  count: 50,
  period: 30
}).then(data => {
    console.log(data)
})
```
### Reference
Each method takes a `params` Object. All available parameters can be found at Proxy6's  [API documentation](https://proxy6.net/en/developers).

* `getPrice`
* `getCount`
* `getCountry`
* `setType`
* `setDescription`
* `buy`
* `extend`
* `delete`

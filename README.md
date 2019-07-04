# xerror
xtrct.io error class

## Install
```bash
npm i -S @xtrctio/xerror
```

## Use
```javascript
const XError = require('@xtrctio/xerror');

// Throws error which inheirits from Error and has a default http code of 500 INTERNAL_SERVER_ERROR
const throws = () => { throw new XError('boom'); };

// Throw with a different http code
// XError.HTTP_STATUS is just the 'http-status' package
const throwsWithHttpError = () => { throw new XError('boom', XError.HTTP_STATUS.BAD_REQUEST); };

// Throw with special data
const throwsWithData = () => { throw new XError('boom', undefined, {foo: 'bar'}); };
```

<a name="RError"></a>

## RError
**Kind**: global class  
<a name="new_RError_new"></a>

### new RError(message, [code], [data])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | error message |
| [code] | <code>number</code> | <code>500</code> | http error code |
| [data] | <code>any</code> |  | any extra data to attach to the error |


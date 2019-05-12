# verror
Voiceflow error class

## Install
```bash
npm i -S @voiceflow/verror
```

## Use
```javascript
const VError = require('@voiceflow/verror');

// Throws error which inheirits from Error and has a default http code of 500 INTERNAL_SERVER_ERROR
const throws = () => { throw new VError('boom'); };

// Throw with a different http code
// VError.HTTP_STATUS is just the 'http-status' package
const throwsWithHttpError = () => { throw new VError('boom', VError.HTTP_STATUS.BAD_REQUEST); };

// Throw with special data
const throwsWithData = () => { throw new VError('boom', undefined, {foo: 'bar'}); };
```

<a name="verror"></a>

## verror
**Kind**: global class  
<a name="new_verror_new"></a>

### new verror(message, [code], [data])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | error message |
| [code] | <code>number</code> | <code>500</code> | http error code |
| [data] | <code>any</code> |  | any extra data to attach to the error |


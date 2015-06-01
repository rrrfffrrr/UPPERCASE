# UPPERCASE.IO-UPLOAD
클라이언트에서 서버로의 파일 업로드 처리를 쉽게 하는 모듈입니다.

## 서버에서 파일 업로드 요청을 받아오는 방법
`UPPERCASE.IO-UPLOAD`는 `UPPERCASE.JS`와 `UPPERCASE.IO-TRANSPORT`, `UPPERCASE.IO-UTIL`을 기반으로 합니다.

```javascript
// load UPPERCASE.JS.
require('../../../UPPERCASE.JS-COMMON.js');
require('../../../UPPERCASE.JS-NODE.js');

// load UPPERCASE.IO-TRANSPORT.
require('../../../UPPERCASE.IO-TRANSPORT/NODE.js');

// load UPPERCASE.IO-UTIL.
require('../../../UPPERCASE.IO-UTIL/NODE.js');

// load UPPERCASE.IO-UPLOAD.
require('../../../UPPERCASE.IO-UPLOAD/NODE.js');

var
// web server
webServer = WEB_SERVER({
	port : 8124,
	// __UPLOAD라는 경로는 업로드 처리를 위해 웹 서버에서 따로 parsing 하지 않는다.
	noParsingParamsURI : '__UPLOAD'
}, function(requestInfo, response, onDisconnected) {

	if (requestInfo.uri === '__UPLOAD') {

		UPLOAD_REQUEST({
			requestInfo : requestInfo,
			// 업로드 한 파일들이 UPLOAD_FILES 폴더에 저장됩니다.
			uploadPath : __dirname + '/UPLOAD_FILES'
		}, {
			error : function(errorMsg) {
				response(errorMsg);
			},
			overFileSize : function() {
				response('OVER FILE SIZE!');
			},
			success : function(fileDataSet) {
				response(STRINGIFY(fileDataSet));
			}
		});
	}
});
```

## API
* `UPLOAD_REQUEST({requestInfo:, uploadPath:}, function() {...})` `UPLOAD_REQUEST({requestInfo:, uploadPath:}, {overFileSize:, error:, success:})` create upload request handler. [예제보기](https://github.com/UPPERCASE-Series/UPPERCASE.IO/blob/master/EXAMPLES/UPLOAD/NODE/UPLOAD_REQUEST.js)
	* UPLOAD_REQUEST가 업로드 파일을 처리할 수 있도록 반드시 웹 서버에 noParsingParamsURI 설정을 추가해야 합니다. 예제를 참고해주세요.

## 업로드 폼 생성
웹 브라우저 환경에서는 `UPPERCASE.IO-UPLOAD`는 `UPPERCASE.JS`와 `UPPERCASE.IO-TRANSPORT`를 기반으로 합니다.

```html
<script>
	global = window;
</script>

<!-- import UPPERCASE.JS -->
<script src="UPPERCASE.JS-COMMON.js"></script>
<script src="UPPERCASE.JS-BROWSER.js"></script>
<script>
	BROWSER_CONFIG.fixScriptsFolderPath = 'UPPERCASE.JS-BROWSER-FIX';
	LOAD('UPPERCASE.JS-BROWSER-FIX/FIX.js');
</script>

<!-- import UPPERCASE.IO-TRANSPORT -->
<script src="UPPERCASE.IO-TRANSPORT/BROWSER.js"></script>

<script>
	READY(function() {
	
    	// init all singleton classes.
		INIT_OBJECTS();
		
		var
		// wrapper
		wrapper = DIV({
			c : [
			
			// 업로드가 완료되면 이곳에 파일 정보가 출력됩니다.
			IFRAME({
			    name : '__UPLOAD_FORM'
			}),
			
			// 업로드 폼
			FORM({
				action : 'http://' + BROWSER_CONFIG.host + ':' + BROWSER_CONFIG.port + '/__UPLOAD',
				target : '__UPLOAD_FORM',
				method : 'POST',
				enctype : 'multipart/form-data',
				c : [ input = INPUT({
					type : 'file',
					name : 'file',
					isMultiple : true
				}), INPUT({
				    type : 'submit'
				})]
			})]
		}).appendTo(BODY)
	});
</script>
```
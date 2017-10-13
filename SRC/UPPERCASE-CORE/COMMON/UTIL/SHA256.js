/*
 * 비밀번호를 주어진 키를 이용하여 HMAC SHA256 알고리즘으로 암호화 합니다.
 */
global.SHA256 = METHOD({

	run : (params) => {
		//REQUIRED: params
		//REQUIRED: params.password
		//REQUIRED: params.key

		let password = params.password;
		let key = params.key;
		
		let hash = __SHA256_LIB.hmac.create(key);
		hash.update(password);

		return hash.hex();
	}
});
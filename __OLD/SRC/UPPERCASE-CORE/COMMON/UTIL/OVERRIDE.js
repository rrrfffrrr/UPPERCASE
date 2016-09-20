/**
 * 오버라이드를 수행합니다.
 */
global.OVERRIDE = METHOD({

	run : function(origin, func) {
		'use strict';
		//REQUIRED: origin	오버라이드 할 대상
		//REQUIRED: func

		// when origin is OBJECT.
		if (origin.type !== undefined && origin.type.type === CLASS) {

			// remove origin from init ready objects.
			OBJECT.removeReadyObject(origin);
		}

		func(origin);
	}
});
/**
 * is ios
 * @return {Boolean} [description]
 */
function isIOS() {
    var u = navigator.userAgent;
    if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        return true;
    } else {
        return false;
    }
}

/**
 * toast
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function showToast(str) {
    if (isIOS() && window.webkit) {
        window.webkit.messageHandlers.showToast.postMessage({body: str});
    } else {
    	if (window.novel && (typeof window.novel.toast === "function")) {
    		window.novel.toast(str);
    	} else {
    		alert(str);
    	}
    }
}

/**
 * 关闭窗口
 * @return {[type]} [description]
 */
function closeWindow() {
    if (isIOS() && window.webkit) {
        window.webkit.messageHandlers.closeWindow.postMessage();
    } else {
        if (window.novel && (typeof window.novel.closeWindow === "function")) {
            window.novel.closeWindow();
        }
    }
}

/**
 * 添加源
 * @param {[type]} str [description]
 */
function addSource(str) {
    if (isIOS() && window.webkit) {
        window.webkit.messageHandlers.addSource.postMessage({body: str});
    } else {
        if (window.novel && (typeof window.novel.addSource === "function")) {
            window.novel.addSource(str);
        } else {
            showToast(str);
        }
    }
}

function isJsonStr(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str);
            return true;
        } catch(e) {
            return false;
        }
    }   
}

/**
 * 判断是否为数组类型字符串
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */
function isArrayStr(str) {
    if (typeof str == 'string') {
        try {
            eval(str);
            return true;
        } catch(e) {
            return false;
        }
    }   
}

/**
 * 判断是否为url
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */
function isUrl(str) {
	var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;

	var objExp = new RegExp(Expression);
	if (objExp.test(str) == true){
		return true;
	} else {
		return false;
	}
}
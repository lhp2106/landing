var configHeader = {
    // Cấu hình đường dẫn của Header
    urlConfig: {
        authenUrl: 'https://authen.saovip.fun/',
    }
}

var Utils = (function ($) {
    var scaleChg = 1;
    function showOverlayPopup(html, zIndex) {
        if (zIndex == undefined || !(zIndex >= 0)) {
            zIndex = 1000;
        }
        closeOverlayPopup();
        if ($("#hpopup_wrap").length < 1) {
            $("body").append("<div id='hpopup_container' style='z-index:" + zIndex + ";position:absolute'><div id='hpopup_overlay'></div><div id='hpopup_wrap'></div></div>");
            $("#hpopup_wrap").html(html);
            $("#hpopup_wrap, #hpopup_overlay").css("position", "fixed");
            var nWidth = parseFloat($("#hpopup_wrap").css("width"));
            var nHeight = parseFloat($("#hpopup_wrap").css("height"));
            var top = $(window).height() / scaleChg / 2 - nHeight / 2;
            var left = $(window).width() / scaleChg / 2 - nWidth / 2;
            $("#hpopup_wrap").css("top", top);
            $("#hpopup_wrap").css("left", left);
            $("#hpopup_overlay").css("width", "100%");
            $("#hpopup_overlay").css("height", $(window).height() / scaleChg);
            $("#hpopup_overlay").css("background-color", "black");
            $("#hpopup_overlay").css("opacity", "0.75");
            $("#hpopup_overlay").css("top", "0");
        }
    }

    function closeOverlayPopup() {
        if ($("#hpopup_container").length > 0) {
            $("#hpopup_container").remove();
        }
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function showLoading() {
        hideLoading();
        if ($("#ld_wrap").length < 1) {
            $("body").append("<div id='ld_container' style='z-index:50000;width: 100%;height: 100%;position: fixed;top: 0px;'><div id='ld_overlay'></div><div id='ld_wrap'></div></div>");

            var loadingHtml = '<div id="circularG">'
				+ '<div id="circularG_1" class="circularG"></div>'
				+ '<div id="circularG_2" class="circularG"></div>'
                + '<div id="circularG_3" class="circularG"></div>'
				+ '<div id="circularG_4" class="circularG"></div>'
				+ '<div id="circularG_5" class="circularG"></div>'
				+ '<div id="circularG_6" class="circularG"></div>'
				+ '<div id="circularG_7" class="circularG"></div>'
				+ '<div id="circularG_8" class="circularG"></div>'
			    + '</div>';
            $("#ld_wrap").html(loadingHtml);
            $("#ld_wrap, #ld_overlay").css("position", "fixed");
            var nWidth = parseInt($("#ld_wrap").css("width"));
            var nHeight = parseInt($("#ld_wrap").css("height"));
            var top = $(window).height() / scaleChg / 2 - nHeight / 2;
            var left = $(window).width() / scaleChg / 2 - nWidth / 2;
            $("#ld_wrap").css("top", top);
            $("#ld_wrap").css("left", left);
            $("#ld_overlay").css("width", "100%");
            $("#ld_overlay").css("height", "100%");
            $("#ld_overlay").css("background-color", "black");
            $("#ld_overlay").css("opacity", "0.75");
        }
    }

    function hideLoading() {
        $("#ld_container").remove();
    }

    function formatMoney(money) {
        if (money == undefined) return '';
        var strMoney = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return strMoney;
    }

    function fomatDateTime(sDate, formatType) {
        var syear = sDate.substring(0, 4);
        var smonth = sDate.substring(5, 7);
        var sday = sDate.substring(8, 10);
        var newlDate = smonth + "/" + sday + "/" + syear;
        var lDate = new Date(newlDate);
        var month = new Array(12);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var hh = lDate.getHours() < 10 ? '0' +
            lDate.getHours() : lDate.getHours();
        var mi = lDate.getMinutes() < 10 ? '0' +
            lDate.getMinutes() : lDate.getMinutes();
        var ss = lDate.getSeconds() < 10 ? '0' +
            lDate.getSeconds() : lDate.getSeconds();

        var d = lDate.getDate();
        var dd = d < 10 ? '0' + d : d;
        var yyyy = lDate.getFullYear();
        var mon = eval(lDate.getMonth() + 1);
        var mm = (mon < 10 ? '0' + mon : mon);
        var monthName = month[lDate.getMonth()];
        var weekdayName = weekday[lDate.getDay()];

        if (formatType == 1) {
            return mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mi;
        } else if (formatType == 2) {
            return weekdayName + ', ' + monthName + ' ' +
                dd + ', ' + yyyy;
        } else if (formatType == 3) {
            return mm + '/' + dd + '/' + yyyy;
        } else if (formatType == 4) {
            var dd1 = lDate.getDate();
            return dd1 + '-' + window.Left(monthName, 3) + '-' + yyyy;
        } else if (formatType == 5) {
            return mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mi + ':' + ss;
        } else if (formatType == 6) {
            return mon + '/' + d + '/' + yyyy + ' ' +
                hh + ':' + mi + ':' + ss;
        } else if (formatType == 7) {
            return dd + '-' + monthName.substring(0, 3) +
                '-' + yyyy + ' ' + hh + ':' + mi + ':' + ss;
        }
        return dd + '/' + mm + '/' + yyyy;
    }

    function replaceAll(str, replace, with_this) {
        var str_hasil = "";
        var temp;

        for (var i = 0; i < str.length; i++) // not need to be equal. it causes the last change: undefined..
        {
            if (str[i] == replace) {
                temp = with_this;
            }
            else {
                temp = str[i];
            }

            str_hasil += temp;
        }

        return str_hasil;
    }

    function detectMobile() {
        if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        }
        else {
            return false;
        }
    }


    function copyToClipboard(elem) {
        // create hidden text element, if it doesn't already exist
        var targetId = "_hiddenCopyText_";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;
        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);
            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);

        // copy the selection
        var succeed;
        try {
            succeed = document.execCommand("copy");
        } catch (e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.textContent = "";
        }
        return succeed;
    }

    $.loadStyleSheet = function (url, callback) {
        if (document.createStyleSheet) {
            try { document.createStyleSheet(url); } catch (e) { }
        }
        else {
            var css;
            css = document.createElement('link');
            css.rel = 'stylesheet';
            css.type = 'text/css';
            css.media = "all";
            css.href = url;
            document.getElementsByTagName("head")[0].appendChild(css);
        }
        if (callback) {
            callback();
        }
    }

    $.loadMultiStyleSheet = function (styleSheets, callback) {
        var array = [];
        styleSheets.forEach(function (styleSheet) {
            array.push($.loadStyleSheet(styleSheet));
        });
        return $.when.apply($, array).always(function () {
            if (callback) {
                callback();
            }
        });
    }



    $.loadMultiScripts = function (scripts, callback) {
        var array = [];

        scripts.forEach(function (script) {
            array.push($.getScript(script));
        });

        $.when.apply($, array).always(function () {
            if (callback) {
                callback();
            }
        });
    }

    return {
        showOverlayPopup: function (html, zIndex) { showOverlayPopup(html, zIndex); },
        closeOverlayPopup: function () { closeOverlayPopup(); },
        showLoading: function () { showLoading(); },
        hideLoading: function () { hideLoading(); },
        formatMoney: function (money) { return formatMoney(money) },
        mobileCheck: function () { return detectMobile(); },
        replaceAll: function (str, replace, with_this) { return replaceAll(str, replace, with_this); },
        isNumeric: function (n) { return isNumeric(n) },
        copyToClipboard: function (n) { return copyToClipboard(n) }
    }
})($);


var GlobalHeader = (function ($) {

    var globalHeader = {};

    globalHeader.InitMinigame = null;
    globalHeader.AccountId = '';
    globalHeader.AccountName = '';
    globalHeader.NickName = '';
    globalHeader.TotalUpdateNick = 1;
    var loginInfo = {
        Username: '',
        PasswordMd5: '',
        Captcha: '',
        Verify: '',
        ServiceId: '',
        UrlRoot: '',
        ContinueUrl: ''
    };
    var itemsId = {
        DivCaptcha: 'headerDivCaptcha',
        CaptchaImg: 'headerCaptchaImg',
        CaptchaVerify: 'headerCaptchaVerify',
        InputUserName: 'headerInputUser',
        InputPassword: 'headerInputPass',
        InputRePassword: 'headerInputRePass',
        InputCaptchaUser: 'headerCaptchaInput',
        ErrorDivMessage: 'headerDivErrorMessage',
        ErrorMessage: 'headerErrorMessage'
    }

    globalHeader.InitHeader = function (data) {
        addGaInfo(); // add ga
        if (data == undefined || data.ServiceId <= 0) return;

        loginInfo.ServiceId = data.ServiceId;
        loginInfo.UrlRoot = data.UrlRoot;
        loginInfo.ContinueUrl = data.LoginUrl;

    }

    /* Đăng Ký */
    globalHeader.ShowRegisterPopup = function () {
        GlobalHeader.RefreshCaptcha();
    }

    globalHeader.QuickRegister = function (notRepass) {
        hideMessageError();
        var txtAccount = $("#" + itemsId.InputUserName).val();
        var txtPassword = $("#" + itemsId.InputPassword).val();

        var txtRePassword = $("#" + itemsId.InputRePassword).val();

        var captCha = $("#" + itemsId.InputCaptchaUser).val();
        var verify = $("#" + itemsId.CaptchaVerify).val();
        if (txtAccount == '') {
            showMessageError("Vui lòng nhập tên tài khoản");
            return;
        }

        if (txtAccount.length < 4 || txtAccount.length > 16 ||
            !txtAccount.match(/[a-z0-9]+/i) || !txtAccount.charAt(0).match(/[a-z]+/i)) {
            $("#" + itemsId.InputUserName).focus();
            showMessageError("Tên tài khoản từ 4-16 ký tự và bắt đầu bằng chữ cái");
            return;
        }

        if (txtPassword == '') {
            $("#" + itemsId.InputPassword).focus();
            showMessageError("Vui lòng nhập mật khẩu");
            return;
        }

        if (txtPassword.length < 6 || txtPassword.length > 18) {
            $("#" + itemsId.InputPassword).focus();
            showMessageError("Mật khẩu có độ dài 6-18 ký tự");
            return;
        }
        if (!(notRepass > 0) && txtRePassword != txtPassword) {
            $("#" + itemsId.InputRePassword).focus();
            showMessageError("Nhập lại mật khẩu không chính xác!");
            return;
        }
        if (captCha == '' || captCha.length < 3) {
            $("#" + itemsId.InputCaptchaUser).focus();
            showMessageError("Vui lòng chính xác nhập mã kiểm tra");
            return;
        }

        //var accessToken = grecaptcha.getResponse();
        //if (accessToken == null || accessToken == '') {
        //    showMessageError('Vui lòng tick vào ô "Tôi không phải người máy"');
        //    return;
        //}

        if (typeof(gtag) != 'undefined') {
            gtag('event', 'Register', {
                'event_category': 'Register-Click',
                'event_label': 'Tracking'
            });
        }


        var registerData = {
            UserName: txtAccount,
            Password: txtPassword,
            Captcha: captCha,
            Verify: verify,
            ServiceId: loginInfo.ServiceId,
            UrlRoot: loginInfo.UrlRoot,
            ContinueUrl: loginInfo.ContinueUrl,
            TrackingUri: window.location.href
            //GoogleToken: accessToken
        };

        //loading
        Utils.showLoading();
        $.ajax({
            type: "POST",
            url: configHeader.urlConfig.authenUrl + "api/Account/QuickRegister",
            data: JSON.stringify(registerData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if (data.ResponseCode > 0) {
                    if (typeof (fbq) != 'undefined') {
                        fbq('track', 'CompleteRegistration');
                    }

                    if (typeof(gtag) != 'undefined') {
                        gtag('event', 'NRU', {
                            'event_category': 'Register-Success',
                            'event_label': 'Tracking'
                        });
                    }
                    Utils.hideLoading();

                    sessionStorage.setItem("url_LandingRedirect", data.Description);
                    window.location = "/thankyou"
                    //$('#registerAccInfo').hide();
                    //$('#registerSuccess').show();
                    //$('#hrefRedirect').attr("href", data.Description)
                    //setTimeout(function () {
                    //    window.location = data.Description;
                    //}, 5000);
                    //grecaptcha.reset();
                    //window.location = data.Description; // thành công thì chuyển người dùng tới link login
                    //grecaptcha.reset();
                    return;

                }
                if (typeof(gtag) != 'undefined') {
                    gtag('event', 'NRU', {
                        'event_category': 'Register-Fail',
                        'event_label': 'Tracking'
                    });
                }

                showMessageError(data.Description);
                //unloading
                Utils.hideLoading();
            }
        }).always(function () {
            GlobalHeader.RefreshCaptcha()
        });
    }
    globalHeader.LoginOpenId = function (type) {
        var redirectLink = '';
        var authentype = '';
        if (type == 1) { // facebook login
            authentype = 'facebook';
        } else if (type == 2) { // google login
            authentype = 'google';
        } else {
            return;
        }
        redirectLink = configHeader.urlConfig.authenUrl + 'Api/Account/LoginOpenId?LoginType=' + authentype + '&ServiceId=' + loginInfo.ServiceId +
            '&UrlRoot=' + encodeURIComponent(loginInfo.UrlRoot) + "&ContinueUrl=" + encodeURIComponent(loginInfo.ContinueUrl) + "&TrackingUri=" + encodeURIComponent(location.href);

        if (typeof (gtag) != 'undefined') {
            var utm_campaign = getParameterByName('utm_campaign', window.location.href);
            if (utm_campaign == undefined || utm_campaign == '') {
                utm_campaign = "Tracking";
            }
            gtag('event', 'NRU', {
                'event_category': 'Click-Authen-OpenID',
                'event_label': 'Click-Authen-OpenID Campaign',
                'authentype': authentype,
                'utm_campaign': utm_campaign
            });
        }

        var utm_campaign = getParameterByName('utm_campaign', window.location.href);
        if (utm_campaign == undefined || utm_campaign == '') {
            utm_campaign = "Tracking";
        }
        if (typeof (gtag) != 'undefined') {
            gtag('event', 'Click-Authen-OpenID', {
                'event_category': authentype,
                'event_label': utm_campaign
            });
        }
        window.location = redirectLink;
    }

    globalHeader.RefreshCaptcha = function (prefix) {
        var url = configHeader.urlConfig.authenUrl + "Api/Captcha/Get?length=3"
        $.ajax({
            type: "GET",
            url: url,
            success: function (captchaData) {
                if (captchaData != undefined) {
                    if (typeof (prefix) == 'undefined') {
                        prefix = '';
                    }
                    $("#" + itemsId.CaptchaImg + prefix).attr("src", "data:image/jpeg;base64," + captchaData[1] + "");
                    $("#" + itemsId.CaptchaVerify + prefix).val(captchaData[0]);
                    $("#" + itemsId.InputCaptchaUser + prefix).val("");
                    $("#" + itemsId.DivCaptcha + prefix).show();
                }
            }
        });
    }
    globalHeader.CheckExistAccountName = function () {
        var accountName = $('#headerInputUser').val();
        if (accountName != undefined && accountName.length > 0) {
            if (accountName.length < 4 || accountName.length > 16) {
                showMessageError("Tên tài khoản không hợp lệ!");
                $("#headerInputUser").focus();
                return;
            }
            var url = configHeader.urlConfig.authenUrl + "Api/Account/CheckExistAccountName?accountName=" + accountName;
            $.ajax({
                type: "GET",
                url: url,
                success: function (data) {
                    if (data && data.ResponseCode > 0) {
                        showMessageError(data.Description);
                        $("#headerInputUser").focus();
                    } else {
                        hideMessageError();
                    }
                }
            });
        }
    }
    
    function showMessageError(description, prefix) {
        if (typeof (prefix) == 'undefined') {
            prefix = '';
        }
        $("#" + itemsId.ErrorMessage + prefix).html(description);
        $("#" + itemsId.ErrorDivMessage + prefix).show();
    }

    function hideMessageError(prefix) {
        if (typeof (prefix) == 'undefined') {
            prefix = '';
        }
        $("#" + itemsId.ErrorMessage + prefix).html("");
        $("#" + itemsId.ErrorDivMessage + prefix).hide();
    }

    function addGaInfo() {

        //Tracking Google Facebook
        var utm_campaign = getParameterByName('utm_campaign', window.location.href);
        if (utm_campaign == undefined || utm_campaign === '') {
            utm_campaign = "Tracking";
        }
        if (parseInt(getParameterByName("LoginGoogle", window.location.href)) > 0) {
            if (typeof(gtag) != 'undefined') {
                gtag('event', 'LoginGoogle', {
                    'event_category': 'LoginGoogle-Success',
                    'event_label': utm_campaign
                });
            }
            sessionStorage.setItem("CheckRegisterSms5k", "1");
            history.pushState({}, '', window.location.href.replace("?LoginGoogle=1", "").replace("&LoginGoogle=1", ""));
        }
        if (parseInt(getParameterByName("LoginFacebook", window.location.href)) > 0) {

            if (typeof(gtag) != 'undefined') {
                gtag('event', 'LoginFacebook', {
                    'event_category': 'LoginFacebook-Success',
                    'event_label': utm_campaign
                });
            }
            sessionStorage.setItem("CheckRegisterSms5k", "1");
            history.pushState({}, '', window.location.href.replace("?LoginFacebook=1", "").replace("&LoginFacebook=1", ""));
        }


        if (parseInt(getParameterByName("RegisterFacebook", window.location.href)) > 0) {

            if (typeof(gtag) != 'undefined') {
                gtag('event', 'RegisterFacebook', {
                    'event_category': 'RegisterFacebook-Success',
                    'event_label': utm_campaign
                });
            }

            if (typeof (fbq) != 'undefined') {
                fbq('track', 'CompleteRegistration');
            }
            history.pushState({}, '', window.location.href.replace("?RegisterFacebook=1", "").replace("&RegisterFacebook=1", ""));
        }
        if (parseInt(getParameterByName("RegisterFailFacebook", window.location.href)) > 0) {

            if (typeof(gtag) != 'undefined') {
                gtag('event', 'RegisterFacebook', {
                    'event_category': 'RegisterFacebook-Fail',
                    'event_label': utm_campaign
                });
            }
            history.pushState({}, '', window.location.href.replace("?RegisterFailFacebook=1", "").replace("&RegisterFailFacebook=1", ""));
        }
        if (parseInt(getParameterByName("RegisterGoogle", window.location.href)) > 0) {

            if (typeof(gtag) != 'undefined') {
                gtag('event', 'RegisterGoogle', {
                    'event_category': 'RegisterGoogle-Success',
                    'event_label': utm_campaign
                });
            }
            history.pushState({}, '', window.location.href.replace("?RegisterGoogle=1", "").replace("&RegisterGoogle=1", ""));
        }
        if (parseInt(getParameterByName("RegisterFailGoogle", window.location.href)) > 0) {

            if (typeof(gtag) != 'undefined') {
                gtag('event', 'RegisterGoogle', {
                    'event_category': 'RegisterGoogle-Fail',
                    'event_label': utm_campaign
                });
            }
            history.pushState({}, '', window.location.href.replace("?RegisterFailGoogle=1", "").replace("&RegisterFailGoogle=1", ""));
        }
    };

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    return globalHeader;
})($);

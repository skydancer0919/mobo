define('farsi:signin', function(require, exports, module){
    var dictionary = {
        signUpHeader: "ثبت‌نام",
        myAccountLabel: "حساب من",
        logoutLabel: "خروج از سیستم",
        errorEmailLabel: "مانند یک ایمیل معتبر نیست.",
        emptyEmailLabel: "نمی‌توانید آن را خالی رها کنید.",
        shortPwdLabel: "رمز ورود باید حداقل ۸ نویسه باشد.",
        longPwdLabel: "رمز ورود نباید بیشتر از ۲۰ نویسه باشد.",
        notMatchPwdLbel: "تأیید رمز ورود با رمز ورود یکسان نیست. دوباره رمز ورود را تایپ کنید.",
        usedEmailLabel: "این آدرس ایمیل استفاده شده است. لطفاً با مورد دیگری امتحان کنید.",
        errorLoginLbel: "رمزهای ورود یکسان نیستند. دوباره رمزهای ورود را وارد کنید.",
        agreeLabel: "موافقم",
        userAgreenebtLabel: "توافق‌نامه کاربر",
        orLabel: "یا",
        forgotPwdLabel: "رمز ورود را فراموش کرده‌اید؟",
        changeLabel: "تغییر",
        sendLabel: "ارسال ایمیل تأیید",
        changePwdLabel: "تغییر رمز ورود",
        pwdSuccessLabel: "رمز ورود با موفقیت به‌روز شد!",
        confirmLabel: "تأیید",
        networkLabel: "اتصال شبکه ناموفق بود. بعداً امتحان کنید.",
        nullAccount: "حساب‌های خنثی",
        errorPwdLabel: "فقط حرف و عدد",
        sendSuccessLabel: "با موفقیت ارسال شد.",
        errorCodeLabel: "کد تأیید وارد شده اشتباه است.",
        imgUploadSuccess: "با موفقیت آپلود شد",
        imgUploadFailed: "آپلود نشد",
        incorrectPwd: "رمز ورود فعلی نادرست است. لطفاً دوباره امتحان کنید.",
        registerFailedLabel: "ثبت‌نام حساب جدید ناموفق بود",
        waitImageUploadLabel: "لطفاً صبور باشید.",
        loginInputText:"رمز ورود",
        conWordInputText:"تأیید رمز ورود",
        enterCodeInputText:"کد را وارد کنید",
        //20140811
        samePwdLabel: "رمز ورودی انتخاب کنید که قبلاً برای این حساب استفاده نکرده باشید.",
        //20140812
        errorPicLabel: "فرمت تصویر نامعتبر است. می‌توانید یک فایل jpg،‏ gif یا png را آپلود کنید.",
		oldword:"رمز ورود قبلی",
		newword:"رمز ورود جدید",
		conword:"تأیید رمز ورود",
        //20140917
        selectPicFromPCLabel: "عکسی را از رایانه انتخاب کنید",
        selectPicFromPhoneLabel: "عکسی را از تلفن انتخاب کنید",
        promptConnect: "لطفاً دستگاهتان را با کابل USB وصل کنید.",
        setAsProfilePhoto: "تنظیم به عنوان عکس نمایه",
        promptPullPic: "در حال برداشتن عکس از تلفن، لطفاً صبر کنید...",
        promptPullPicFailed: "برداشتن عکس از تلفن ناموفق بود، لطفاً دوباره امتحان کنید.",
        promptLargePic: "اندازه عکسی که استفاده می‌کنید خیلی بزرگ است. اندازه آن را تغییر داده یا از عکس دیگری استفاده کنید.",
        promptFailAuth: "گرفتن تأیید اعتبار شخص ثالث ناموفق بود، لطفاً شبکه، فایروال و حساب کاربری خود را بررسی کنید.",
        imgUploading:"در حال آپلود کردن..."
    };
    return dictionary;
});
﻿define('russian:driver', function(require, exports, module){
    var dictionary = {
		badNetworkTitle:'Неустойчивое подключение к сети. Проверьте подключение.',/*不超过70个字符*/
		pictureGuide: 'Фото Гид',/*不超过26个字符*/
		videoGuide: 'Видео Гид',/*不超过26个字符*/
		myVersion: 'Версия Android:',/*不超过26个字符*/
		debugFootText: 'Не получилось открыть отладку по USB?',/*不超过40个字符*/
		oneClickSet: 'Настройка',/*不超过30个字符*/
		tryConnectText: 'Попробуйте отключить и снова подключить кабель или перезагрузите устройство.',/*不超过70个字符*/
		butBack: 'Назад',
		ContactSupport: 'Связаться со службой поддержки',/*不超过30个字符*/
		allowDebugText: 'Нажмите "ОК", когда появится запрос на разрешение отладки по USB.',/*不超过70个字符*/
		allowDebugTip: "<i>1</i> Включите этот параметр",/*不超过50个字符*/
		allowDebugOkTip: "<i>2</i> Нажмите <b>[OK]</b>",/*不超过50个字符*/
		butRetry: 'Не видите это всплывающее окно?',/*不超过60个字符*/
		butShowAgain: 'Показать еще раз',/*不超过25个字符*/
		stillNoSolove: 'По-прежнему не работает?',
        debugTipText: 'Загрузите {0} (12 КБ) на ваше устройство',/*不超过50个字符*/
        debugSetterContentText: ' [USB-отладчик]',/*不超过20个字符*/
		orText: 'ИЛИ',
		noSpaceHint: 'Недостаточно места на устройстве.',/*不超过60个字符*/
		noSpaceText: 'Для Mobogenie требуется не менее {0} дискового пространства.',/*不超过50个字符*/
		needSpaceText: '10 MБ',
		upSpaceText: 'Удалите несколько приложений, чтобы освободить место.',/*不超过60个字符*/
		butHaveSpace: 'У меня достаточно памяти',/*不超过32个字符*/
		connectFailedTitle:'Ой! Ошибка подключения!',
		connectFailedTryText: 'Попробуйте отключить и снова подключить устройство.',/*不超过90个字符*/
		connectFailedRestart: 'Перезапустить Mobogenie.',/*不超过90个字符*/
		RestartDevice: 'Перезагрузите компьютер и устройство.',/*不超过90个字符*/
		connectFailedText: 'Если это не поможет, прочтите ответы на часто задаваемые вопросы или расскажите нам о своей проблеме.',/*不超过90个字符*/
		
		connectionGuide:'Руководство по подключению',
		driverUsbTitle: 'Подключите ваше устройство через USB-кабель!',/*不超过50个字符*/
		driverUsbText: 'После подключения устройства вы сможете бесплатно загружать игры, приложения и многое другое, а также управлять устройством!',
		
		AndroidLowDebugStep1: '<i>1</i> Нажмите <b>[Приложения]</b>',/*不超过60个字符*/
		AndroidLowDebugStep2: '<i>2</i> Нажмите <b>[Настройки]</b>',/*不超过60个字符*/
		AndroidLowDebugStep3: '<i>3</i> Нажмите <b>[Приложения]</b>',/*不超过60个字符*/
		AndroidLowDebugStep4: '<i>4</i> Нажмите <b>[Разработка]</b>',/*不超过60个字符*/
		AndroidLowDebugStep5: '<i>5</i> Отметьте <b>[Отладка по USB]',/*不超过60个字符*/
		AndroidLowDebugStep6: '<i>6</i> Нажмите <b>[OK]</b>',/*不超过60个字符*/
		AndroidHighDebugStep3: '<i>3</i> Нажмите <b>[Опции разработчика]</b>',/*不超过60个字符*/
		AndroidHigherDebugStep3: '<i>3</i> Нажмите <b>[О телефоне]</b>',/*不超过60个字符*/
		AndroidHigherDebugStep4: '<i>4</i> Нажмите <b>[Номер сборки]</b> несколько раз',/*不超过60个字符*/
		AndroidHigherDebugStep5: '<i>5</i> Будет включен режим разработчика',/*不超过60个字符*/
		AndroidHigherDebugStep6: '<i>6</i> Вернитесь назад и нажмите <b>[Опции разработчика]',/*不超过60个字符*/
		AndroidHigherDebugStep9: '<i>9</i> Отметьте <b>[Всегда разрешать отладку с этого компьютера]</b>',/*不超过60个字符*/
		
		SamsungHighDebugStep4: '<i>4</i> Отметьте <b>[Опции разработчика]</b>',/*不超过60个字符*/
		SamsungHigherDebugStep3: '<i>3</i> Нажмите <b>[Еще]</b>',/*不超过60个字符*/
		SamsungHigherDebugStep4: '<i>4</i> Нажмите <b>[Об устройстве]</b>',/*不超过60个字符*/
		
		driver1 :'<i>3</i> Нажмите <b>[Про]</b>',
		driver2 :'<i>4</i> Нажмите <b>[Имитация ПО]</b>',
		driver3 :'<i>8</i>  Вернитесь <b>[назад] </b> и нажмите <b>[Опции разработчика]</b>',
		driver4 :'<i>9</i> Проверьте <b>[Не спрашивайте снова]</b>',
		driver5 :'<i>2</i> Нажмите <b>[Общие положения]</b>',
		driver6 :'<i>10</i> Нажмите <b>[Да]</b>',
		/*2014-6-12*/
		driver7:' Выберите <b>[Больше не показывать]</b>',
		
		/*2014-7-3*/
		usbDebugServiceText:"Также вы можете обратиться в местную службу по работе с клиентами",
		usbDebugCustomer:"Обслуживание клиентов",
		usbDebugTitle: 'Откройте режим «Отладка по USB» для управления телефоном.',
		
		/*2014wifi*/
		driverUsbConnect: 'USB подключение',
		deviceBeen:"{0} устройств было обнаружено. Пожалуйста подключитесь",
		connectAnother:"Подключить другое устройство",
		pleaseDownMg:"Пожалуйста загрузите <b>Mobogenie Helper</b> на Ваш девайс",
		alreadyHava:"У меня уже есть Mobogenie Helper",
		enterPass:"2.Введите код подтверждения",
		howtofind:"Как найти код подтверждения?",
		pleasePhoneOk:"Пожалуйста подтвердите запрос  подключения на Вашем девайсе",
		conncetionFailed:"Ошибка подключения. Пожалуйста проверьте следующие пункты:",
		phoneWifiOpen:"Пожалуйста проверьте включен ли Wi-Fi, или Ваш девайс находится в той же сети что и ПК",
		passwordOk:"Правильный ли код подтверждения?",
		connectnix:"Ошибка подключения. Ваш девайс отклонил запрос подключения от ПК",
		
		contingDevice:"Подключаем устройство...",
		updatingHelp:"Обновляем Mobogenie Helper...",
		updateFailed:"Не удалось обновить Mobogenie!",
		alreadyCon:"Я подключил USB провод",
		connectBtnText:"Подключить",
		wifiScreen:"Не получилось загрузить скриншоты через Wi-Fi.",
		
		//2014-10-14
		connectNoticeTitle: 'Пожалуйста, подключите к вашему устройству.',
		helpisOpen:"Появился ли Помощник Mobogenie на вашем телефоне?",
		//2014-10-20
		pleaseClick:"После установки, откройте Mobogenie Helper и кликните по кнопке ниже для переподключения.",
		reConnectBtn:"Переподключиться",
		pleaseInstall:"Обновиленный Mobogenie Helper был передан. Пожалуйста установите его на свое Android устройство",
		scanBlow:"Просканируйте следующий QR код",
		downloadUsing:"Загрузите с помощью данной ссылки на ваше Android устройство",
		openHelpDevice:"1. Откройте Mobogenie Helper на вашем Android устройстве.",
		
		/*2014-11-07修改*/
		connectFailedText:"Подключись через Wi-Fi.",
		waitLong:"Слишком долго? Сообщи нам!",
		alreadyHava:"У меня есть Mobogenie Helper на смартфоне. Далее!",
		noHavaMobo:"У меня нет Mobogenie Helper на смартфоне. Назад!",
		tryConnectWifi:"Try connecting via Wi-Fi",
		/*2014-11-14增加*/
		driverWifiConnect: 'Беспроводное подключение',
		havaOpenUsb:"Я активировал функцию USB.",
		usbConnectFailed:"Ошибка подключения USB",
		checkPhoneFailed: "Какая-то программа мешает вашему телефону подключиться к ПК. Пожалуйста, закройте ее и попробуйте снова.",
		closeReConnect: "Закройте эту программу и переподключитесь к {0}."
    };
    return dictionary;
});
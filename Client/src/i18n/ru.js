export default {
	App: {
		mainMenu: {
			index: 'Главная',
			items: 'Предметы',
			tags: 'Теги',
			settings: 'Настройки',
			logout: 'Выход'
		},
		authDialog: {
			title: 'Требуется авторизация',
			loginPlaceholder: 'логин',
			passwordPlaceholder: 'пароль',
			send: 'Авторизоваться',
			close: 'Закрыть',
			actions: {
				loginSuccess: 'Авторизация успешно завершена!',
				loginFail: 'Авторизация отклонена. Неверные логин или пароль.',
				loginError: 'Авторизация отклонена. Ошибка на сервере.'
			}
		},
		paging: {
			first: 'Перв.',
			previous: 'Пред.',
			next: 'След.',
			last: 'Посл.',
			delimiter: '/'
		},
		validation: {
			required: 'Значение должно быть непустым.',
			illegalSymbols: 'Запрещенный символ...',
			numeric: 'Значение должно быть целочисленным.',
			min: 'Значение должно превышать {{%1}}.'
		}
	},
	Settings: {
		title: 'Настройки',
		itemsPerPage: 'Количество предметов на странице',
		actions: {
			saved: 'Настройки сохранены.',
			restored: 'Настройки восстановлены.'
		}
	},
	Index: {
		title: 'Добро пожаловать в dhilt/stuff',
		Tags: {
			searchInputPlaceholder: 'начните поиск предметова по тегам',
			searchTypeCaption: 'Тип поиска:',
			searchTypeUnion: 'по объединению',
			searchTypeIntersect: 'по пересечению',
			searchTypeDelimiter: '/',
			notFound: 'Не найдено ни одного тега'
		},
		Items: {
			searching: 'ведется поиск...',
			notFound: 'Не найдено ни одного предмета'
		}
	},
	Items: {
		title: 'Редактор предметов dhilt/stuff',
		searchInputPlaceholder: 'начните поиск предметов',
		searching: 'ведется поиск...',
		notFound: 'Не найдено ни одного предмета...',
		actions: {
			selectFail: 'Ошибка выбора предмета.'
		}
	},
	Tags: {
		title: 'Редактор тегов dhilt/stuff',
		searchInputPlaceholder: 'начните поиск тегов',
		searching: 'ведется поиск...',
		notFound: 'Не найдено ни одного тега...'
	},
	Item: {
		titleNew: 'Создание нового предмета',
		titleEdit: 'Редактирование предмета',
		Tags: {
			title: 'Список тегов этого предмета',
			noTags: 'У этого предемета нет ни одного тега...'
		},
		Controls: {
			accept: 'Сохранить',
			acceptAndCreate: 'Сохранить+',
			remove: 'Удалить',
			cancel: 'Отменить'
		},
		actions: {
			created: 'Предмет благополучно создан.',
			updated: 'Предмет отредактирован.',
			removed: 'Предмет благополучно удален.'
		}
	},
	Tag: {
		titleNew: 'Создание нового тега',
		titleEdit: 'Редактирование тега',
		Controls: {
			accept: 'Сохранить',
			remove: 'Удалить',
			cancel: 'Отменить'
		},
		actions: {
			created: 'Тег благополучно создан.',
			updated: 'Тег отредактирован.',
			removed: 'Тег благополучно удален.'
		}
	}
}
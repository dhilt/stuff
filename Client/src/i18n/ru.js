export default {
	App: {
		mainMenu: {
			index: 'Главная',
			items: 'Предметы',
			tags: 'Теги',
			logout: 'Выход'
		},
		authDialog: {
			title: '302 Требуется авторизация',
			loginPlaceholder: 'логин',
			passwordPlaceholder: 'пароль',
			send: 'Авторизоваться',
			close: 'Закрыть'
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
		notFound: 'Не найдено ни одного предмета...'
	},
	Tags: {
		title: 'Редактор тегов dhilt/stuff',
		searchInputPlaceholder: 'начните поиск тегов',
		searching: 'ведется поиск...',
		notFound: 'Не найдено ни одного тега...'
	},
	Item: {
		newItemIntro: 'Создание нового предмета',
		editItemIntro: 'Редактирование предмета',
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
		newTagIntro: 'Создание нового тега',
		editTagIntro: 'Редактирование тега',
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
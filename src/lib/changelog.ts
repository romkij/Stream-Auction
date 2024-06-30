interface IUpdate {
  changes: {
    added?: string[];
    changed?: string[];
    fixed?: string[];
  },
  createdAt: Date;
}

export const changelog: IUpdate[] = [
  {
    changes: {
      changed: [
        "Список вариантов: изменена анимация варианта.",
        "Жаришка нереальная: теперь активируется только после добавления варианта.",
        "Жаришка нереальная: настройка перенесена из секции 'DonationAlerts' в секцию 'Остальное'.",
      ],
      fixed: [
        "Список вариантов: не воспроизводилась анимация при добавлении нового варианта.",
        "Список вариантов: не воспроизводилась анимация, если добавленный вариант поднимался из невидимой области.",
        "Список вариантов: неправильно определялся предыдущий лидер после обновления страницы, если были сохраненные варианты.",
      ],
    },
    createdAt: new Date('2024-06-30 11:17:58'),
  },
  {
    changes: {
      added: [
        "DonationAlerts: добавлена новая настройка.\n\nВклин - Тип прироста стоимости\nНастройка имеет две опции: 'Фиксированный' и 'От суммы доната'.\nВ первом случае стоимость будет увеличиваться на заданное вами значение, во втором - до суммы самого большого доната за время кручения колеса.",
      ],
    },
    createdAt: new Date('2024-06-24 07:14:52'),
  },
  {
    changes: {
      added: [
        "Таймер: добавлена новая настройка.\n\nГорячие клавиши\nПозволяет управлять таймером при помощи клавиш:\n[ ↑ ] - прибавить, [ ↓ ] - убавить, [←] - вернуть на исходную, [→] - запустить / приостановить.",
      ],
      changed: [
        "Стоп колесо: при активации функции, сообщение из доната не будет учитываться (т.е. указанный вариант не будет добавлен / обновлен).",
        "Задержка колеса: обновить / добавить вариант, во время задержки, можно только активировав функцию 'Вклин'.",
        "Настройки 'Вклин' и 'Продлить кручение' объединены в одну.",
        "Увеличен минимально возможный размер секции колеса для отображения текста."
      ],
    },
    createdAt: new Date('2024-06-23 14:52:14'),
  },
]

export function getLastUpdateDate() {
  const sorted = [...changelog].sort((a, b) => {
    return b.createdAt.getTime() - a.createdAt.getTime();
  })

  return sorted[0].createdAt;
}
# Games library

**You can also read this README in [English](https://github.com/klekwedge/games-library-backend/blob/main/README.EN.md).**

## Оглавление

- [Инструкции по развертыванию](#инструкции-по-развертыванию)
- [Обзор](#обзор)
  - [Скриншот](#скриншот)
  - [Ссылки](#ссылки)
- [Мой процесс](#мой-процесс)
  - [Стек](#стек)
- [Автор](#автор)

## Инструкции по развертыванию

**Для запуска проекта на вашем компьютере должны быть установлены [npm](https://nodejs.org/en/) и [git](https://git-scm.com/downloads)**

1. Сделайте клон этого репозитория ```git clone https://github.com/klekwedge/games-library-backend.git```
2. Установите все необходимые пакеты npm с помощью ```npm i```
3. Запустите проект командой ```npm run start```

## Обзор

API предоставляет доступ к следующим функциональным возможностям:

- [Получение списка игр](#получение-списка-игр): Позволяет получить список игр.
- [Получение определенной игры](#получение-игры): Позволят получить необходимую игру.

## Получение списка игр

` GET /games`

#### Параметры запроса

- `genre` (необязательный) - Позволяет получить игры по жанру.
- `platform` (необязательный) - Позволяет получить игры по платформе.
- `sort` (необязательный) - Позволяет отсортировать игры.

#### Пример запроса

GET /games?genre=shooter&platform=pc&sort=alphabetical

#### Ответ

```
[
  {
    "id": 533,
    "title": "A.V.A Global",
    "thumbnail": "https://www.freetogame.com/g/533/thumbnail.jpg",
    "short_description": "A.V.A is a free-to-play online first-person shooter with multiple game modes, unique customizations, as well as PvP and PvE gameplay.",
    "game_url": "https://www.freetogame.com/open/ava",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "NEOWIZ",
    "developer": "NEOWIZ",
    "release_date": "2022-08-24",
    "freetogame_profile_url": "https://www.freetogame.com/ava"
  },
  {
    "id": 319,
    "title": "Ace Online",
    "thumbnail": "https://www.freetogame.com/g/319/thumbnail.jpg",
    "short_description": "A free to play fast action 3D sci-fi MMO where players control space fighters jets.",
    "game_url": "https://www.freetogame.com/open/ace-online",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "Suba Games",
    "developer": "MasangSoft",
    "release_date": "2008-08-29",
    "freetogame_profile_url": "https://www.freetogame.com/ace-online"
  },
  ...
]
```


## Получение игры

` GET /game`

#### Параметры запроса

- `id` (обязательный) - Позволяет однозначно идентифицировать игру

#### Пример запроса

GET /game?id=540

#### Ответ

```
{
  "id": 540,
  "title": "Overwatch 2",
  "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
  "status": "Live",
  "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
  "description": "The tale of the hero organization Overwatch continues in Overwatch 2. This new take on the popular team shooter changes up things a little with five-man teams, redefined classes, and new playable characters. With the adjustment to 5v5, players now have more individual impact than in the previous game.\r\n\r\nChallenge yourself in all-new modes. Take control of a robot with your team in Push and take it to the enemy base before the enemy can take it from you. Explore all new areas, including iconic real-world cities such as New York, Rome, Monte Carlo, Toronto, and more.\r\n\r\nOverwatch 2 features an update schedule that drops new content every nine weeks. It also boasts a regular battle pass – both free and premium. This is where some of the game’s characters will be obtained.",
  "game_url": "https://www.freetogame.com/open/overwatch-2",
  "genre": "Shooter",
  "platform": "Windows",
  "publisher": "Activision Blizzard",
  "developer": "Blizzard Entertainment",
  "release_date": "2022-10-04",
  "freetogame_profile_url": "https://www.freetogame.com/overwatch-2",
  "minimum_system_requirements": {
    "os": "Windows 10 64-bit",
    "processor": "Intel Core i3 or AMD Phenom X3 8650",
    "memory": "6 GB",
    "graphics": "NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series",
    "storage": "50 GB"
  },
  "screenshots": [
    {
      "id": 1334,
      "image": "https://www.freetogame.com/g/540/overwatch-2-1.jpg"
    },
    {
      "id": 1335,
      "image": "https://www.freetogame.com/g/540/overwatch-2-2.jpg"
    },
    {
      "id": 1336,
      "image": "https://www.freetogame.com/g/540/overwatch-2-3.jpg"
    }
  ]
}
```

### Скриншот

![Главный экран](./preview/screenshot.png)

### Ссылки

- [Ссылка на Frontend проект](https://github.com/klekwedge/games-library)
- [Деплой Frontend проекта](https://klekwedge-games-library.vercel.app/)

- [Ссылка на Backend проект](https://github.com/klekwedge/games-library-backend)
- [Деплой Backend проекта](https://klekwedge-games-library-backend.onrender.com/games)

## Мой процесс

### Стек

- Node
- Express
- Axios

## Автор

- [Вебсайт](https://klekwedge-cv.vercel.app/)
- [Linkedin](https://www.linkedin.com/in/klekwedge/)
- [Facebook](https://www.facebook.com/klekwedge)

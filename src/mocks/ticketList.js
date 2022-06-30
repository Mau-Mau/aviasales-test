const ticketList = [
  {
    id: 0,
    // Цена в рублях
    price: 13400,
    // Код авиакомпании (iata)
    carrier: "s7",
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [
      {
        id: 0,
        // Код города (iata)
        origin: "MOW",
        // Код города (iata)
        destination: "HKT",
        // Дата и время вылета туда
        date: "30.06.2022 11:00",
        // Массив кодов (iata) городов с пересадками
        stops: ["HKG", "JNB"],
        // Общее время перелёта в минутах
        duration: 1275,
      },
      {
        id: 1,
        // Код города (iata)
        origin: "HKT",
        // Код города (iata)
        destination: "MOW",
        // Дата и время вылета туда
        date: "10.07.2022 22:30",
        // Массив кодов (iata) городов с пересадками
        stops: ["HKG"],
        // Общее время перелёта в минутах
        duration: 810,
      }
    ]
  },
  {
    id: 1,
    price: 12800,
    carrier: "utair",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 12:00",
        stops: ["HKG", "JNB"],
        duration: 1300,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 12:30",
        stops: ["HKG"],
        duration: 780,
      }
    ]
  },
  {
    id: 2,
    price: 11000,
    carrier: "s7",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 09:00",
        stops: ["HKG"],
        duration: 780,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 22:00",
        stops: ["HKG"],
        duration: 810,
      }
    ]
  },
  {
    id: 3,
    price: 15600,
    carrier: "s7",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 13:00",
        stops: ["SVO", "HKG", "JNB"],
        duration: 1500,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 18:20",
        stops: ["HKG", "SVO"],
        duration: 1220,
      }
    ]
  },
  {
    id: 4,
    price: 14500,
    carrier: "utair",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 13:50",
        stops: ["HKG", "JNB"],
        duration: 1275,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 23:30",
        stops: ["HKG"],
        duration: 810,
      }
    ]
  },
  {
    id: 5,
    price: 17000,
    carrier: "utair",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 17:20",
        stops: ["SVO", "HKG", "JNB"],
        duration: 1420,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 09:30",
        stops: [],
        duration: 750,
      }
    ]
  },
  {
    id: 6,
    price: 17200,
    carrier: "utair",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 11:40",
        stops: [],
        duration: 750,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 18:15",
        stops: ["SVO", "HKG", "JNB"],
        duration: 1450,
      }
    ]
  },
  {
    id: 7,
    price: 12500,
    carrier: "s7",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 08:00",
        stops: [],
        duration: 820,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 09:00",
        stops: [],
        duration: 810,
      }
    ]
  },
  {
    id: 8,
    price: 13900,
    carrier: "s7",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 11:20",
        stops: ["HKG"],
        duration: 800,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 20:30",
        stops: ["HKG", "JNB"],
        duration: 1290,
      }
    ]
  },
  {
    id: 9,
    price: 12400,
    carrier: "s7",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 07:00",
        stops: ["SVO", "HKG", "JNB"],
        duration: 1450,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 16:30",
        stops: ["HKG", "SVO"],
        duration: 890,
      }
    ]
  },
  {
    id: 10,
    price: 13100,
    carrier: "s7",
    segments: [
      {
        id: 0,
        origin: "MOW",
        destination: "HKT",
        date: "30.06.2022 08:20",
        stops: ["HKG", "JNB"],
        duration: 1240,
      },
      {
        id: 1,
        origin: "HKT",
        destination: "MOW",
        date: "10.07.2022 14:30",
        stops: ["HKG"],
        duration: 780,
      }
    ]
  },
];

export default ticketList;
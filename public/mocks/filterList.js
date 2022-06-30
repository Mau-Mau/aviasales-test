const filterList = [
  {
    id: 0,
    title: "Количество пересадок",
    type: "checkbox",
    options: [
      {
        id: 0,
        label: "Все",
        name: "all"
      },
      {
        id: 1,
        label: "Без пересадок",
        name: "no-stops"
      },
      {
        id: 2,
        label: "1 пересадка",
        name: "1-stop"
      },
      {
        id: 3,
        label: "2 пересадки",
        name: "2-stops"
      },
      {
        id: 4,
        label: "3 пересадки",
        name: "3-stops"
      }
    ]
  }
]

export default filterList;
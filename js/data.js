let id = 0;

const projectsCards = [
  {
    id: ++id,
    description:
      "Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.",
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut necessitatibus ex labore eveniet molestiae corrupti commodi! Fugit voluptas voluptates deleniti, excepturi voluptate voluptatibus dolor expedita repellat ipsam minus. Rerum.",
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut necessitatibus ex labore eveniet molestiae corrupti commodi! Fugit voluptas voluptates deleniti, excepturi voluptate voluptatibus dolor expedita repellat ipsam minus. Rerum.",
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description:
      "Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.",
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description:
      "Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.",
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description:
      "Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.",
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "special",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "indev",
    logoKey: "first",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
  {
    id: ++id,
    description: `Направление включает в себя исследования и разработки технологий
        МО и КТ. Модули для внедрения в предметные сетевые программы
        магистратуры с элементами МО и КТ, или программы ДПО.`,
    category: "government",
    logoKey: "second",
  },
];

// publications cards

const publicationCards = [
  {
    image:
      "./images/Publication/publication_Topic-driven Ensemble for Online Advertising Generation.png",
    title: "Topic-driven Ensemble for Online Advertising Generation",
    authors:
      "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
    article:
      "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
  },
  {
    image:
      "./images/Publication/publication_Convolutional neural networks with hierarchical context transfe.png",
    title: "Convolutional neural networks with hierarchical context transfe…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article:
      "In this work, we consider a problem of predicting the next state of a given area using retrospective information. The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state prediction problems - density variability, a sig…",
  },
  {
    image:
      "./images/Publication/publication_Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat….png",
    title:
      "Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat…",
    authors: "Ksenia Mukhina, Alexander Visheratin, Denis Nasonov",
    article:
      "One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens’ behavior on various scales can help to improve quality of living, enhance urban management, and advance the development of smart cities. But it is widely known that the…",
  },
  {
    image:
      "./images/Publication/publication_Peregreen–modular database for efficient storage of historical tim….png",
    title:
      "Peregreen–modular database for efficient storage of historical tim…",
    authors:
      "Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B…",
    article:
      "The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed of data processing operations execution but als…",
  },
  {
    image:
      "./images/Publication/publication_Intelligent sightseeing in immensely manifold cities.png",
    title: "Intelligent sightseeing in immensely manifold cities: Case …",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article:
      "In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm for automated touristic paths construction. Score function for location depends on three components: location social media popularity and rating, distances of place from others in r…",
  },
  {
    image:
      "./images/Publication/publication_User Profiles Matching for Different Social Networks Based.png",
    title: "User Profiles Matching for Different Social Networks Based …",
    authors: "Timur Sokhin, Nikolay Butakov, Denis Nasonov",
    article:
      "It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessm…",
  },
  {
    image:
      "./images/Publication/publication_Orienteering Problem with Functional Profits for multi-sourc.png",
    title: "Orienteering Problem with Functional Profits for multi-sourc…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article:
      "Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem with Functional Profits (OPFP), where the score of …",
  },
  {
    image:
      "./images/Publication/publicaion_Intellectual Execution Scheme of Iterative Computational Models ….png",
    title: "Intellectual Execution Scheme of Iterative Computational Models …",
    authors: "Mikhail Melnik, Denis A Nasonov, Alexey Liniov",
    article:
      "In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also becomes more complex. This leads more and more often to the need to use high-performance computational clusters, such as supercomputers. Created m…",
  },
  {
    image:
      "./images/Publication/publication_Urban events prediction via convolutional neural networks a….png",
    title: "Urban events prediction via convolutional neural networks a…",
    authors:
      "Iskander Safiulin, Nikolay Butakov, Dmitriy Alexandrov, Denis Nasonov",
    article:
      "In today’s world, it is crucial to be proactive and be prepared for events which are not happening yet. Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods to a brand new area - event prediction models...",
  },
  {
    image:
      "./images/Publication/publication_Ensemble-based method of answers retrieval for domain spe.png",
    title: "Ensemble-based method of answers retrieval for domain spe…",
    authors:
      "Iskander Safiulin, Nikolay Butakov, Dmitriy Alexandrov, Denis Nasonov",
    article:
      "Many companies want or prefer to use chatbot systems to provide smart assistants for accompanying human specialists especially newbies with automatic consulting. Implementation of a really useful smart assistant for a specific domain requires a knowledge base for this domain, that often e…",
  },
  {
    image:
      "./images/Publication/publication_Evaluation of modern tools and techniques for storing time-serie.png",
    title: "Evaluation of modern tools and techniques for storing time-serie…",
    authors:
      "Alexey Struckov, Semen Yufa, Alexander A Visheratin, Denis Nasonov",
    article:
      "Time series data as its analysis and applications recently have become increasingly important in different areas and domains. Many fields of science and industry rely on storing and processing large amounts of time series - economics and finance, medicine, the Internet of Things, environmental protection, …",
  },
  {
    image:
      "./images/Publication/publication_Workflow scheduling using neural networks and reinforcement lear.png",
    title: "Workflow scheduling using neural networks and reinforcement lear…",
    authors: "Mikhail Melnik, Denis Nasonov",
    article:
      "The development of information technologies entails a nonlinear growth of both volumes of data and the complexity of data processing itself. Scheduling is one of the main components for optimizing the operation of   the computing system. Currently, there are a large number of scheduling algorithms. However, even in spite of existing hybrid sch…",
  },
  {
    image:
      "./images/Publication/publication_Building City-Scale Walking Itineraries Using Large Geospatia.png",
    title: "Building City-Scale Walking Itineraries Using Large Geospatia…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article:
      "Nowadays, social networks play an important role in many aspects of peoples life and in traveling in particular. People share their experience and opinions not only on specialized sites, like TripAdvisor, but also in social networks, e.g. Instagram. Combining information from different sources we can ge…",
  },
  {
    image:
      "./images/Publication/publication_Forecasting of the Urban Area State Using Convolutional Neural.png",
    title: "Forecasting of the Urban Area State Using Convolutional Neural…",
    authors:
      "Ksenia D Mukhina, Alexander A Visheratin, Gali-Ketema Mbogo, Denis Nasonov",
    article:
      "Active development of modern cities requires not only efficient monitoring systems but furthermore forecasting systems that can predict future state of the urban area with high accuracy. In this work we present a method for urban area prediction based on geospatial activity of users in social network. One of the …",
  },
  {
    image:
      "./images/Publication/publication_Multiscale event detection using convolutional quadtrees and ada.png",
    title: "Multiscale event detection using convolutional quadtrees and ada…",
    authors:
      "A A Visheratin, K D Mukhina, A K Visheratina, D Nasonov, A V Boukhanovsky",
    article:
      "Increasing popularity of social networks made them a viable data source for many data mining applications and event detection is no exception. Researchers aim not only to find events that happen in networks but more importantly to identify and locate events occurring in the real world. In this paper, we …",
  },
  {
    image:
      "./images/Publication/publication_Unified domain-specific language for collecting and processing dat.png",
    title: " …",
    authors:
      "Nikolay Butakov, Maxim Petrov, Ksenia Mukhina, Denis Nasonov, Sergey Kovalchuk",
    article:
      "Data provided by social media becomes an increasingly important analysis material for social scientists, market analysts, and other stakeholders. Diversity of interests leads to the emergence of a variety of crawling techniques and programming solutions. Nevertheless, these solutions have a lack of flexibility to sati…",
  },
  {
    image:
      "./images/Publication/publication_The multi-level adaptive approach for efficient execution of multi-sc.png",
    title:
      "The multi-level adaptive approach for efficient execution of multi-sc…",
    authors:
      "D Nasonov, N Butakov, M Melnik, A Visheratin, A Linev, P Shvets, S Sobolev, K Mukhina",
    article:
      "Today advanced research is based on complex simulations which require a lot of computational resources that usually are organized in a very complicated way from technical part of the view. It means that a scientist from physics, biology or even sociology should struggle with all technical is…",
  },
  {
    image:
      "./images/Publication/publication_Precedent-Based Approach for the Identification of Deviant Behavio.png",
    title:
      "Precedent-Based Approach for the Identification of Deviant Behavio…",
    authors:
      "Anna V Kalyuzhnaya, Nikolay O Nikitin, Nikolay Butakov, Denis Nasonov",
    article:
      "The current paper is devoted to a problem of deviant users’ identification in social media. For this purpose, each user of social media source should be described through a profile that aggregates open information about him/her within the special structure. Aggregated user profiles are formally describ…",
  },
  {
    image:
      "./images/Publication/publication_Blockchain-based transaction integrity in distributed big data.png",
    title: "Blockchain-based transaction integrity in distributed big data …",
    authors: "Denis Nasonov, Alexander A Visheratin, Alexander Boukhanovsky",
    article:
      "Today Big Data occupies a crucial part of scientific research areas as well as in the business analysis of large companies. Each company tries to find the best way to make generated Big Data sets valuable and profitable. However, in most cases, companies have not enough opportunities and budget t…",
  },
  {
    image:
      "./images/Publication/publication_Towards a scenario-based solution for extreme metocean event sim.png",
    title: "Towards a scenario-based solution for extreme metocean event sim…",
    authors: "A Kalyuzhnaya, D Nasonov, S Ivanov, S Kosukhin, A Boukhanovsky",
    article:
      "Today, metocean investigations, combined with forecasts and analysis of extreme events, require new design and development approaches because of their complexity. Extreme metocean events forecasting and prevention is an urgent computing task from decision-making and for reaction point of view.",
  },
  {
    image:
      "./images/Publication/publication_Storage tier-aware replicative data reorganization with prioritization.png",
    title:
      "Storage tier-aware replicative data reorganization with prioritization…",
    authors:
      "Anton Spivak, Andrew Razumovskiy, Denis Nasonov, Alexander Boukhanovsky, Anton Redice",
    article:
      "The importance of data collection, processing, and analysis is rapidly growing. Big Data technologies are in high demand in many fields, including bio-informatics, hydrometeorology, and high energy physics. One of the most popular computational paradigms used in large data processing fra…",
  },
  {
    image:
      "./images/Publication/publication_Hybrid scheduling algorithm in early warning systems.png",
    title: "Hybrid scheduling algorithm in early warning systems",
    authors: "A Visheratin, M Melnik, D Nasonov, N Butakov, A Boukhanovsky",
    article:
      "The development of an efficient Early Warning System (EWS) is essential for the prediction and prevention of imminent natural hazards. In addition to providing a computationally intensive infrastructure with extensive data transfer, high-execution reliability and hard-deadline satisfaction are important req…",
  },
  {
    image:
      "./images/Publication/publication_Distributed data-driven platform for urgent decision making in car.png",
    title:
      "Distributed data-driven platform for urgent decision making in car…",
    authors:
      "Sergey V Kovalchuk, Evgeniy Krotov, Pavel A Smirnov, Denis A Nasonov, Alexey N Yakovlev",
    article:
      "his paper presents ongoing research aimed at developing a data-driven platform for clinical decision support systems (DSSs) that require integration and processing of various data sources within a single solution. Resource management is developed within a framework of an urgent computing approach to address …",
  },
  {
    image:
      "./images/Publication/publication_Byzantine fault-tolerant and semantic-driven consensus proto.png",
    title: "Byzantine fault-tolerant and semantic-driven consensus proto…",
    authors: "Stepan Rakitin, Alexander A Visheratin, Denis Nasonov",
    article:
      "To provide fault tolerance, modern distributed storage systems use specialized network topologies and consensus protocols that create high overheads. The main disadvantage of existing specialized topologies is a difficulty to implement an efficient data placement that takes into account locality of the data. In scie…",
  },
  {
    image:
      "./images/Publication/publication_Adaptive performance model for dynamic scaling Apache Spark St.png",
    title: "Adaptive performance model for dynamic scaling Apache Spark St…",
    authors: "Max Petrov, Nikolay Butakov, Denis Nasonov, Mikhail Melnik",
    article:
      "Nowadays, data volumes increase exceptionally, a lot of information comes from different sources, for example, from mobile phones, sensors, traffic, etc. All information from these sources can be represented as a data streams, which can grow up and fall in time in their size. In the first case, data proce…",
  },
  {
    image:
      "./images/Publication/publication_Hybrid evolutionary workflow scheduling algorithm for dynami.png",
    title: "Hybrid evolutionary workflow scheduling algorithm for dynami…",
    authors:
      "D Nasonov, A Visheratin, N Butakov, N Shindyapina, M Melnik, A Boukhanovsky",
    article:
      "he optimal workflow scheduling is one of the most important issues in heterogeneous distributed computational environments. Existing heuristic and evolutionary scheduling algorithms have their advantages and disadvantages. In this work we propose a hybrid algorithm based on heuristic methods…",
  },
  {
    image:
      "./images/Publication/publication_Execution time estimation for workflow scheduling.png",
    title: "Execution time estimation for workflow scheduling",
    authors:
      "A Chirkin, Adam SZ Belloum, S Kovalchuk, Marc X Makkes, M Melnik, A Visheratin, D Nasonov",
    article:
      "Estimation of the execution time is an important part of the workflow scheduling problem. The aim of this paper is to highlight common problems in estimating the workflow execution time and propose a solution that takes into account the complexity and the stochastic aspects of the workflow compone…",
  },
];

const renderTreeData = {
  name: "App",
  icon: "🍔",

  children: [
    {
      name: "Layout Principal",
      icon: "🏗",

      children: [
        {
          name: "Barra Lateral",
          icon: "🧭",
        },
        {
          name: "Contenedor de Páginas",
          icon: "📄",
        },
      ],
    },

    {
      name: "Página Dashboard",
      icon: "📊",

      children: [
        {
          name: "Panel Principal",
          icon: "🏠",

          children: [
            {
              name: "Sección de Bienvenida",
              icon: "✨",
            },
          ],
        },
      ],
    },

    {
      name: "Página Perfil",
      icon: "👥",

      children: [
        {
          name: "Perfiles de Integrantes",
          icon: "👤",

          children: [
            {
              name: "Tarjetas de Perfil",
              icon: "🃏",
            },
            {
              name: "Imágenes de Avatar",
              icon: "📸",
            },
          ],
        },
      ],
    },

    {
      name: "Página Galería",
      icon: "🖼️",

      children: [
        {
          name: "Galería de Imágenes",
          icon: "📷",

          children: [
            {
              name: "Tarjetas de Imagen",
              icon: "🃏",
            },
            {
              name: "Visor Ampliado",
              icon: "🔍",
            },
            {
              name: "Controles de Navegación",
              icon: "🔘",
            },
          ],
        },
      ],
    },

    {
      name: "Página Bitácora",
      icon: "📋",

      children: [
        {
          name: "Línea de Tiempo",
          icon: "🛵",

          children: [
            {
              name: "Entradas de Bitácora",
              icon: "🧾",
            },
          ],
        },
      ],
    },

    {
      name: "Página Árbol de Renderizado",
      icon: "🌳",

      children: [
        {
          name: "Visualización del Árbol",
          icon: "🌲",

          children: [
            {
              name: "Nodos de Componentes",
              icon: "🌿",
            },
          ],
        },
      ],
    },

    {
      name: "Página API",
      icon: "🔌",

      children: [
        {
          name: "Consulta de Datos",
          icon: "📡",

          children: [
            {
              name: "Solicitud de Información",
              icon: "📥",
            },
            {
              name: "Tarjetas de Resultados",
              icon: "🃏",
            },
            {
              name: "Controles de Paginación",
              icon: "↔️",
            },
          ],
        },
      ],
    },

    {
      name: "Página Explorador JSON",
      icon: "📦",

      children: [
        {
          name: "Explorador de Datos",
          icon: "🗂️",

          children: [
            {
              name: "Barra de Búsqueda",
              icon: "🔎",
            },
            {
              name: "Filtro por Categoría",
              icon: "🏷️",
            },
            {
              name: "Filtro por Estado",
              icon: "⚙️",
            },
            {
              name: "Tarjetas de Registros",
              icon: "🃏",
            },
          ],
        },
      ],
    },
  ],
};

export default renderTreeData;

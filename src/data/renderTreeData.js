const renderTreeData = {
  name: "App",
  icon: "🍔",

  children: [
    {
      name: "Layout",
      icon: "🏗",

      children: [
        {
          name: "Sidebar",
          icon: "🧭",
        },
        {
          name: "Outlet",
          icon: "📄",
        },
      ],
    },

    {
      name: "DashboardPage",
      icon: "📊",

      children: [
        {
          name: "Hero Section",
          icon: "🃏",
        },
      ],
    },

    {
      name: "GalleryPage",
      icon: "🖼",

      children: [
        {
          name: "Gallery",
          icon: "📷",

          children: [
            {
              name: "Gallery Cards",
              icon: "🃏",
            },
            {
              name: "Lightbox",
              icon: "🔍",
            },
            {
              name: "Navigation Buttons",
              icon: "🔘",
            },
          ],
        },
      ],
    },

    {
      name: "BitacoraPage",
      icon: "📋",

      children: [
        {
          name: "Timeline",
          icon: "🛵",

          children: [
            {
              name: "Timeline Cards",
              icon: "🃏",
            },
          ],
        },
      ],
    },

    {
      name: "RenderTreePage",
      icon: "🌳",

      children: [
        {
          name: "RenderTree",
          icon: "🌲",

          children: [
            {
              name: "TreeNode",
              icon: "🌿",
            },
          ],
        },
      ],
    },

    {
      name: "PerfilPage",
      icon: "👥",

      children: [
        {
          name: "Profile Cards",
          icon: "🃏",
        },
        {
          name: "Avatar",
          icon: "📸",
        },
      ],
    },
  ],
};

export default renderTreeData;

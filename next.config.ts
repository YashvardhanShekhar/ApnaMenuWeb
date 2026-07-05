// next.config.ts

module.exports = {
  async redirects() {
    return [
      {
        source: "/:id/menu",
        destination: "/:id/menu/all",
        permanent: true, // 308
      },
    ];
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // ...autres configurations Next.js

  // Ajoutez cette configuration pour l'export statique
  // Vous pouvez personnaliser cette configuration en fonction de vos besoins
  experimental: {
    output: 'export', // Cette ligne indique à Next.js d'utiliser l'export statique
  },
};

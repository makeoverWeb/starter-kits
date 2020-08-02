const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": {
        page: "/"
      },
      "/about": {
        page: "/about"
      },
      "/about/one": {
        page: "/about/one"
      },
      "/about/two": {
        page: "/about/two"
      },
    };
  }
})

// для добавления динамических страниц

// const fetch = require('isomorphic-unfetch');

// exportPathMap: async function() {
//   const paths = {
//     '/': { page: '/' },
//     '/about': { page: '/about' }
//   };
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   const shows = data.map(entry => entry.show);

//   shows.forEach(show => {
//     paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } };
//   });

//   return paths;
// }
const {
  src,
  dest,
  parallel,
  series,
  watch
} = require("gulp");
browsersync = require("browser-sync");
del = require("del");
scss = require("gulp-sass");
autoprefixer = require("gulp-autoprefixer");
group_media = require("gulp-group-css-media-queries");
clean_css = require("gulp-clean-css");
rename = require("gulp-rename");
uglify = require("gulp-uglify-es").default;
image_min = require("gulp-imagemin");
ttf2woff = require("gulp-ttf2woff");
ttf2woff2 = require("gulp-ttf2woff2");
fonter = require("gulp-fonter");
newer = require("gulp-newer");
fs = require("fs");
fileinclude = require("gulp-file-include");

const distFolder = "dist";
const srcFolder = "src";

let path = {
  src: {
    html: [
      srcFolder + "/html/*.html",
      "!" + srcFolder + "/html/_*.html",
    ],
    css: srcFolder + "/scss/style.scss",
    js: srcFolder + "/js/app.js",
    img: srcFolder + "/img/**/*.+(png|jpg|gif|ico|svg|webp)",
    /* *.{jpg, png, svg, gif,ico, webp} */
    fonts: srcFolder + "/fonts/*.ttf",
  },
  watch: {
    html: srcFolder + "/**/*.html",
    css: srcFolder + "/scss/**/*.scss",
    js: srcFolder + "/js/**/*.js",
    img: srcFolder + "/img/**/*.+(png|jpg|gif|ico|svg|webp)",
  },
  build: {
    html: distFolder + "/",
    css: distFolder + "/css/",
    js: distFolder + "/js/",
    img: distFolder + "/img/",
    fonts: distFolder + "/fonts/",
  },
  clean: "./" + distFolder + "/",
};

function browserSync() {
  browsersync.init({
    // files: [{
    //   match: ['./**/*'],
    //   fn: function (event, file) {
    //     this.reload()
    //   }
    // }],
    server: {
      baseDir: distFolder + "/",
      notify: false,
    },
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(group_media())
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 5 versions"],
        cascade: true,
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.img)
    .pipe(newer(path.build.img))
    .pipe(
      image_min({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false,
        }, ],
        interlaced: true,
        optimizationLevel: 3, // 0 to 7
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream());
}

function fonts() {
  src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
  return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
}

function fontsStyle() {
  let file_content = fs.readFileSync(srcFolder + "/scss/fonts.scss");
  if (file_content == "") {
    fs.writeFile(srcFolder + "/scss/fonts.scss", "", cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split(".");
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
              srcFolder + "/scss/fonts.scss",
              '@include font("' +
              fontname +
              '", "' +
              fontname +
              '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

function watchFiles() {
  watch([path.watch.html], html);
  watch([path.watch.css], css);
  watch([path.watch.img], images);
  watch([path.watch.js], js);
}

function clean() {
  return del(path.clean);
}

let build = series(clean, parallel(html, css, images, js, fonts), fontsStyle);

const startWatch = parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
fonts;
exports.fonts = fonts;
exports.fontsStyle = fontsStyle;
exports.build = build;
exports.startWatch = startWatch;
exports.default = startWatch;
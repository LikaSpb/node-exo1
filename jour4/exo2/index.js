const pug = require("pug");

// pug.renderFile(
//   "./views/template.pug",
//   { user: { isAdmin: true } },
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

const compileTemplate = pug.compileFile("./views/template.pug");
const result = compileTemplate({ user: { isAdmin: false } });
console.log(result);

var typescript = Npm.require('typescript');

/**
 * TypeScript Settings
 * for Angular 2
 */
var SETTINGS = {
  module: typescript.ModuleKind.System,
  emitDecoratorMetadata: true,
  experimentalDecorators: true
};

Plugin.registerSourceHandler('ts', function (compileStep) {

  // path to file from app root
  var inputPath = compileStep.inputPath;

  // skip `.d.ts` files & handle only `.ng.ts` files
  var dTs = !!inputPath.match(new RegExp(/.d.ts$/i));
  var ngTs = !!inputPath.match(new RegExp(/.ng.ts$/));
  if (dTs || !ngTs) {
    // default TypeScript handling
    return true;
  }

  // grab the code as a string
  var sourceCode = compileStep.read().toString('utf8');
  // sourcemaps file path
  var fileName = compileStep.pathForSourceMap;

  // transpile TypeScript
  var output = typescript.transpile(sourceCode, SETTINGS, fileName);
  // register module with code
  var moduleName = inputPath.replace(/\\/, '/').replace('.ng.ts', '');
  // register the module with System.js
  var data = output.replace("System.register([", 'System.register("' + moduleName + '",[');

  // output
  compileStep.addJavaScript({
    // rename the file .js
    path: inputPath.replace('.ng', '').replace('.ts', '.js'),
    // output code
    data: data,
    // path to original `.ng.ts` file
    sourcePath: inputPath
  });
});

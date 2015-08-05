var typescript = Npm.require('typescript');

Plugin.registerSourceHandler('ts', function(compileStep) {
  ngTs = !!compileStep.inputPath.match(new RegExp(/.ng.ts$/i));

  var output, moduleName;

  if (ngTs === true) {
    output = typescript.transpile(compileStep.read().toString('utf8'), {
      module: typescript.ModuleKind.System
    });
    moduleName = compileStep.inputPath.replace(/\\/g, '/').replace('.ng.ts', '');
    output = output.replace("System.register([", 'System.register("' + moduleName + '",[');
  } else {
    output = typescript.transpile(compileStep.read().toString('utf8'));
  }

  compileStep.addJavaScript({
    path: compileStep.inputPath.replace('.ng', '').replace('.ts', '.js'),
    data: output,
    sourcePath: compileStep.inputPath
  });
});

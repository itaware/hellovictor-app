import * as fs from 'fs';
import * as path from 'path';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { AppServerModuleNgFactory } from '../../universal/ngfactory/src/uni/app.server.ngfactory';

const outputCache = {};   // cache for rendered pages
const template = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html')).toString();

export function ngUniversalEngine() {
  return function (filePath: string, options: { req: Request }, callback: (err: Error, html: string) => void) {
    const url: string = options.req.url;
    const html: string = outputCache[url];
    if (html) {
      // return already-built page for this url
      console.log('from cache: ' + url);
      callback(null, html);
      return;
    }
    console.log('building: ' + url);
    // render the page via angular platform-server
    renderModuleFactory(AppServerModuleNgFactory, {
      document: template,
      url: url
    }).then(str => {
      outputCache[url] = str;
      callback(null, str);
    });
  };
}

import __dirname from './__dirname.js';
import { getJsonFromPath, writeJson } from './json.js';
import { execSync } from 'child_process';
import { remove } from 'fs-extra';
import { readFile, writeFile } from 'fs/promises';

console.log(`clearing dist directory...`);
await remove(`${__dirname}/../dist`);

console.log(`build components... `);
execSync(`npx parcel build`);
console.log(`components generated... `);

console.log(`generating package.json...`);
const packageJSON = await getJsonFromPath(`${__dirname}/package.template.json`);
await writeJson(`${__dirname}/../dist/package.json`, packageJSON);
console.log(`package.json generated...`);

console.log(`adding README.md...`);
await writeFile(`${__dirname}/../dist/README.md`, await readFile(`${__dirname}/README.md`));
await writeFile(`${__dirname}/../documentation/README.md`, await readFile(`${__dirname}/README.md`));

console.log(`adding LICENSE...`);
await writeFile(`${__dirname}/../dist/LICENSE`, await readFile(`${__dirname}/../LICENSE`));

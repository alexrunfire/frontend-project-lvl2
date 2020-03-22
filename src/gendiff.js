#!/usr/bin/env node

import gendiff from '.';

const program = require('commander');

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'default')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => gendiff(firstConfig, secondConfig, program.format));
program.parse(process.argv);

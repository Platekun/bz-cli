#!/usr/bin/env node
import program from 'commander';
import { generateProject, generateAction } from './tasks';

program
  .version('0.0.1')
  .description('Develop custom connectors for Bizagi Studio blazingly fast.');

program
  .command('new <appName>')
  .description('Create a new project.')
  .action(generateProject);

program
  .command('generate-action <actionName>')
  .description('Generate a new custom connector action.')
  .action(generateAction);

program.parse(process.argv);

// load modules
const fs = require('fs');
const yaml = require('js-yaml');

// choose a starting and ending location
const starting_location = 'src/OneNord.yml'
const ending_location = 'themes/OneNord-color-theme.json'

// read the starting file and load the YAML data
const starting_file = fs.readFileSync(starting_location, 'utf8')
const yaml_theme = yaml.load(starting_file);

// convert the YAML to JSON and write to the ending file
const json_theme = JSON.stringify(yaml_theme, null, 4)
fs.writeFileSync(ending_location, json_theme);

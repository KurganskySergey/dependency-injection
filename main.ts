import { Configuration } from './di';
new Configuration(require('./configuration.json'));

import Dashboard from './views/Dashboard';

let myDashboard = new Dashboard();

myDashboard.testResult();
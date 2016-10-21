// IMPORTS
import {Config} from './aurelia-plugins-cookie-consent-config';


// PUBLIC METHODS
export function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof(configCallback) === 'function')
    configCallback(instance);
  aurelia.globalResources('./aurelia-plugins-cookie-consent-element');
}
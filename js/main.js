import {makeAdverts} from './mocks.js';
import {OFFERS_COUNT} from './data.js';
import {similarCard} from './template.js';
import {disableAdvertForm} from './form.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(similarCard(makeAdverts(OFFERS_COUNT)[0]));

// disableAdvertForm();

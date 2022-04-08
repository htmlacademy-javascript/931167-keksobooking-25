import {makeAdverts} from './mocks.js';
import {OFFERS_COUNT} from './data.js';
import {similarCard} from './template.js';

similarCard(makeAdverts(OFFERS_COUNT)[0]);

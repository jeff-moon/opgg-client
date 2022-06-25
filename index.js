import OPGG from './opgg-interface.js';
import DomParser from './dom-parser.js';

const client = new OPGG();
const dom = new DomParser();

(async () => {
    const html = await client.GetSummoner('na', 'mynameisnotjeff');
    dom.ParseSummoner(html);
})();



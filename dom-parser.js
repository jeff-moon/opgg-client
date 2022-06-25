import cheerio from "cheerio";

export default class DomParser {
    async ParseSummoner(html) {
        const $ = cheerio.load(html);        
        const winloss = $('.win-lose-container');
        const wltext = $(winloss).find('.win-lose').text(); // 110W 120L
        const wlratio = $(winloss).find('.ratio').text();   // Win Rate 48%

        
    }
}
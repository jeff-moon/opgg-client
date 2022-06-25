import fetch from 'node-fetch';

export default class OPGG {
    async GetSummoner(region, name) {
        const url = encodeURI(`https://${region}.op.gg/summoners/${region}/${name}`);
        const response = await fetch(url, {
            method: 'get'
        });

        return await response.text();
    }
}
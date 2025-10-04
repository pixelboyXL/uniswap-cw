import { uniswapMarketExmark, uniswapMarketInfoWrap } from './refs';
import { toggleIsHidden } from './simple';

if (uniswapMarketExmark) {
    uniswapMarketExmark.addEventListener ("click", () => {
        toggleIsHidden(uniswapMarketInfoWrap);
        setTimeout(() => {
            toggleIsHidden(uniswapMarketInfoWrap);
        }, 5000);
    });
};
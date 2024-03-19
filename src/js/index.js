import { front_anim } from "./Animations/front-page.js";
import { front_func } from "./Functions/func_index.js";
import { image_animRoll } from "./Animations/banner-img.js";
import { road_map_anim } from "./Animations/road-map.js";

$(function(){


    front_anim();
    front_func();
    road_map_anim();

    setInterval(image_animRoll,10000)
    
});
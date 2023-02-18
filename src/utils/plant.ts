import flower_growings0 from '../assets/growings/flower_growings0.png';
import flower_growings1 from '../assets/growings/flower_growings1.png';
import flower_growings2 from '../assets/growings/flower_growings2.png';
import flower_growings3 from '../assets/growings/flower_growings3.png';
import flower_growings4 from '../assets/growings/flower_growings4.png';
import flower_growings5 from '../assets/growings/flower_growings5.png';
import flower_growings6 from '../assets/growings/flower_growings6.png';
import acacia from '../assets/flowers/acacia.png';
import apricot from '../assets/flowers/apricot.png';
import azalea from '../assets/flowers/azalea.png';
import bellflower from '../assets/flowers/bellflower.png';
import black_lily from '../assets/flowers/black_lily.png';
import blue_bonnet from '../assets/flowers/blue_bonnet.png';
import canola_flowers from '../assets/flowers/canola_flowers.png';
import cattleya from '../assets/flowers/cattleya.png';
import cosmos from '../assets/flowers/cosmos.png';
import cotton_flower from '../assets/flowers/cotton_flower.png';
import dandelion_fluff from '../assets/flowers/dandelion_fluff.png';
import gardenia_flower from '../assets/flowers/gardenia_flower.png';
import hyacinth from '../assets/flowers/hyacinth.png';
import lavender from '../assets/flowers/lavender.png';
import lily from '../assets/flowers/lily.png';
import marigold from '../assets/flowers/marigold.png';
import morning_glory from '../assets/flowers/morning_glory.png';
import pansy from '../assets/flowers/pansy.png';
import plum_blossom from '../assets/flowers/plum_blossom.png';
import poppy from '../assets/flowers/poppy.png';
import red_rose from '../assets/flowers/red_rose.png';
import tulip from '../assets/flowers/tulip.png';
import veronica_persica from '../assets/flowers/veronica_persica.png';
import white_clover from '../assets/flowers/white_clover.png';
import white_hibiscus from '../assets/flowers/white_hibiscus.png';
import white_hydrangea from '../assets/flowers/white_hydrangea.png';

import tree_growings0 from '../assets/growings/tree_growings0.png';
import tree_growings1 from '../assets/growings/tree_growings1.png';
import tree_growings2 from '../assets/growings/tree_growings2.png';
import tree_growings3 from '../assets/growings/tree_growings3.png';
import tree_growings4 from '../assets/growings/tree_growings4.png';
import tree_growings5 from '../assets/growings/tree_growings5.png';
import tree_growings6 from '../assets/growings/tree_growings6.png';
import tree_growings7 from '../assets/growings/tree_growings7.png';
import tree_growings8 from '../assets/growings/tree_growings8.png';
import autumn_tree from '../assets/trees/autumn_tree.png';
import bamboo from '../assets/trees/bamboo.png';
import banana_tree from '../assets/trees/banana_tree.png';
import baobab_tree from '../assets/trees/baobab_tree.png';
import birch from '../assets/trees/birch.png';
import cedar from '../assets/trees/cedar.png';
import cherry_blossom from '../assets/trees/cherry_blossom.png';
import chestnut_tree from '../assets/trees/chestnut_tree.png';
import christmas_tree from '../assets/trees/christmas_tree.png';
import loquat_tree from '../assets/trees/loquat_tree.png';
import maple_tree from '../assets/trees/maple_tree.png';
import sequoia from '../assets/trees/sequoia.png';
import spring_tree from '../assets/trees/spring_tree.png';
import summer_tree from '../assets/trees/summer_tree.png';
import wedding_cake_tree from '../assets/trees/wedding_cake_tree.png';
import willow from '../assets/trees/willow.png';
import winter_tree from '../assets/trees/winter_tree.png';
import {ImageSourcePropType} from 'react-native';

export const MAX_FLOWER_LEVEL = 7;
export const MAX_TREE_LEVEL = 9;

export type IFlower =
  | 'acacia'
  | 'apricot'
  | 'azalea'
  | 'bellflower'
  | 'black_lily'
  | 'blue_bonnet'
  | 'canola_flowers'
  | 'cattleya'
  | 'cosmos'
  | 'cotton_flower'
  | 'dandelion_fluff'
  | 'gardenia_flower'
  | 'hyacinth'
  | 'lavender'
  | 'lily'
  | 'marigold'
  | 'morning_glory'
  | 'pansy'
  | 'plum_blossom'
  | 'poppy'
  | 'red_rose'
  | 'tulip'
  | 'veronica_persica'
  | 'white_clover'
  | 'white_hibiscus'
  | 'white_hydrangea';

export type ITree =
  | 'autumn_tree'
  | 'bamboo'
  | 'banana_tree'
  | 'baobab_tree'
  | 'birch'
  | 'cedar'
  | 'cherry_blossom'
  | 'chestnut_tree'
  | 'christmas_tree'
  | 'loquat_tree'
  | 'maple_tree'
  | 'sequoia'
  | 'spring_tree'
  | 'summer_tree'
  | 'wedding_cake_tree'
  | 'willow'
  | 'winter_tree';

export const FlowerType: {[key in IFlower]: ImageSourcePropType} = {
  acacia,
  apricot,
  azalea,
  bellflower,
  black_lily,
  blue_bonnet,
  canola_flowers,
  cattleya,
  cosmos,
  cotton_flower,
  dandelion_fluff,
  gardenia_flower,
  hyacinth,
  lavender,
  lily,
  marigold,
  morning_glory,
  pansy,
  plum_blossom,
  poppy,
  red_rose,
  tulip,
  veronica_persica,
  white_clover,
  white_hibiscus,
  white_hydrangea,
};

export const TreeType: {[key in ITree]: ImageSourcePropType} = {
  autumn_tree,
  bamboo,
  banana_tree,
  baobab_tree,
  birch,
  cedar,
  cherry_blossom,
  chestnut_tree,
  christmas_tree,
  loquat_tree,
  maple_tree,
  sequoia,
  spring_tree,
  summer_tree,
  wedding_cake_tree,
  willow,
  winter_tree,
};

export const FlowerImage = [
  flower_growings0,
  flower_growings1,
  flower_growings2,
  flower_growings3,
  flower_growings4,
  flower_growings5,
  flower_growings6,
];

export const TreeImage = [
  tree_growings0,
  tree_growings1,
  tree_growings2,
  tree_growings3,
  tree_growings4,
  tree_growings5,
  tree_growings6,
  tree_growings7,
  tree_growings8,
];

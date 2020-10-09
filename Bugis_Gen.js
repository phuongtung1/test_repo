/**
 * to use this code: import Bugis_Gen from this js file as well as the GI module
 * run Bugis_Gen with the GI module as input along with other start node input
 * e.g.:
 * const Bugis_Gen = require('./Bugis_Gen.js').Bugis_Gen
 * const module = require('gi-module')
 * const result = Bugis_Gen(module, start_input_1, start_input_2, ...);
 *
 * returns: a json object:
 *   _ result.model -> gi model of the flowchart
 *   _ result.result -> returned output of the flowchart, if the flowchart does not return any value, result.result is the model of the flowchart
 */

// Parameter: {"name":"pod1_num_floors","value":1,"type":1,"min":"0","max":"5","step":"1"}
// Parameter: {"name":"tow1_rotation","value":-139,"type":1,"min":"-180","max":"180","step":"1"}
// Parameter: {"name":"pod2_num_floors","value":1,"type":1,"min":"0","max":"5","step":"1"}
// Parameter: {"name":"tow2_rotation","value":"-40","type":1,"min":"-180","max":"180","step":"1"}
// Parameter: {"name":"total_floors","value":"100","type":1,"min":"0","max":"200","step":"1"}
// Parameter: {"name":"relative_height_1","value":0.3,"type":1,"min":"0.1","max":"1","step":"0.1"}
// Parameter: {"name":"relative_height_2","value":0.7,"type":1,"min":"0.1","max":"1","step":"0.1"}


function Bugis_Gen(__modules__, pod1_num_floors, tow1_rotation, pod2_num_floors, tow2_rotation, total_floors, relative_height_1, relative_height_2) {

__debug__ = true;
__model__ = null;
/** * **/
PI = Math.PI;
XY = __modules__._constants.XY;
YZ = __modules__._constants.YZ;
ZX = __modules__._constants.ZX;
YX = __modules__._constants.YX;
ZY = __modules__._constants.ZY;
XZ = __modules__._constants.XZ;
isNum = __modules__._types.isNum;
isInt = __modules__._types.isInt;
isFlt = __modules__._types.isFlt;
isBool = __modules__._types.isBool;
isStr = __modules__._types.isStr;
isList = __modules__._types.isList;
isDict = __modules__._types.isDict;
isVec2 = __modules__._types.isVec2;
isVec3 = __modules__._types.isVec3;
isCol = __modules__._types.isCol;
isRay = __modules__._types.isRay;
isPln = __modules__._types.isPln;
isNaN = __modules__._types.isNaN;
isNull = __modules__._types.isNull;
isUndef = __modules__._types.isUndef;
strRepl = __modules__._strs.strRepl;
strUpp = __modules__._strs.strUpp;
strLow = __modules__._strs.strLow;
strTrim = __modules__._strs.strTrim;
strTrimR = __modules__._strs.strTrimR;
strTrimL = __modules__._strs.strTrimL;
strSub = __modules__._strs.strSub;
strStarts = __modules__._strs.strStarts;
strEnds = __modules__._strs.strEnds;
strPadL = __modules__._strs.strPadL;
strPadR = __modules__._strs.strPadR;
isApprox = __modules__._util.isApprox;
isIn = __modules__._util.isIn;
isWithin = __modules__._util.isWithin;
min = __modules__._math.min;
max = __modules__._math.max;
pow = Math.pow;
sqrt = Math.sqrt;
exp = Math.exp;
log = Math.log;
round = __modules__._math.round;
sigFig = __modules__._math.sigFig;
ceil = Math.ceil;
floor = Math.floor;
abs = Math.abs;
sin = Math.sin;
asin = Math.asin;
sinh = Math.sinh;
asinh = Math.asinh;
cos = Math.cos;
acos = Math.acos;
cosh = Math.cosh;
acosh = Math.acosh;
tan = Math.tan;
atan = Math.atan;
tanh = Math.tanh;
atanh = Math.atanh;
atan2 = Math.atan2;
boolean = __modules__._mathjs.boolean;
number = __modules__._mathjs.number;
string = __modules__._mathjs.string;
mad = __modules__._mathjs.mad;
mean = __modules__._mathjs.mean;
median = __modules__._mathjs.median;
mode = __modules__._mathjs.mode;
prod = __modules__._mathjs.prod;
std = __modules__._mathjs.std;
vari = __modules__._mathjs.var;
sum = __modules__._mathjs.sum;
hypot = __modules__._mathjs.hypot;
norm = __modules__._mathjs.norm;
mod = __modules__._mathjs.mod;
square = __modules__._mathjs.square;
cube = __modules__._mathjs.cube;
remap = __modules__._arithmetic.remap;
distance = __modules__._geometry.distance;
distanceM = __modules__._geometry.distanceM;
distanceMS = __modules__._geometry.distanceMS;
intersect = __modules__._geometry.intersect;
project = __modules__._geometry.project;
range = __modules__._list.range;
isList = __modules__._list.isList;
len = __modules__._list.listLen;
listLen = __modules__._list.listLen;
listCount = __modules__._list.listCount;
listCopy = __modules__._list.listCopy;
listRep = __modules__._list.listRep;
listLast = __modules__._list.listLast;
listGet = __modules__._list.listGet;
listFind = __modules__._list.listFind;
listHas = __modules__._list.listHas;
listJoin = __modules__._list.listJoin;
listFlat = __modules__._list.listFlat;
listSlice = __modules__._list.listSlice;
listCull = __modules__._list.listCull;
listZip = __modules__._list.listZip;
listZip2 = __modules__._list.listZip2;
setMake = __modules__._set.setMake;
setUni = __modules__._set.setUni;
setInt = __modules__._set.setInt;
setDif = __modules__._set.setDif;
length = __modules__._list.length;
shuffle = __modules__._list.shuffle;
concat = __modules__._list.concat;
zip = __modules__._list.zip;
zip2 = __modules__._list.zip2;
vecAdd = __modules__._vec.vecAdd;
vecSub = __modules__._vec.vecSub;
vecDiv = __modules__._vec.vecDiv;
vecMult = __modules__._vec.vecMult;
vecSum = __modules__._vec.vecSum;
vecLen = __modules__._vec.vecLen;
vecSetLen = __modules__._vec.vecSetLen;
vecNorm = __modules__._vec.vecNorm;
vecRev = __modules__._vec.vecRev;
vecFromTo = __modules__._vec.vecFromTo;
vecAng = __modules__._vec.vecAng;
vecAng2 = __modules__._vec.vecAng2;
vecDot = __modules__._vec.vecDot;
vecCross = __modules__._vec.vecCross;
vecEqual = __modules__._vec.vecEqual;
vecLtoG = __modules__._vec.vecLtoG;
vecGtoL = __modules__._vec.vecGtoL;
plnMake = __modules__._plane.plnMake;
plnCopy = __modules__._plane.plnCopy;
plnMove = __modules__._plane.plnMove;
plnRot = __modules__._plane.plnRot;
plnLMove = __modules__._plane.plnLMove;
plnLRotX = __modules__._plane.plnLRotX;
plnLRotY = __modules__._plane.plnLRotY;
plnLRotZ = __modules__._plane.plnLRotZ;
rayMake = __modules__._ray.rayMake;
rayCopy = __modules__._ray.rayCopy;
rayMove = __modules__._ray.rayMove;
rayRot = __modules__._ray.rayRot;
rayLMove = __modules__._ray.rayLMove;
rayFromPln = __modules__._ray.rayFromPln;
rayLtoG = __modules__._ray.rayLtoG;
rayGtoL = __modules__._ray.rayGtoL;
colFalse = __modules__._colors.colFalse;
colScale = __modules__._colors.colScale;
radToDeg = __modules__._conversion.radToDeg;
degToRad = __modules__._conversion.degToRad;
numToStr = __modules__._conversion.numToStr;
rand = __modules__._rand.rand;
randInt = __modules__._rand.randInt;
randPick = __modules__._rand.randPick;
setattr = __modules__._model.__setAttrib__;
getattr = __modules__._model.__getAttrib__;


function exec_Bugis_Gen(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){


function exec_Bugis_Gen_node_4v0a1eesd6a_base_(__params__, corner_, size_) {

let g_ = __modules__.pattern.Rectangle( __params__.model, [corner_[pythonList(0, corner_.length)] + size_[pythonList(0, size_.length)] / 2, corner_[pythonList(1, corner_.length)] + size_[pythonList(1, size_.length)] / 2, corner_[pythonList(2, corner_.length)]], size_ );

let p_ = __modules__.make.Polygon( __params__.model, g_ );

return p_;
}

function exec_Bugis_Gen_node_4v0a1eesd6a(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let p_ = exec_Bugis_Gen_node_4v0a1eesd6a_base_(__params__, [3, 3, 0], [70, 60]);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Move( __params__.model, __modules__.query.Get(__params__.model, 'ps', p_)[pythonList(3, __modules__.query.Get(__params__.model, 'ps', p_).length)], [-10, 0, 0] );

__modules__.attrib.Set(__params__.model, p_, 'type',  "podium" );

p_ = exec_Bugis_Gen_node_4v0a1eesd6a_base_(__params__, [110, 3, 0], [70, 60]);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Move( __params__.model, __modules__.query.Get(__params__.model, 'ps', p_)[pythonList(1, __modules__.query.Get(__params__.model, 'ps', p_).length)], [3, 0, 0] );

__modules__.attrib.Set(__params__.model, p_, 'type',  "podium" );

let tow1_elev_ = (pod1_num_floors_ * 5) + 8;

let tow1_ = exec_Bugis_Gen_node_4v0a1eesd6a_base_(__params__, [10, 10, tow1_elev_], [40, 40]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, tow1_, 'type',  "tower" );

let tow2_elev_ = (pod2_num_floors_ * 5) + 8;

let tow2_ = exec_Bugis_Gen_node_4v0a1eesd6a_base_(__params__, [130, 10, tow2_elev_], [40, 40]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, tow2_, 'type',  "tower" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



function exec_Bugis_Gen_node_v3taz1645pc_towerFloors_(__params__, center_, num_floors_, rotation_) {

let circ_ = __modules__.pattern.Arc( __params__.model, center_, 18, 30, null );

__modules__.modify.Scale( __params__.model, circ_, center_, [1.5, 1, 1] );

__modules__.modify.Rotate( __params__.model, circ_, [center_, [0, 0, 1]], degToRad(rotation_) );

let circ_pline_ = __modules__.make.Polyline( __params__.model, circ_, 'close' );

let floor_ = __modules__.make.Polygon( __params__.model, circ_ );

let floors_ = [];

for (let  i_ of range(0, num_floors_)){

let floor2_ = __modules__.make.Copy( __params__.model, floor_, [0, 0, 3 * i_] );

__modules__.modify.Rotate( __params__.model, floor2_, [center_, [0, 0, 1]], i_ * JSON.parse(JSON.stringify(PI)) / 100 );

let scale_factor_ = 1 - (i_ / 300);

__modules__.modify.Scale( __params__.model, floor2_, center_, [scale_factor_, scale_factor_, 1] );

__modules__.list.Add( floors_, floor2_, 'to_end' );
}

return floors_;
}


function exec_Bugis_Gen_node_v3taz1645pc_towerSkin_(__params__, center_, floors_) {

let skin_ = __modules__.make.Extrude( __params__.model, floors_.slice(0, -1), 3, 1, 'quads' );

return skin_;
}


function exec_Bugis_Gen_node_v3taz1645pc_towerSlabs_(__params__, center_, floors_) {

let roof_slab_ = __modules__.make.Extrude( __params__.model, floors_[pythonList(-1, floors_.length)], 5, 1, 'quads' );

let base_slab_ = __modules__.make.Extrude( __params__.model, floors_[pythonList(0, floors_.length)], -2, 1, 'quads' );

__modules__.modify.Reverse( __params__.model, base_slab_ );

return listFlat([roof_slab_, base_slab_]);
}


function exec_Bugis_Gen_node_v3taz1645pc_makeTower_(__params__, tower_base_, num_floors_, rotation_) {

let center_ = __modules__.calc.Centroid( __params__.model, tower_base_, 'ps_average' );

let floors_ = exec_Bugis_Gen_node_v3taz1645pc_towerFloors_(__params__, center_, num_floors_, rotation_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, floors_, 'type',  "floor" );

let skin_ = exec_Bugis_Gen_node_v3taz1645pc_towerSkin_(__params__, center_, floors_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, skin_, 'type',  "facade" );

let slabs_ = exec_Bugis_Gen_node_v3taz1645pc_towerSlabs_(__params__, center_, floors_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, slabs_, 'type',  "slab" );

let tower_coll_ = __modules__.collection.Create( __params__.model, [], "tower" );

__modules__.collection.Add( __params__.model, tower_coll_, floors_ );

__modules__.collection.Add( __params__.model, tower_coll_, skin_ );

__modules__.collection.Add( __params__.model, tower_coll_, slabs_ );

let areas_ = __modules__.calc.Area( __params__.model, floors_ );

__modules__.attrib.Set(__params__.model, tower_coll_, 'gfa',  round(sum(areas_)) );

__modules__.attrib.Set(__params__.model, tower_coll_, 'num_floors',  num_floors_ );

return tower_coll_;
}

function exec_Bugis_Gen_node_v3taz1645pc(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let tow_bases_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "tower");

let tow1_num_floors_ = round(total_floors_ * (relative_height_1_ / (relative_height_1_ + relative_height_2_)));

let tow2_num_floors_ = round(total_floors_ * (relative_height_2_ / (relative_height_1_ + relative_height_2_)));

let tow1_coll_ = exec_Bugis_Gen_node_v3taz1645pc_makeTower_(__params__, tow_bases_[pythonList(0, tow_bases_.length)], tow1_num_floors_, tow1_rotation_);
if (__params__.terminated) { return __params__.model;}

let tow2_coll_ = exec_Bugis_Gen_node_v3taz1645pc_makeTower_(__params__, tow_bases_[pythonList(1, tow_bases_.length)], tow2_num_floors_, tow2_rotation_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [tow1_coll_, tow2_coll_], 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



function exec_Bugis_Gen_node_cdu40tjeenk_makePodium_(__params__, pod_base_, num_floors_) {

let edges_ = __modules__.make.Divide( __params__.model, pod_base_, 20, 'by_max_length' );

let posis_ = __modules__.pattern.Nurbs( __params__.model, __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', pod_base_), 'xyz'), 3, 'close', 30 );

let pod_footprint_ = __modules__.make.Polygon( __params__.model, posis_ );

let pod_block_ = __modules__.make.Extrude( __params__.model, pod_footprint_, num_floors_ * 5, num_floors_, 'quads' );

__modules__.attrib.Set(__params__.model, pod_block_, 'type',  "facade" );

let pod_slab_ = __modules__.make.Extrude( __params__.model, pod_block_[pythonList(-1, pod_block_.length)], 1, 1, 'quads' );

__modules__.attrib.Set(__params__.model, pod_slab_, 'type',  "slab" );

let pod_coll_ = __modules__.collection.Create( __params__.model, listFlat([pod_block_, pod_slab_]), "podium" );

let area_ = __modules__.calc.Area( __params__.model, pod_footprint_ );

__modules__.attrib.Set(__params__.model, pod_coll_, 'gfa',  round(area_) * num_floors_ );

__modules__.attrib.Set(__params__.model, pod_coll_, 'num_floors',  num_floors_ );

return pod_coll_;
}

function exec_Bugis_Gen_node_cdu40tjeenk(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let pod_bases_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "podium");

let pod1_coll_ = exec_Bugis_Gen_node_cdu40tjeenk_makePodium_(__params__, pod_bases_[pythonList(0, pod_bases_.length)], pod1_num_floors_);
if (__params__.terminated) { return __params__.model;}

let pod2_coll_ = exec_Bugis_Gen_node_cdu40tjeenk_makePodium_(__params__, pod_bases_[pythonList(1, pod_bases_.length)], pod2_num_floors_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [pod1_coll_, pod2_coll_], 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


function exec_Bugis_Gen_node_ouuaggi9a6p(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let tow_colls_ = __modules__.collection.Get( __params__.model, "tower" );

let tow_pgons_ = __modules__.query.Get(__params__.model, 'pg', tow_colls_);

let tow_slabs_ = __modules__.query.Filter(__params__.model, tow_pgons_, ['type', null], '==', "slab");

let pod_colls_ = __modules__.collection.Get( __params__.model, "podium" );

let pod_pgons_ = __modules__.query.Get(__params__.model, 'pg', pod_colls_);

let pod_slabs_ = __modules__.query.Filter(__params__.model, pod_pgons_, ['type', null], '==', "slab");

let all_pgons_ = __modules__.query.Get(__params__.model, 'pg', null);

let skin_ = __modules__.query.Filter(__params__.model, all_pgons_, ['type', null], '==', "facade");

let coll_ = __modules__.collection.Create( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), "buildings" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


function exec_Bugis_Gen_node_uos84tnsry(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let coll_buildings_ = __modules__.collection.Get( __params__.model, "buildings" );

let facade_pgons_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', coll_buildings_), ['type', null], '==', "facade");

for (let  pgon_ of facade_pgons_){

let nor_ = __modules__.calc.Normal( __params__.model, pgon_, 1 );

let cen_ = __modules__.calc.Centroid( __params__.model, pgon_, 'ps_average' );

let ray_ = rayMake(cen_, nor_);

let vis_ = __modules__.visualize.Ray( __params__.model, ray_, 0.1 );

__modules__.attrib.Set(__params__.model, pgon_, 'ray',  ray_ );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


function exec_Bugis_Gen_node_aob2z9hawz(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let tow_colls_ = __modules__.collection.Get( __params__.model, "tower" );

let pod_colls_ = __modules__.collection.Get( __params__.model, "podium" );

let tow_gfas_ = __modules__.attrib.Get(__params__.model, tow_colls_, 'gfa');

let pod_gfas_ = __modules__.attrib.Get(__params__.model, pod_colls_, 'gfa');

let m2_ = "m<sup>2</sup>";

let line1_ = "Towers GFA: " + sum(tow_gfas_) + m2_;

let line2_ = "Podium GFA: " + sum(pod_gfas_) + m2_;

let line3_ = "Total GFA: " + (sum(tow_gfas_) + sum(pod_gfas_)) + m2_;

__modules__.attrib.Set(__params__.model, null, 'hud',  line1_ + "\n" + line2_ + "\n" + line3_ );

let coll_ = __modules__.collection.Create( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), "buildings_obstructions" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


function exec_Bugis_Gen_node_6b2992614v7(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.attrib.Set(__params__.model, null, 'geolocation',  {"latitude": 1.299167,"longitude": 103.856193,"elevation": 0.5} );

__modules__.attrib.Set(__params__.model, null, 'north',  [-11, 10] );

let footprints_coll_ = __modules__.io.Import( __params__.model, `{
"type": "FeatureCollection",
"name": "bugis_footprint",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "NAME_BLDG": "DUO RESIDENCES", "HT_BLDG": 15, "AREA": 0, "ID": 1 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.858613956092995, 1.30021326903837 ], [ 103.858667886220005, 1.30015863582207 ], [ 103.858746771379998, 1.30007872535826 ], [ 103.858734854413996, 1.30003235960446 ], [ 103.858729185916999, 1.29998479188664 ], [ 103.858729887202003, 1.29993690667231 ], [ 103.858736941204995, 1.29988955044704 ], [ 103.858750208659004, 1.2998435552277 ], [ 103.858769460443, 1.29979975031895 ], [ 103.858794363205007, 1.29975894693923 ], [ 103.858824442520003, 1.29972183602783 ], [ 103.858909908542998, 1.29963583278705 ], [ 103.858781145785002, 1.29950708511744 ], [ 103.858726951869997, 1.29950853445854 ], [ 103.858673004088999, 1.299503288784 ], [ 103.858620074293995, 1.29949145480105 ], [ 103.858569004423998, 1.2994731916695 ], [ 103.858520532186006, 1.29944876345656 ], [ 103.858475393492995, 1.29941855993616 ], [ 103.858654136019993, 1.29927995339409 ], [ 103.858654171062994, 1.29927991812353 ], [ 103.858653206016996, 1.29927901738599 ], [ 103.858530076413999, 1.29916519528106 ], [ 103.858411056207004, 1.29935917637472 ], [ 103.858382870309001, 1.2993239380848 ], [ 103.858357581299998, 1.29928654466451 ], [ 103.858335362598993, 1.29924720863795 ], [ 103.858319374347005, 1.29920169031194 ], [ 103.858307247129005, 1.29915497095104 ], [ 103.858299086079995, 1.2991073860736 ], [ 103.858292399644, 1.29907013354839 ], [ 103.858280570849999, 1.29903418878564 ], [ 103.858263809966004, 1.29900029336226 ], [ 103.858242487197998, 1.29896911740873 ], [ 103.858108125624, 1.29883500054473 ], [ 103.858058038470006, 1.29878499599949 ], [ 103.858027835068, 1.29881308134323 ], [ 103.857995052812001, 1.29883807559332 ], [ 103.857959602744003, 1.29885967759704 ], [ 103.857937682857994, 1.29887075266234 ], [ 103.857909831640995, 1.2988779950878 ], [ 103.857879488795007, 1.29888873471569 ], [ 103.857848021829, 1.2988953947649 ], [ 103.857815976161007, 1.2988979028809 ], [ 103.857596308647999, 1.29914605817242 ], [ 103.857396577789004, 1.29937169185921 ], [ 103.857358161402999, 1.29937109172898 ], [ 103.857320324520003, 1.29936434462555 ], [ 103.857284031280997, 1.29935166216114 ], [ 103.857171328888995, 1.29947670250989 ], [ 103.857171521601003, 1.29952181493376 ], [ 103.857165432581994, 1.29956652045316 ], [ 103.857153183128005, 1.29960992012832 ], [ 103.857135002358007, 1.29965116385416 ], [ 103.857111240698998, 1.29968942322917 ], [ 103.857082406718007, 1.29972395486053 ], [ 103.857049026956005, 1.29975407142594 ], [ 103.857011769028006, 1.29977918960366 ], [ 103.856971405677001, 1.29979879570708 ], [ 103.856928689879993, 1.29981250356522 ], [ 103.856884499513001, 1.29982004547779 ], [ 103.856839677409994, 1.29982128306898 ], [ 103.85680917661, 1.29985440209516 ], [ 103.856887940312006, 1.29994626853477 ], [ 103.856945433422993, 1.30001222240951 ], [ 103.857014755993006, 1.30009018794348 ], [ 103.857054593895995, 1.300091565819 ], [ 103.857614616397001, 1.29951225426463 ], [ 103.857663474494998, 1.2994836921448 ], [ 103.857715333787993, 1.29946108252351 ], [ 103.857769474546004, 1.29944474374396 ], [ 103.857825141993004, 1.29943490461763 ], [ 103.857881564281996, 1.2994317071372 ], [ 103.857937986634994, 1.29943518658026 ], [ 103.857993602158999, 1.29944530678015 ], [ 103.858042653859002, 1.29946009085228 ], [ 103.858089862694996, 1.29948001444632 ], [ 103.858134720088998, 1.29950488403335 ], [ 103.858176681518998, 1.29953441655272 ], [ 103.858215291419995, 1.29956825930685 ], [ 103.858250127472999, 1.29960604060617 ], [ 103.858280752081001, 1.29964733721252 ], [ 103.858308147374998, 1.29969414504917 ], [ 103.858330137950006, 1.29974374380886 ], [ 103.858346494670997, 1.29979551490853 ], [ 103.858356972229004, 1.29984880539941 ], [ 103.858361465485999, 1.29990294333964 ], [ 103.858359922321, 1.29995724050825 ], [ 103.858351762292997, 1.3000138167419 ], [ 103.85833703838, 1.30006903197202 ], [ 103.858315961732998, 1.3001221283388 ], [ 103.858288829762003, 1.30017234617273 ], [ 103.857688232073002, 1.3007938378391 ], [ 103.857687232345, 1.30083055957805 ], [ 103.857817224504998, 1.3009778530974 ], [ 103.857906534760005, 1.30091034320665 ], [ 103.857914396766006, 1.30088300056688 ], [ 103.857926698501004, 1.30085735266299 ], [ 103.857943072466, 1.30083414288636 ], [ 103.857963096351, 1.30081402419236 ], [ 103.858254804946, 1.30057833934456 ], [ 103.858417331458995, 1.30043325049362 ], [ 103.858422859859999, 1.30039813576525 ], [ 103.858432669837995, 1.30036397419447 ], [ 103.858446638296002, 1.30033131473178 ], [ 103.858480561771998, 1.30031167249474 ], [ 103.858516433329996, 1.30029591629286 ], [ 103.858557393995, 1.30025463705841 ], [ 103.858596564739003, 1.30021164407017 ], [ 103.858613956092995, 1.30021326903837 ], [ 103.858613956092995, 1.30021326903837 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "DUO RESIDENCES", "HT_BLDG": 185, "AREA": 0, "ID": 2 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.857815976161007, 1.29889790288095 ], [ 103.857571321768006, 1.29917428556746 ], [ 103.857571321768006, 1.29917428556746 ], [ 103.857579929756994, 1.29918686554546 ], [ 103.857587661872998, 1.29920000204802 ], [ 103.857594482280007, 1.29921363419225 ], [ 103.857600359369002, 1.29922769879814 ], [ 103.857605265901995, 1.29924213068139 ], [ 103.857609179137995, 1.29925686295548 ], [ 103.857612080940996, 1.29927182734171 ], [ 103.857613957862, 1.29928695448562 ], [ 103.857614801202999, 1.29930217427841 ], [ 103.857614607054998, 1.29931741618192 ], [ 103.857613376317005, 1.29933260955549 ], [ 103.857611114693, 1.29934768398338 ], [ 103.857607832666005, 1.29936256960113 ], [ 103.857603545447006, 1.29937719741933 ], [ 103.857598272904994, 1.2993914996434 ], [ 103.857592039476003, 1.29940540998775 ], [ 103.857584874050005, 1.29941886398302 ], [ 103.857576809836004, 1.29943179927485 ], [ 103.857567884209004, 1.2994441559129 ], [ 103.857558138537001, 1.29945587662865 ], [ 103.857614616397001, 1.29951225426467 ], [ 103.857663474494998, 1.29948369214487 ], [ 103.857715333787993, 1.29946108252358 ], [ 103.857769474546004, 1.29944474374402 ], [ 103.857825141993004, 1.29943490461767 ], [ 103.857881564281996, 1.29943170713726 ], [ 103.857937986634994, 1.29943518658031 ], [ 103.858000530140998, 1.29911508875555 ], [ 103.858000530140998, 1.29911508875556 ], [ 103.857977690672001, 1.29910165087205 ], [ 103.857955801000998, 1.29908671566639 ], [ 103.857934959136003, 1.29907035000902 ], [ 103.857915258394002, 1.29905262717504 ], [ 103.857896786983005, 1.29903362651614 ], [ 103.857879627605996, 1.29901343310531 ], [ 103.857863857091999, 1.29899213735592 ], [ 103.857849546051, 1.29896983461692 ], [ 103.857836758557994, 1.29894662474592 ], [ 103.857825551869993, 1.29892261166211 ], [ 103.857815976161007, 1.29889790288095 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "DUO RESIDENCES", "HT_BLDG": 185, "AREA": 0, "ID": 3 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.858909908542998, 1.29963583278705 ], [ 103.858781145785002, 1.29950708511744 ], [ 103.858781145785002, 1.29950708511744 ], [ 103.858756569345005, 1.29951903628069 ], [ 103.858731248531996, 1.29952931675607 ], [ 103.858705296766999, 1.29953788049417 ], [ 103.858678830296, 1.29954468913539 ], [ 103.858651967669005, 1.29954971218174 ], [ 103.858624829212999, 1.29955292713345 ], [ 103.858597536489, 1.29955431958977 ], [ 103.858570211750006, 1.29955388331347 ], [ 103.858542977390996, 1.29955162025875 ], [ 103.858515955404002, 1.29954754056254 ], [ 103.858489266828002, 1.29954166249905 ], [ 103.858463031208998, 1.29953401239791 ], [ 103.858437366065999, 1.29952462452627 ], [ 103.858412386360001, 1.2995135409353 ], [ 103.858388203982003, 1.29950081127178 ], [ 103.858364927254001, 1.29948649255579 ], [ 103.858342660437998, 1.29947064892522 ], [ 103.858255304956998, 1.29961302232812 ], [ 103.858280752081001, 1.29964733721255 ], [ 103.858308147374998, 1.2996941450492 ], [ 103.858330137950006, 1.29974374380887 ], [ 103.858346494670997, 1.29979551490855 ], [ 103.858356972229004, 1.29984880539945 ], [ 103.858361465485999, 1.29990294333967 ], [ 103.858360693904004, 1.29993009192398 ], [ 103.858569260774004, 1.29996925066239 ], [ 103.858569260774004, 1.29996925066238 ], [ 103.858575400373994, 1.29994173169572 ], [ 103.858583391224002, 1.29991469219637 ], [ 103.858593196566005, 1.29988825654842 ], [ 103.858604771293997, 1.29986254635821 ], [ 103.858618062163998, 1.29983767989492 ], [ 103.858633008035994, 1.2998137715465 ], [ 103.858649540157003, 1.29979093129347 ], [ 103.858667582479995, 1.29976926420305 ], [ 103.858687052006999, 1.29974886994577 ], [ 103.858707859177002, 1.29972984233705 ], [ 103.858729908274995, 1.29971226890558 ], [ 103.858753097873006, 1.2996962304907 ], [ 103.858777321296998, 1.29968180087057 ], [ 103.858802467117002, 1.29966904642272 ], [ 103.85882841966, 1.29965802581874 ], [ 103.858855059543004, 1.29964878975441 ], [ 103.858882264217996, 1.29964138071643 ], [ 103.858909908542998, 1.29963583278704 ], [ 103.858909908542998, 1.29963583278705 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "DUO RESIDENCES", "HT_BLDG": 105, "AREA": 0, "ID": 4 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.857815976161007, 1.29889790288095 ], [ 103.857825551869993, 1.29892261166211 ], [ 103.857836758557994, 1.29894662474592 ], [ 103.857849546051, 1.29896983461692 ], [ 103.857863857091999, 1.29899213735592 ], [ 103.857879627605996, 1.29901343310531 ], [ 103.857896786983005, 1.29903362651614 ], [ 103.857915258394002, 1.29905262717504 ], [ 103.857934959136003, 1.29907035000902 ], [ 103.857955801000998, 1.29908671566639 ], [ 103.857977690672001, 1.29910165087205 ], [ 103.858000530140998, 1.29911508875556 ], [ 103.858000530140998, 1.29911508875555 ], [ 103.857937986634994, 1.29943518658031 ], [ 103.857969288711004, 1.29944064546842 ], [ 103.858000227681998, 1.29944788421788 ], [ 103.85803070243, 1.29945687917019 ], [ 103.858060613353999, 1.29946760092703 ], [ 103.858089862694996, 1.29948001444636 ], [ 103.858089862694996, 1.29948001444636 ], [ 103.858127919297999, 1.29950111357648 ], [ 103.858231264685003, 1.2993326795629 ], [ 103.858220330009004, 1.29930798179649 ], [ 103.858211120858002, 1.29928259009832 ], [ 103.858203680895002, 1.29925662485722 ], [ 103.858198045394005, 1.29923020918137 ], [ 103.858194241074997, 1.29920346831455 ], [ 103.858192285976003, 1.29917652904238 ], [ 103.858192189365994, 1.29914951909117 ], [ 103.858193951703001, 1.29912256652233 ], [ 103.858197564630998, 1.29909579912521 ], [ 103.858203011019995, 1.29906934381121 ], [ 103.858210265048001, 1.29904332601205 ], [ 103.858219292322005, 1.29901786908511 ], [ 103.858230050040007, 1.29899309372848 ], [ 103.858242487197998, 1.29896911740876 ], [ 103.858242487197998, 1.29896911740876 ], [ 103.858108125624, 1.29883500054478 ], [ 103.858058038470006, 1.29878499599953 ], [ 103.858027835068, 1.29881308134328 ], [ 103.857995052812001, 1.29883807559337 ], [ 103.857959602744003, 1.29885967759709 ], [ 103.857937682857994, 1.2988707526624 ], [ 103.857937682857994, 1.2988707526624 ], [ 103.857914176601, 1.29887941400353 ], [ 103.857890144806007, 1.29888648760423 ], [ 103.857865694587005, 1.29889194193675 ], [ 103.857840934920006, 1.29889575269063 ], [ 103.857815976161007, 1.29889790288095 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "DUO RESIDENCES", "HT_BLDG": 105, "AREA": 0, "ID": 5 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.858596564739003, 1.3002116440702 ], [ 103.858586444045002, 1.30018607134814 ], [ 103.85857803639, 1.30015988539965 ], [ 103.858571378571995, 1.30013320083436 ], [ 103.858566499730998, 1.30010613444422 ], [ 103.858563421221007, 1.30007880469236 ], [ 103.858562156515006, 1.30005133119456 ], [ 103.858562711149006, 1.30002383419576 ], [ 103.858565082694994, 1.29999643404373 ], [ 103.858569260774004, 1.29996925066238 ], [ 103.858569260774004, 1.29996925066239 ], [ 103.858360693904004, 1.29993009192398 ], [ 103.858359922321, 1.29995724050831 ], [ 103.858351762292997, 1.30001381674194 ], [ 103.85833703838, 1.30006903197204 ], [ 103.858315961732998, 1.30012212833883 ], [ 103.858288829762003, 1.30017234617276 ], [ 103.858414878982003, 1.30029817170822 ], [ 103.858414878982003, 1.30029817170822 ], [ 103.858420993303, 1.3002911691868 ], [ 103.858427579587996, 1.30028460861684 ], [ 103.858434605975006, 1.3002785217361 ], [ 103.858442038473001, 1.30027293799079 ], [ 103.858449841124994, 1.30026788439313 ], [ 103.858457976184994, 1.30026338539067 ], [ 103.858466404298994, 1.30025946274801 ], [ 103.858475084694007, 1.30025613544155 ], [ 103.858483975377993, 1.30025341956762 ], [ 103.858493033341006, 1.3002513282647 ], [ 103.858502214761998, 1.30024987164977 ], [ 103.858511475227004, 1.30024905676942 ], [ 103.858520769934998, 1.30024888756578 ], [ 103.858530053921996, 1.30024936485738 ], [ 103.858539282275999, 1.30025048633525 ], [ 103.858548410352995, 1.30025224657408 ], [ 103.858557393995, 1.30025463705844 ], [ 103.858596564739003, 1.3002116440702 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "DUO RESIDENCES", "HT_BLDG": 16, "AREA": 101, "ID": 6 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856259031848182, 1.298273481758983 ], [ 103.856226950549953, 1.298310010247823 ], [ 103.856348431170332, 1.298422719211273 ], [ 103.856381845013814, 1.298386668213293 ], [ 103.856259031848182, 1.298273481758983 ], [ 103.856259031848182, 1.298273481758983 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "CHAN BROTHERS BUILDING", "HT_BLDG": 30, "AREA": 176, "ID": 7 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855257185508236, 1.297756731256028 ], [ 103.855258992711256, 1.297783526663504 ], [ 103.855294181016419, 1.297831888165765 ], [ 103.855435999045994, 1.29771719900236 ], [ 103.855438859091748, 1.297714867524865 ], [ 103.855416149904016, 1.297682384751332 ], [ 103.855376347052882, 1.297677544940536 ], [ 103.855368081260934, 1.297667777873682 ], [ 103.855275963154298, 1.297741681558325 ], [ 103.855257185508236, 1.297756731256028 ], [ 103.855257185508236, 1.297756731256028 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 16, "AREA": 96, "ID": 8 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856890644094406, 1.298206426314723 ], [ 103.856891503992628, 1.298205489384783 ], [ 103.856917688205556, 1.298176715870633 ], [ 103.856908702687065, 1.298168555871914 ], [ 103.856774832843413, 1.298046820586666 ], [ 103.856747367311414, 1.298076177426579 ], [ 103.856881325212981, 1.298197947982648 ], [ 103.856890644094406, 1.298206426314723 ], [ 103.856890644094406, 1.298206426314723 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HERITAGE PLACE", "HT_BLDG": 26, "AREA": 1046, "ID": 9 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856213195099201, 1.298650383417675 ], [ 103.856210773897473, 1.298692156951415 ], [ 103.856248523117287, 1.298744087039361 ], [ 103.856327515723819, 1.298817248520381 ], [ 103.856621522864728, 1.298498598322355 ], [ 103.856478298151373, 1.298363651243922 ], [ 103.856213195099201, 1.298650383417675 ], [ 103.856213195099201, 1.298650383417675 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "TANQUEELAN SUITES", "HT_BLDG": 24, "AREA": 820, "ID": 10 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856469067326302, 1.298354978471076 ], [ 103.856621522864728, 1.298498598322355 ], [ 103.856620820182641, 1.298496372687255 ], [ 103.856621645053508, 1.298497149528913 ], [ 103.856647548047022, 1.298470442493562 ], [ 103.856674978538067, 1.298440750135755 ], [ 103.856728644466259, 1.29838267223742 ], [ 103.856755337257979, 1.298353792909519 ], [ 103.856835942171102, 1.298266570699577 ], [ 103.856825026560728, 1.298256396698347 ], [ 103.85668208311202, 1.298123304480656 ], [ 103.856469067326302, 1.298354978471076 ], [ 103.856469067326302, 1.298354978471076 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HEAP SENG HOUSE", "HT_BLDG": 20, "AREA": 69, "ID": 11 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856100085465386, 1.298454215071917 ], [ 103.856065846779089, 1.298493162753964 ], [ 103.8560783771225, 1.298509007110808 ], [ 103.856124164813934, 1.298571941438171 ], [ 103.856168583068609, 1.298528365124102 ], [ 103.856162720907918, 1.298522023771811 ], [ 103.856100085465386, 1.298454215071917 ], [ 103.856100085465386, 1.298454215071917 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 14, "AREA": 61, "ID": 12 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856355922676499, 1.298162484570774 ], [ 103.856326492061527, 1.298196222166974 ], [ 103.856407483925949, 1.298270689530457 ], [ 103.856437072684457, 1.298236952836242 ], [ 103.856355922676499, 1.298162484570774 ], [ 103.856355922676499, 1.298162484570774 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 16, "AREA": 121, "ID": 13 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856226950549953, 1.298310010247823 ], [ 103.856192360541925, 1.298349541250017 ], [ 103.856251591370778, 1.298414153049376 ], [ 103.856286410308215, 1.298452146903006 ], [ 103.856303679603059, 1.29847099370635 ], [ 103.856348431170332, 1.298422719211273 ], [ 103.856226950549953, 1.298310010247823 ], [ 103.856226950549953, 1.298310010247823 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 20, "AREA": 113, "ID": 14 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856646418987296, 1.297828520793575 ], [ 103.856613935158862, 1.297865754695515 ], [ 103.856749472697658, 1.297989044577262 ], [ 103.856783062642663, 1.297952798229599 ], [ 103.856646418987296, 1.297828520793575 ], [ 103.856646418987296, 1.297828520793575 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 15, "AREA": 72, "ID": 15 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856326492061527, 1.298196222166974 ], [ 103.856291305430005, 1.298236511937997 ], [ 103.85637264862028, 1.298310397792831 ], [ 103.856407483925949, 1.298270689530457 ], [ 103.856326492061527, 1.298196222166974 ], [ 103.856326492061527, 1.298196222166974 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 27, "AREA": 704, "ID": 16 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856889252129363, 1.297610781865346 ], [ 103.856795257131139, 1.297697703952964 ], [ 103.856794257412176, 1.29773684577273 ], [ 103.856895554885611, 1.297844750913104 ], [ 103.856929075387939, 1.297878399297548 ], [ 103.856975774922233, 1.297921020664531 ], [ 103.856977196405225, 1.297919519405696 ], [ 103.857116925841581, 1.297772293838159 ], [ 103.856966664423851, 1.297613501467913 ], [ 103.856889252129363, 1.297610781865346 ], [ 103.856889252129363, 1.297610781865346 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 14, "AREA": 109, "ID": 17 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856517552924089, 1.297976204748169 ], [ 103.856485034048987, 1.298013474823369 ], [ 103.856615973704166, 1.298133001692821 ], [ 103.856649264440961, 1.298097109860657 ], [ 103.856517552924089, 1.297976204748169 ], [ 103.856517552924089, 1.297976204748169 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 14, "AREA": 102, "ID": 18 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856291305430005, 1.298236511937997 ], [ 103.856259031848182, 1.298273481758983 ], [ 103.856381845013814, 1.298386668213293 ], [ 103.856415523028872, 1.298350669665582 ], [ 103.856291305430005, 1.298236511937997 ], [ 103.856291305430005, 1.298236511937997 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 19, "AREA": 98, "ID": 19 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855955228141895, 1.298219893666659 ], [ 103.855937275415528, 1.298241178956851 ], [ 103.8559372406487, 1.298272301765489 ], [ 103.856033870165561, 1.29837969420759 ], [ 103.856067090811464, 1.298342018072015 ], [ 103.855955228141895, 1.298219893666659 ], [ 103.855955228141895, 1.298219893666659 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 20, "AREA": 111, "ID": 20 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856677832659699, 1.297792486993176 ], [ 103.856646418987296, 1.297828520793575 ], [ 103.856783062642663, 1.297952798229599 ], [ 103.856816406388035, 1.297916817767014 ], [ 103.856677832659699, 1.297792486993176 ], [ 103.856677832659699, 1.297792486993176 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "MARRISON HOTEL", "HT_BLDG": 28, "AREA": 320, "ID": 21 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856977196405225, 1.297919519405696 ], [ 103.8570576805933, 1.29799306882276 ], [ 103.85708926981232, 1.297992874085922 ], [ 103.857185546089624, 1.297892598116121 ], [ 103.857185563497382, 1.297832489513567 ], [ 103.857116925841581, 1.297772293838159 ], [ 103.856977196405225, 1.297919519405696 ], [ 103.856977196405225, 1.297919519405696 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HEAP SENG HOUSE", "HT_BLDG": 20, "AREA": 50, "ID": 22 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856159999791132, 1.298385698046655 ], [ 103.85613032297158, 1.298419630081237 ], [ 103.856190045304828, 1.298484295235062 ], [ 103.856222863466016, 1.298453754538954 ], [ 103.856217510784958, 1.298447961227173 ], [ 103.856159999791132, 1.298385698046655 ], [ 103.856159999791132, 1.298385698046655 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HEAP SENG HOUSE", "HT_BLDG": 20, "AREA": 53, "ID": 23 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856159999791132, 1.298385698046655 ], [ 103.856217510784958, 1.298447961227173 ], [ 103.856252152956401, 1.298413641173803 ], [ 103.856192711861496, 1.298348286892931 ], [ 103.856159999791132, 1.298385698046655 ], [ 103.856159999791132, 1.298385698046655 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HEAP SENG HOUSE", "HT_BLDG": 20, "AREA": 53, "ID": 24 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.85613032297158, 1.298419630081237 ], [ 103.856115932930649, 1.298436092363175 ], [ 103.856100085465386, 1.298454215071917 ], [ 103.856162720907918, 1.298522023771811 ], [ 103.856195924538, 1.298490653770072 ], [ 103.856190045304828, 1.298484295235062 ], [ 103.85613032297158, 1.298419630081237 ], [ 103.85613032297158, 1.298419630081237 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BUGIS JUNCTION", "HT_BLDG": 73, "AREA": 78, "ID": 25 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856134042154494, 1.300135467695547 ], [ 103.856177178974065, 1.300176658403488 ], [ 103.856249114900194, 1.300100316703217 ], [ 103.856205960109904, 1.300059125996649 ], [ 103.856134042154494, 1.300135467695547 ], [ 103.856134042154494, 1.300135467695547 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "PLUSH PODS", "HT_BLDG": 22, "AREA": 103, "ID": 26 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.85687202179804, 1.297918618741309 ], [ 103.856844942646617, 1.297948417813002 ], [ 103.857000223172719, 1.298088645343256 ], [ 103.857027109148248, 1.298060083442717 ], [ 103.857018036470038, 1.298051817634522 ], [ 103.85687202179804, 1.297918618741309 ], [ 103.85687202179804, 1.297918618741309 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 10, "AREA": 103, "ID": 27 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856736118341814, 1.298065950974865 ], [ 103.856709162276928, 1.298094565326169 ], [ 103.856719586376755, 1.298104121651398 ], [ 103.856779888191681, 1.298159389531818 ], [ 103.856853632346144, 1.298227004576719 ], [ 103.856863617953664, 1.298236153941277 ], [ 103.856891503992628, 1.298205489384783 ], [ 103.856881325212981, 1.298197947982648 ], [ 103.856747367311414, 1.298076177426579 ], [ 103.856736118341814, 1.298065950974865 ], [ 103.856736118341814, 1.298065950974865 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 22, "AREA": 104, "ID": 28 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856844942646617, 1.297948417813002 ], [ 103.856818372964085, 1.297977667930254 ], [ 103.856961965144862, 1.298109082537661 ], [ 103.856972056783789, 1.298118585507419 ], [ 103.857000223172719, 1.298088645343256 ], [ 103.856844942646617, 1.297948417813002 ], [ 103.856844942646617, 1.297948417813002 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 22, "AREA": 104, "ID": 29 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856818372964085, 1.297977667930254 ], [ 103.8567914869963, 1.298007237290917 ], [ 103.856935763881737, 1.29814011696429 ], [ 103.856944082675625, 1.298147765098731 ], [ 103.856972038812899, 1.298118585507588 ], [ 103.856961965144862, 1.298109082537661 ], [ 103.856818372964085, 1.297977667930254 ], [ 103.856818372964085, 1.297977667930254 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 16, "AREA": 103, "ID": 30 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.8567914869963, 1.298007237290917 ], [ 103.856763706076848, 1.29803669994463 ], [ 103.856908702687065, 1.298168555871914 ], [ 103.856917688205556, 1.298176715870633 ], [ 103.856944082675625, 1.298147765098731 ], [ 103.856935763881737, 1.29814011696429 ], [ 103.8567914869963, 1.298007237290917 ], [ 103.8567914869963, 1.298007237290917 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 17, "AREA": 68, "ID": 31 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855865095416902, 1.298451709387095 ], [ 103.855890647603843, 1.298483290478992 ], [ 103.855993014450675, 1.298402055899056 ], [ 103.855974358675397, 1.298379924453252 ], [ 103.855965917815396, 1.298387324945997 ], [ 103.855954106328255, 1.298373671857856 ], [ 103.855865095416902, 1.298451709387095 ], [ 103.855865095416902, 1.298451709387095 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 24, "AREA": 57, "ID": 32 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856779888191681, 1.298159389531818 ], [ 103.856752685934765, 1.298189046618416 ], [ 103.856825026560728, 1.298256396698347 ], [ 103.856835942171102, 1.298266570699577 ], [ 103.856863617953664, 1.298236153941277 ], [ 103.856853632346144, 1.298227004576719 ], [ 103.856779888191681, 1.298159389531818 ], [ 103.856779888191681, 1.298159389531818 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 24, "AREA": 40, "ID": 33 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856719586376755, 1.298104121651398 ], [ 103.856693016692276, 1.298133495665307 ], [ 103.856752685934765, 1.298189046618416 ], [ 103.856779888191681, 1.298159389531818 ], [ 103.856719586376755, 1.298104121651398 ], [ 103.856719586376755, 1.298104121651398 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 17, "AREA": 144, "ID": 34 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855853654408207, 1.298672519185291 ], [ 103.855883489141405, 1.298713250601228 ], [ 103.85591323612465, 1.298687267030597 ], [ 103.856062600003469, 1.298556291964142 ], [ 103.856033748302451, 1.298518421951468 ], [ 103.855853654408207, 1.298672519185291 ], [ 103.855853654408207, 1.298672519185291 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "GATEWAY WEST", "HT_BLDG": 148, "AREA": 1409, "ID": 35 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.858865669258208, 1.298170514594568 ], [ 103.858527910851009, 1.298522919998228 ], [ 103.85884196299115, 1.298531766037628 ], [ 103.859179738427727, 1.298179378679737 ], [ 103.858865669258208, 1.298170514594568 ], [ 103.858865669258208, 1.298170514594568 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "GATEWAY EAST", "HT_BLDG": 146, "AREA": 1368, "ID": 36 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.859184781530033, 1.298844969357679 ], [ 103.859187575746176, 1.299173279043504 ], [ 103.859518243931944, 1.29884047934969 ], [ 103.859509816643239, 1.298506694698923 ], [ 103.859184781530033, 1.298844969357679 ], [ 103.859184781530033, 1.298844969357679 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BUGIS JUNCTION TOWERS", "HT_BLDG": 73, "AREA": 6772, "ID": 37 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856017855014642, 1.299242408574184 ], [ 103.855810541508816, 1.2994027760115 ], [ 103.855872808690563, 1.299484839318099 ], [ 103.855570885469362, 1.299735891853247 ], [ 103.85544275655387, 1.299837634018143 ], [ 103.855654863816412, 1.300082181408206 ], [ 103.855642315735537, 1.300093539436485 ], [ 103.855671764952149, 1.300128070533054 ], [ 103.855684926739286, 1.300116713403526 ], [ 103.855855511855751, 1.300313305396348 ], [ 103.855964407449065, 1.300315511970631 ], [ 103.856375067340409, 1.299879646938275 ], [ 103.856398301529595, 1.299738198654802 ], [ 103.856017855014642, 1.299242408574184 ], [ 103.856017855014642, 1.299242408574184 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "INTERCONTINENTAL SINGAPORE", "HT_BLDG": 69, "AREA": 8248, "ID": 38 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.854333690804154, 1.298437856935068 ], [ 103.854324987525544, 1.298549507167058 ], [ 103.854755626315026, 1.299045773686873 ], [ 103.855422860636637, 1.298453902781615 ], [ 103.855467014788616, 1.298417127304937 ], [ 103.855468120652191, 1.298389007882146 ], [ 103.855396376496444, 1.298299207806916 ], [ 103.855340534162607, 1.298345486449541 ], [ 103.855041711792381, 1.29795205511246 ], [ 103.854930358693082, 1.297939373260554 ], [ 103.854333690804154, 1.298437856935068 ], [ 103.854333690804154, 1.298437856935068 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 26, "AREA": 105, "ID": 39 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.85614963071049, 1.298699877165008 ], [ 103.856122516491325, 1.298728809847919 ], [ 103.85615071934572, 1.298755392489029 ], [ 103.85617841272169, 1.298781499438587 ], [ 103.856206352301641, 1.298807852372777 ], [ 103.856228604940924, 1.298828324274614 ], [ 103.85627586697909, 1.298871916936784 ], [ 103.856303507736939, 1.29884208350014 ], [ 103.85614963071049, 1.298699877165008 ], [ 103.85614963071049, 1.298699877165008 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 15, "AREA": 146, "ID": 40 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855731752795663, 1.29850496500184 ], [ 103.85575930611499, 1.298545060671286 ], [ 103.855938540066731, 1.298387308009567 ], [ 103.85590809073193, 1.298346541329434 ], [ 103.855731752795663, 1.29850496500184 ], [ 103.855731752795663, 1.29850496500184 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 26, "AREA": 32, "ID": 41 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856228604940924, 1.298828324274614 ], [ 103.856200350467049, 1.298857115887844 ], [ 103.856248998961746, 1.298900955429459 ], [ 103.85627586697909, 1.298871916936784 ], [ 103.856228604940924, 1.298828324274614 ], [ 103.856228604940924, 1.298828324274614 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 26, "AREA": 39, "ID": 42 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856200350467049, 1.298857115887844 ], [ 103.856148702599071, 1.298909753098465 ], [ 103.856163549376333, 1.298923742581679 ], [ 103.856189487409537, 1.298895622028565 ], [ 103.856224534526973, 1.29892738028586 ], [ 103.856248998961746, 1.298900955429459 ], [ 103.856200350467049, 1.298857115887844 ], [ 103.856200350467049, 1.298857115887844 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH GARDEN HOTEL", "HT_BLDG": 22, "AREA": 182, "ID": 43 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856467653755502, 1.297348431376311 ], [ 103.856507351924733, 1.297402852063763 ], [ 103.856596538891935, 1.297324531444333 ], [ 103.856610964000495, 1.297311760776251 ], [ 103.85667268627617, 1.297256315410174 ], [ 103.856632408564664, 1.29720404983185 ], [ 103.856619386970024, 1.297215460322495 ], [ 103.856467653755502, 1.297348431376311 ], [ 103.856467653755502, 1.297348431376311 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HEAP SENG HOUSE", "HT_BLDG": 20, "AREA": 32, "ID": 44 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856252152956401, 1.298413641173803 ], [ 103.856217510784958, 1.298447961227173 ], [ 103.856222863466016, 1.298453754538954 ], [ 103.856254224768279, 1.298487703201016 ], [ 103.856286971893681, 1.298451616940128 ], [ 103.856252152956401, 1.298413641173803 ], [ 103.856252152956401, 1.298413641173803 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BACKPACKER COZY CORNER GUESTHOUSE", "HT_BLDG": 16, "AREA": 138, "ID": 45 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855674557982297, 1.298429313591517 ], [ 103.855703743037452, 1.298467236963017 ], [ 103.855879975861697, 1.298310896045494 ], [ 103.855850720728569, 1.298274015409203 ], [ 103.855674557982297, 1.298429313591517 ], [ 103.855674557982297, 1.298429313591517 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 14, "AREA": 107, "ID": 46 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856355922676499, 1.298162484570774 ], [ 103.856437072684457, 1.298236952836242 ], [ 103.856482298594401, 1.298278443769929 ], [ 103.856515853492823, 1.298240996429731 ], [ 103.856388511633824, 1.298124330932209 ], [ 103.856355922676499, 1.298162484570774 ], [ 103.856355922676499, 1.298162484570774 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BACKPACKER COZY CORNER GUESTHOUSE", "HT_BLDG": 16, "AREA": 135, "ID": 48 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855703743037452, 1.298467236963017 ], [ 103.855731752795663, 1.29850496500184 ], [ 103.85590809073193, 1.298346541329434 ], [ 103.855879975861697, 1.298310896045494 ], [ 103.855703743037452, 1.298467236963017 ], [ 103.855703743037452, 1.298467236963017 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HEAP SENG HOUSE", "HT_BLDG": 20, "AREA": 27, "ID": 49 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856222863466016, 1.298453754538954 ], [ 103.856190045304828, 1.298484295235062 ], [ 103.856195924538, 1.298490653770072 ], [ 103.856223969280663, 1.298521016656495 ], [ 103.856254224768279, 1.298487703201016 ], [ 103.856222863466016, 1.298453754538954 ], [ 103.856222863466016, 1.298453754538954 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BULKHAUL HOUSE", "HT_BLDG": 26, "AREA": 462, "ID": 50 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856286378810779, 1.296851827361476 ], [ 103.856189979171404, 1.296922658086739 ], [ 103.8561849073335, 1.296971956864214 ], [ 103.856274797874633, 1.297095299641179 ], [ 103.856445572956531, 1.296954644036623 ], [ 103.856411508758796, 1.29691050411466 ], [ 103.856382937395537, 1.296870214022613 ], [ 103.856286378810779, 1.296851827361476 ], [ 103.856286378810779, 1.296851827361476 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 15, "AREA": 106, "ID": 51 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856420521938901, 1.298087414469532 ], [ 103.856388511633824, 1.298124330932209 ], [ 103.856515853492823, 1.298240996429731 ], [ 103.856549741761839, 1.298204821527197 ], [ 103.856420521938901, 1.298087414469532 ], [ 103.856420521938901, 1.298087414469532 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 30, "AREA": 461, "ID": 52 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855294181016419, 1.297831888165765 ], [ 103.855317627006258, 1.297863912421013 ], [ 103.855319522956933, 1.297866508835614 ], [ 103.855416714242907, 1.29799930128597 ], [ 103.855552828336286, 1.297886766363 ], [ 103.85555482939283, 1.297886607177113 ], [ 103.855435999045994, 1.29771719900236 ], [ 103.855294181016419, 1.297831888165765 ], [ 103.855294181016419, 1.297831888165765 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HEAP SENG HOUSE", "HT_BLDG": 20, "AREA": 24, "ID": 53 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856162720907918, 1.298522023771811 ], [ 103.856168583068609, 1.298528365124102 ], [ 103.856193152207695, 1.29855496588512 ], [ 103.856223969280663, 1.298521016656495 ], [ 103.856195924538, 1.298490653770072 ], [ 103.856162720907918, 1.298522023771811 ], [ 103.856162720907918, 1.298522023771811 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 17, "AREA": 131, "ID": 54 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.85575930611499, 1.298545060671286 ], [ 103.855778909894724, 1.298571803466024 ], [ 103.855796494426244, 1.298573710614074 ], [ 103.855815886831081, 1.298575830271543 ], [ 103.856002508565155, 1.298412672151131 ], [ 103.855993014450675, 1.298402055899056 ], [ 103.855890647603843, 1.298483290478992 ], [ 103.855865095416902, 1.298451709387095 ], [ 103.85575930611499, 1.298545060671286 ], [ 103.85575930611499, 1.298545060671286 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "CREATIVE HOUSE", "HT_BLDG": 24, "AREA": 224, "ID": 55 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856619443029544, 1.297548555945398 ], [ 103.856660141241392, 1.297598243175904 ], [ 103.856697294235616, 1.297597500347417 ], [ 103.856802872294253, 1.297502894672421 ], [ 103.856810172392855, 1.297440860608983 ], [ 103.856778810159227, 1.297402708466133 ], [ 103.856619443029544, 1.297548555945398 ], [ 103.856619443029544, 1.297548555945398 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "HEAP SENG HOUSE", "HT_BLDG": 20, "AREA": 27, "ID": 56 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856124164813934, 1.298571941438171 ], [ 103.856133658951592, 1.298585012135613 ], [ 103.856163230973863, 1.29858792663458 ], [ 103.856193152207695, 1.29855496588512 ], [ 103.856168583068609, 1.298528365124102 ], [ 103.856124164813934, 1.298571941438171 ], [ 103.856124164813934, 1.298571941438171 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 19, "AREA": 100, "ID": 57 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.85598648367575, 1.298182800865055 ], [ 103.855955228141895, 1.298219893666659 ], [ 103.856067090811464, 1.298342018072015 ], [ 103.856099768741444, 1.298304994892255 ], [ 103.85598648367575, 1.298182800865055 ], [ 103.85598648367575, 1.298182800865055 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "LIANG SEAH PLACE", "HT_BLDG": 21, "AREA": 1562, "ID": 58 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856020600315389, 1.298161604056373 ], [ 103.85612609221053, 1.298273059725789 ], [ 103.856647751925735, 1.297675661434784 ], [ 103.856563442326788, 1.297565884092016 ], [ 103.856528219395329, 1.297565496444778 ], [ 103.856020600315389, 1.298161604056373 ], [ 103.856020600315389, 1.298161604056373 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 14, "AREA": 107, "ID": 59 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856485034048987, 1.298013474823369 ], [ 103.856452778443696, 1.298050444646642 ], [ 103.856582541896444, 1.298169053598413 ], [ 103.856615973704166, 1.298133001692821 ], [ 103.856485034048987, 1.298013474823369 ], [ 103.856485034048987, 1.298013474823369 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 13, "AREA": 109, "ID": 60 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856549352970433, 1.297939764886017 ], [ 103.856517552924089, 1.297976204748169 ], [ 103.856649264440961, 1.298097109860657 ], [ 103.85668278430316, 1.298060952142708 ], [ 103.856549352970433, 1.297939764886017 ], [ 103.856549352970433, 1.297939764886017 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 13, "AREA": 108, "ID": 61 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856714107404272, 1.297750924765511 ], [ 103.856677745511121, 1.297793599362616 ], [ 103.856816318342112, 1.297918054034443 ], [ 103.856829287800011, 1.297904065199402 ], [ 103.856828409635114, 1.297872942399409 ], [ 103.856714107404272, 1.297750924765511 ], [ 103.856714107404272, 1.297750924765511 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BUGIS CUBE", "HT_BLDG": 28, "AREA": 1088, "ID": 62 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855552828336286, 1.297886766363 ], [ 103.855416714242907, 1.29799930128597 ], [ 103.855715693924083, 1.298393050007838 ], [ 103.855849386400862, 1.29827521641754 ], [ 103.85585493213631, 1.298266155537452 ], [ 103.855744385798403, 1.298138450275761 ], [ 103.855552828336286, 1.297886766363 ], [ 103.855552828336286, 1.297886766363 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 26, "AREA": 82, "ID": 63 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856094123118282, 1.29900041977624 ], [ 103.856120167751556, 1.299035958361128 ], [ 103.856224569580078, 1.298928475471247 ], [ 103.856189224147883, 1.29889694692531 ], [ 103.856163619472468, 1.298924819679451 ], [ 103.856094123118282, 1.29900041977624 ], [ 103.856094123118282, 1.29900041977624 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 13, "AREA": 106, "ID": 64 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856452778443696, 1.298050444646642 ], [ 103.856420521938901, 1.298087414469532 ], [ 103.856549741761839, 1.298204821527197 ], [ 103.856582541896444, 1.298169053598413 ], [ 103.856452778443696, 1.298050444646642 ], [ 103.856452778443696, 1.298050444646642 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 19, "AREA": 82, "ID": 65 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856012159307824, 1.298152348863762 ], [ 103.85598648367575, 1.298182800865055 ], [ 103.856099768741444, 1.298304994892255 ], [ 103.8561262333005, 1.298275126197941 ], [ 103.856012159307824, 1.298152348863762 ], [ 103.856012159307824, 1.298152348863762 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 20, "AREA": 110, "ID": 66 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856581854771477, 1.297902512897436 ], [ 103.856549352970433, 1.297939764886017 ], [ 103.85668278430316, 1.298060952142708 ], [ 103.856716163992814, 1.298024936410884 ], [ 103.856581854771477, 1.297902512897436 ], [ 103.856581854771477, 1.297902512897436 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "WISMA ALSAGOFF", "HT_BLDG": 33, "AREA": 416, "ID": 67 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.855913762677204, 1.29868788561134 ], [ 103.856027328303, 1.298831911907632 ], [ 103.856158264739491, 1.298690409292095 ], [ 103.856062494884796, 1.2985575282317 ], [ 103.855913762677204, 1.29868788561134 ], [ 103.855913762677204, 1.29868788561134 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "CHYE SING BUILDING", "HT_BLDG": 24, "AREA": 493, "ID": 68 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856610964000495, 1.297311760776251 ], [ 103.856625267192513, 1.297330218728272 ], [ 103.856611297642019, 1.297342583332462 ], [ 103.856596538891935, 1.297324531444333 ], [ 103.856507351924733, 1.297402852063763 ], [ 103.856619337898763, 1.297548432952773 ], [ 103.856619443029544, 1.297548555945398 ], [ 103.856778810159227, 1.297402708466133 ], [ 103.856783812311662, 1.297398133238242 ], [ 103.85667268627617, 1.297256315410174 ], [ 103.856610964000495, 1.297311760776251 ], [ 103.856610964000495, 1.297311760776251 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BUGIS POINT", "HT_BLDG": 26, "AREA": 260, "ID": 69 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856134364943912, 1.298956649062208 ], [ 103.856163619472468, 1.298924819679451 ], [ 103.856148439337403, 1.298911077995206 ], [ 103.856200877019063, 1.298857663023731 ], [ 103.85622728949366, 1.29883076154958 ], [ 103.856205860802561, 1.298808382335 ], [ 103.85617841272169, 1.298781499438587 ], [ 103.85615071934572, 1.298755392489029 ], [ 103.856122516491325, 1.298728809847919 ], [ 103.856035909310748, 1.298821543288347 ], [ 103.856102915477535, 1.298911254759503 ], [ 103.856134364943912, 1.298956649062208 ], [ 103.856134364943912, 1.298956649062208 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 20, "AREA": 111, "ID": 70 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856613935158862, 1.297865754695515 ], [ 103.856581854771477, 1.297902512897436 ], [ 103.856716163992814, 1.298024936410884 ], [ 103.856749472697658, 1.297989044577262 ], [ 103.856613935158862, 1.297865754695515 ], [ 103.856613935158862, 1.297865754695515 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "FU YUEN BUILDING", "HT_BLDG": 24, "AREA": 367, "ID": 71 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856274797874633, 1.297095299641179 ], [ 103.856355404551508, 1.297205712796863 ], [ 103.856511613412934, 1.297072970512752 ], [ 103.856522616896697, 1.29706364460201 ], [ 103.856494168635109, 1.297023866380657 ], [ 103.856466615341446, 1.296985996360339 ], [ 103.856445572956531, 1.296954644036623 ], [ 103.856274797874633, 1.297095299641179 ], [ 103.856274797874633, 1.297095299641179 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": null, "HT_BLDG": 13, "AREA": 424, "ID": 72 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856398870903448, 1.300595807721016 ], [ 103.856448537589216, 1.300650882171103 ], [ 103.856464858627945, 1.300635973568138 ], [ 103.856554977331797, 1.300735930359453 ], [ 103.856633195036096, 1.300664481203414 ], [ 103.85663991712093, 1.300671934915004 ], [ 103.856669434980915, 1.300644980049959 ], [ 103.856570558966212, 1.300535309562348 ], [ 103.856588740874926, 1.30051870616187 ], [ 103.856541110312662, 1.300465892607483 ], [ 103.856398870903448, 1.300595807721016 ], [ 103.856398870903448, 1.300595807721016 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "PARK VIEW HOTEL", "HT_BLDG": 27, "AREA": 486, "ID": 73 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.856356194360785, 1.297204511793247 ], [ 103.856467671719798, 1.297347706979984 ], [ 103.856632408564664, 1.29720404983185 ], [ 103.85652302034228, 1.297063574057841 ], [ 103.856356194360785, 1.297204511793247 ], [ 103.856356194360785, 1.297204511793247 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BUGIS JUNCTION", "HT_BLDG": 30, "AREA": 10367, "ID": 74 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.854755626315026, 1.299045773686873 ], [ 103.855053377292649, 1.29939063072777 ], [ 103.855011345479554, 1.299427282280977 ], [ 103.855056361203395, 1.299477516640124 ], [ 103.855098585311111, 1.299441553306086 ], [ 103.855207728106649, 1.299564471804124 ], [ 103.855349844537486, 1.299448068871654 ], [ 103.855570885469362, 1.299735891853247 ], [ 103.855872808690563, 1.299484839318099 ], [ 103.855810541508816, 1.2994027760115 ], [ 103.856017855014642, 1.299242408574184 ], [ 103.855933545337749, 1.299126819764279 ], [ 103.855975189762347, 1.299079234429678 ], [ 103.85590974618755, 1.298992119372336 ], [ 103.855865433961498, 1.299037143568901 ], [ 103.855731405495519, 1.298860776460584 ], [ 103.855764398017442, 1.29883394547297 ], [ 103.855727087319835, 1.298784752885814 ], [ 103.855694287089605, 1.298811919390537 ], [ 103.855422860636637, 1.298453902781615 ], [ 103.854755626315026, 1.299045773686873 ], [ 103.854755626315026, 1.299045773686873 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "BEACH ROAD CONSERVATION AREA", "HT_BLDG": 15, "AREA": 73, "ID": 75 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.85637264862028, 1.298310397792831 ], [ 103.856415523028872, 1.298350669665582 ], [ 103.856482281522062, 1.298278443770086 ], [ 103.856437072684457, 1.298236952836242 ], [ 103.85637264862028, 1.298310397792831 ], [ 103.85637264862028, 1.298310397792831 ] ] ] } },
{ "type": "Feature", "properties": { "NAME_BLDG": "PARKVIEW SQUARE", "HT_BLDG": 148, "AREA": 6086, "ID": 47 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 103.857611099550468, 1.299714621580324 ], [ 103.857149292591188, 1.300191960876126 ], [ 103.857147260422778, 1.300272099273305 ], [ 103.857518441621608, 1.300691372893215 ], [ 103.857591796148299, 1.300691883706291 ], [ 103.858086087138375, 1.300180527826919 ], [ 103.857611099550468, 1.299714621580324 ] ] ] } }
]
}
`, 'geojson' );

let footprints_ = __modules__.query.Get(__params__.model, 'pg', null);

for (let  footprint_ of footprints_){

let height_ = __modules__.attrib.Get(__params__.model, footprint_, 'HT_BLDG');

if (height_ > 0){

let block_ = __modules__.make.Extrude( __params__.model, footprint_, height_, 1, 'quads' );
}
}

__modules__.visualize.Color( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), [0.9, 0.8, 0.8] );

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), 'keep_selected' );

let coll_ = __modules__.collection.Create( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), "context" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


function exec_Bugis_Gen_node_fcvccrhvmmf(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.io.Export( __params__.model, null, "ea_bugis_model.gi", 'gi', 'Save to Local Storage' );

return null;
break; }
}

var merged;
let result_exec_Bugis_Gen_node_xln8tm81jua = __params__.model;

__params__.model = duplicateModel(result_exec_Bugis_Gen_node_xln8tm81jua);
let result_exec_Bugis_Gen_node_4v0a1eesd6a = exec_Bugis_Gen_node_4v0a1eesd6a(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_);

__params__.model = duplicateModel(result_exec_Bugis_Gen_node_4v0a1eesd6a);
let result_exec_Bugis_Gen_node_v3taz1645pc = exec_Bugis_Gen_node_v3taz1645pc(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_);

__params__.model = result_exec_Bugis_Gen_node_4v0a1eesd6a;
let result_exec_Bugis_Gen_node_cdu40tjeenk = exec_Bugis_Gen_node_cdu40tjeenk(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_);

__params__.model = mergeInputs([result_exec_Bugis_Gen_node_v3taz1645pc, result_exec_Bugis_Gen_node_cdu40tjeenk]);
let result_exec_Bugis_Gen_node_ouuaggi9a6p = exec_Bugis_Gen_node_ouuaggi9a6p(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_);

__params__.model = result_exec_Bugis_Gen_node_ouuaggi9a6p;
let result_exec_Bugis_Gen_node_uos84tnsry = exec_Bugis_Gen_node_uos84tnsry(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_);

__params__.model = result_exec_Bugis_Gen_node_uos84tnsry;
let result_exec_Bugis_Gen_node_aob2z9hawz = exec_Bugis_Gen_node_aob2z9hawz(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_);

__params__.model = result_exec_Bugis_Gen_node_xln8tm81jua;
let result_exec_Bugis_Gen_node_6b2992614v7 = exec_Bugis_Gen_node_6b2992614v7(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_);

__params__.model = mergeInputs([result_exec_Bugis_Gen_node_aob2z9hawz, result_exec_Bugis_Gen_node_6b2992614v7]);
let result_exec_Bugis_Gen_node_fcvccrhvmmf = exec_Bugis_Gen_node_fcvccrhvmmf(__params__, pod1_num_floors_, tow1_rotation_, pod2_num_floors_, tow2_rotation_, total_floors_, relative_height_1_, relative_height_2_);

return result_exec_Bugis_Gen_node_fcvccrhvmmf;
}


function pythonList(x, l){
    if (x < 0) {
        return x + l;
    }
    return x;
}

function mergeInputs(models){
    let result = __modules__._model.__new__();
    try {
        result.debug = __debug__;
    } catch (ex) {}
    for (let model of models){
        __modules__._model.__merge__(result, model);
    }
    return result;
}
function duplicateModel(model){
    const result = model.clone();
    try {
        result.debug = __debug__;
    } catch (ex) {}
    return result;
}

function printFunc(_console, name, value){
    let val;
    let padding_style = 'padding: 2px 0px 2px 10px;';
    if (!value) {
        val = value;
    } else if (value === '__null__') {
        _console.push('<p style="' + padding_style + '"><b><i>_ ' + name + '</i></b></p>');
        return value;
    } else if (typeof value === 'number' || value === undefined) {
        val = value;
    } else if (typeof value === 'string') {
        val = '"' + value.replace(/\n/g, '<br>') + '"';
    } else if (value.constructor === [].constructor) {
        let __list_check__ = false;
        let __value_strings__ = [];
        for (const __item__ of value) {
            if (!__item__) {
                __value_strings__.push('' + __item__);
                continue;
            }
            if (__item__.constructor === [].constructor || __item__.constructor === {}.constructor) {
                __list_check__ = true;
            }
            __value_strings__.push(JSON.stringify(__item__).replace(/,/g, ', '));
        }
        if (__list_check__) {
            padding_style = 'padding: 2px 0px 0px 10px;';
            val = '[<p style="padding: 0px 0px 2px 40px;">' +
                  __value_strings__.join(',</p><p style="padding: 0px 0px 2px 40px;">') +
                  '</p><p style="padding: 0px 0px 2px 30px;">]</p>';
        } else {
            val = '[' + __value_strings__.join(', ') + ']';
        }
    } else if (value.constructor === {}.constructor) {
        let __list_check__ = false;
        let __value_strings__ = [];
        for (const __item__ in value) {
            const __value__ = value[__item__];
            if (!__value__) {
                __value_strings__.push('\<b>"' + __item__ + '\"</b>' + ': ' + __value__);
                continue;
            }
            if (__value__.constructor === [].constructor || __value__.constructor === {}.constructor) {
                __list_check__ = true;
            }
            __value_strings__.push('\<b>"' + __item__ + '\"</b>' + ': ' + JSON.stringify(__value__).replace(/,/g, ', '));
        }
        if (__list_check__) {
            padding_style = 'padding: 2px 0px 0px 10px;';
            val = '{<p style="padding: 0px 0px 2px 40px;">' +
                  __value_strings__.join(',</p><p style="padding: 0px 0px 2px 40px;">') +
                  '</p><p style="padding: 0px 0px 2px 30px;">}</p>';
        } else {
            val = '{' + __value_strings__.join(', ') + '}';
        }
    } else {
        val = value;
    }
    _console.push('<p style="' + padding_style + '"><b><i>_ ' + name+'</i></b>  = ' + val + '</p>');
    return val;
}


const __params__ = {};
__params__["model"] = __modules__._model.__new__();
if (__model__) {
__params__["model"].setData(JSON.parse(__model__))
}
__params__["model"].debug = __debug__;
__params__["console"] = [];
__params__["modules"] = __modules__;
const result = exec_Bugis_Gen(__params__, pod1_num_floors, tow1_rotation, pod2_num_floors, tow2_rotation, total_floors, relative_height_1, relative_height_2);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

module.exports = Bugis_Gen;

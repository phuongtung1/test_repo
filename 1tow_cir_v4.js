/**
 * to use this code: import func1tow_cir from this js file as well as the GI module
 * run func1tow_cir with the GI module as input along with other start node input
 * e.g.:
 * const func1tow_cir = require('./func1tow_cir.js').func1tow_cir
 * const module = require('gi-module')
 * const result = await func1tow_cir(module, start_input_1, start_input_2, ...);
 *
 * returns: a json object:
 *   _ result.model -> gi model of the flowchart
 *   _ result.result -> returned output of the flowchart, if the flowchart does not return any value, result.result is the model of the flowchart
 */

// Parameter: {"name":"POS","value":"35","type":5}
// Parameter: {"name":"FLOORS_POD","value":"3","type":5}
// Parameter: {"name":"ROT","value":31,"type":1,"min":"0","max":"60","step":"1"}
// Parameter: {"name":"SIDES","value":3,"type":1,"min":"3","max":"9","step":"1"}


async function func1tow_cir(__modules__, POS, FLOORS_POD, ROT, SIDES) {

var __debug__ = true;
var __model__ = null;
/** * **/
var PI = __modules__._constants.PI;
var XY = __modules__._constants.XY;
var YZ = __modules__._constants.YZ;
var ZX = __modules__._constants.ZX;
var YX = __modules__._constants.YX;
var ZY = __modules__._constants.ZY;
var XZ = __modules__._constants.XZ;
var isNum = __modules__._types.isNum;
var isInt = __modules__._types.isInt;
var isFlt = __modules__._types.isFlt;
var isBool = __modules__._types.isBool;
var isStr = __modules__._types.isStr;
var isList = __modules__._types.isList;
var isDict = __modules__._types.isDict;
var isVec2 = __modules__._types.isVec2;
var isVec3 = __modules__._types.isVec3;
var isCol = __modules__._types.isCol;
var isRay = __modules__._types.isRay;
var isPln = __modules__._types.isPln;
var isNaN = __modules__._types.isNaN;
var isNull = __modules__._types.isNull;
var isUndef = __modules__._types.isUndef;
var strRepl = __modules__._strs.strRepl;
var strUpp = __modules__._strs.strUpp;
var strLow = __modules__._strs.strLow;
var strTrim = __modules__._strs.strTrim;
var strTrimR = __modules__._strs.strTrimR;
var strTrimL = __modules__._strs.strTrimL;
var strSub = __modules__._strs.strSub;
var strStarts = __modules__._strs.strStarts;
var strEnds = __modules__._strs.strEnds;
var strPadL = __modules__._strs.strPadL;
var strPadR = __modules__._strs.strPadR;
var isApprox = __modules__._util.isApprox;
var isIn = __modules__._util.isIn;
var isWithin = __modules__._util.isWithin;
var min = __modules__._math.min;
var max = __modules__._math.max;
var pow = __modules__._math.pow;
var sqrt = __modules__._math.sqrt;
var exp = __modules__._math.exp;
var log = __modules__._math.log;
var round = __modules__._math.round;
var sigFig = __modules__._math.sigFig;
var ceil = __modules__._math.ceil;
var floor = __modules__._math.floor;
var abs = __modules__._math.abs;
var sin = __modules__._math.sin;
var asin = __modules__._math.asin;
var sinh = __modules__._math.sinh;
var asinh = __modules__._math.asinh;
var cos = __modules__._math.cos;
var acos = __modules__._math.acos;
var cosh = __modules__._math.cosh;
var acosh = __modules__._math.acosh;
var tan = __modules__._math.tan;
var atan = __modules__._math.atan;
var tanh = __modules__._math.tanh;
var atanh = __modules__._math.atanh;
var atan2 = __modules__._math.atan2;
var boolean = __modules__._mathjs.boolean;
var number = __modules__._mathjs.number;
var string = __modules__._mathjs.string;
var mad = __modules__._mathjs.mad;
var mean = __modules__._mathjs.mean;
var median = __modules__._mathjs.median;
var mode = __modules__._mathjs.mode;
var prod = __modules__._mathjs.prod;
var std = __modules__._mathjs.std;
var vari = __modules__._mathjs.vari;
var sum = __modules__._mathjs.sum;
var hypot = __modules__._mathjs.hypot;
var norm = __modules__._mathjs.norm;
var square = __modules__._mathjs.square;
var cube = __modules__._mathjs.cube;
var remap = __modules__._arithmetic.remap;
var distance = __modules__._geometry.distance;
var distanceM = __modules__._geometry.distanceM;
var distanceMS = __modules__._geometry.distanceMS;
var intersect = __modules__._geometry.intersect;
var project = __modules__._geometry.project;
var range = __modules__._list.range;
var len = __modules__._common.len;
var listCount = __modules__._list.listCount;
var listCopy = __modules__._list.listCopy;
var listRep = __modules__._list.listRep;
var listLast = __modules__._list.listLast;
var listGet = __modules__._list.listGet;
var listFind = __modules__._list.listFind;
var listHas = __modules__._list.listHas;
var listJoin = __modules__._list.listJoin;
var listFlat = __modules__._list.listFlat;
var listRot = __modules__._list.listRot;
var listSlice = __modules__._list.listSlice;
var listRev = __modules__._list.listRev;
var listCull = __modules__._list.listCull;
var listSort = __modules__._list.listSort;
var listZip = __modules__._list.listZip;
var listEq = __modules__._list.listEq;
var dictGet = __modules__._dict.dictGet;
var dictKeys = __modules__._dict.dictKeys;
var dictVals = __modules__._dict.dictVals;
var dictHasKey = __modules__._dict.dictHasKey;
var dictHasVal = __modules__._dict.dictHasVal;
var dictFind = __modules__._dict.dictFind;
var dictCopy = __modules__._dict.dictCopy;
var dictEq = __modules__._dict.dictEq;
var setMake = __modules__._set.setMake;
var setUni = __modules__._set.setUni;
var setInt = __modules__._set.setInt;
var setDif = __modules__._set.setDif;
var vecAdd = __modules__._vec.vecAdd;
var vecSub = __modules__._vec.vecSub;
var vecDiv = __modules__._vec.vecDiv;
var vecMult = __modules__._vec.vecMult;
var vecSum = __modules__._vec.vecSum;
var vecLen = __modules__._vec.vecLen;
var vecSetLen = __modules__._vec.vecSetLen;
var vecNorm = __modules__._vec.vecNorm;
var vecRev = __modules__._vec.vecRev;
var vecFromTo = __modules__._vec.vecFromTo;
var vecAng = __modules__._vec.vecAng;
var vecAng2 = __modules__._vec.vecAng2;
var vecDot = __modules__._vec.vecDot;
var vecCross = __modules__._vec.vecCross;
var vecEqual = __modules__._vec.vecEqual;
var vecLtoG = __modules__._vec.vecLtoG;
var vecGtoL = __modules__._vec.vecGtoL;
var plnMake = __modules__._plane.plnMake;
var plnCopy = __modules__._plane.plnCopy;
var plnMove = __modules__._plane.plnMove;
var plnRot = __modules__._plane.plnRot;
var plnLMove = __modules__._plane.plnLMove;
var plnLRotX = __modules__._plane.plnLRotX;
var plnLRotY = __modules__._plane.plnLRotY;
var plnLRotZ = __modules__._plane.plnLRotZ;
var rayMake = __modules__._ray.rayMake;
var rayCopy = __modules__._ray.rayCopy;
var rayMove = __modules__._ray.rayMove;
var rayRot = __modules__._ray.rayRot;
var rayLMove = __modules__._ray.rayLMove;
var rayFromPln = __modules__._ray.rayFromPln;
var rayLtoG = __modules__._ray.rayLtoG;
var rayGtoL = __modules__._ray.rayGtoL;
var colFalse = __modules__._colors.colFalse;
var colScale = __modules__._colors.colScale;
var radToDeg = __modules__._conversion.radToDeg;
var degToRad = __modules__._conversion.degToRad;
var numToStr = __modules__._conversion.numToStr;
var rand = __modules__._rand.rand;
var randInt = __modules__._rand.randInt;
var randPick = __modules__._rand.randPick;

async function exec_func1tow_cir(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){

async function exec_func1tow_cir_node_hejny1aesj(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

__modules__.attrib.Set(__params__.model, null, 'geolocation',  {"latitude": 1.299167,"longitude": 103.856193,"elevation": 0.5} );
__modules__._model.__postprocess__( __params__.model);
}


async function exec_func1tow_cir_node_udt6l0ktm9(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

let tower_bases_coll_ = await __modules__.io.Import( __params__.model, '{"type":"GIJson","version":"0.7","geometry":{"num_posis":14,"verts":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"tris":[[3,4,0],[0,1,2],[2,3,0],[5,6,8],[6,7,8],[12,13,9],[9,10,11],[11,12,9]],"edges":[[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,5],[9,10],[10,11],[11,12],[12,13],[13,9]],"wires":[[0,1,2,3,4],[5,6,7,8],[9,10,11,12,13]],"points":[],"plines":[],"pgons":[[0],[1],[2]],"pgontris":[[0,1,2],[3,4],[5,6,7]],"coll_pgons":[[0,1,2],[]],"coll_plines":[[],[]],"coll_points":[[],[]],"coll_childs":[[1],[]],"selected":{}},"attributes":{"posis":[{"name":"xyz","data_type":"list","data":[[[125.57004399292732,6.288923961568322,0],[0,6]],[[184.12843143253588,8.054867871615315,0],[1]],[[182.99627839456235,58.44379839698489,0],[2]],[[171.61523542349994,70.20046574439813,0],[3]],[[123.66096527392264,69.59363632766716,0],[4,7]],[[67.01165655331874,4.522980051521362,0],[5,10]],[[65.0716809426742,68.85222787485326,0],[8,11]],[[8.453269113710201,2.7570361414743902,0],[9]],[[2.931808349457654,68.06588908742388,0],[12]],[[-2.500133332741669,61.89808595187476,0],[13]]]}],"verts":[],"edges":[],"wires":[],"points":[],"plines":[],"pgons":[{"name":"_ts","data_type":"number","data":[[3,[0,1,2]]]}],"colls":[{"name":"name","data_type":"string","data":[["import GI",[0]]]}],"model":[["geolocation",{"latitude":1.299167,"elevation":0.5,"longitude":103.856193}]]}}', 'gi' );

__modules__.modify.Rotate( __params__.model, tower_bases_coll_, [0, 0, 1], atan(__debug__, -11 / 10) );

let tower_bases_pg_ = __modules__.query.Get(__params__.model, 'pg', tower_bases_coll_);

__modules__.collection.Delete( __params__.model, __modules__.query.Get(__params__.model, 'co', null) );

let plot_coll_ = __modules__.collection.Create( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), "plots" );
__modules__._model.__postprocess__( __params__.model);
}


async function exec_func1tow_cir_node_z24djsc168q(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

let hull_ = __modules__.poly2d.ConvexHull( __params__.model, __modules__.query.Get(__params__.model, 'pg', null) );

__modules__.edit.Delete( __params__.model, hull_, 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
}


async function exec_func1tow_cir_node_sllarl26b6k(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

let base_ = __modules__.make.Clone( __params__.model, __modules__.query.Get(__params__.model, 'pg', null)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', null).length)] );

__modules__.attrib.Set(__params__.model, base_, 'type',  "pod_base" );

__modules__.attrib.Set(__params__.model, base_, 'floors',  FLOORS_POD_ );

let area_ = __modules__.calc.Area( __params__.model, base_ );

if (FLOORS_POD_ > 0){

let base2_ = __modules__.make.Polygon( __params__.model, base_ );

let div_ = __modules__.edit.Divide( __params__.model, base2_, 8, 'by_min_length' );

let pod_ = __modules__.make.Extrude( __params__.model, base2_, FLOORS_POD_ * 5, FLOORS_POD_, 'quads' );

__modules__.edit.Delete( __params__.model, base2_, 'delete_selected' );

let roof_ = __modules__.make.Extrude( __params__.model, pod_[pythonList(-1, pod_.length)], 1.5, 1, 'quads' );

__modules__.attrib.Set(__params__.model, pod_.slice(0,-1), 'type',  "pod_facade" );

__modules__.attrib.Set(__params__.model, pod_[pythonList(-1, pod_.length)], 'type',  "ceiling" );

__modules__.attrib.Set(__params__.model, roof_, 'type',  "roof" );
}

__modules__.attrib.Set(__params__.model, null, 'pod_floor_area',  area_ * FLOORS_POD_ );

__modules__.attrib.Set(__params__.model, null, 'total_floor_area',  area_ * 7 );

let podium_ = __modules__.collection.Create( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), "podium" );
__modules__._model.__postprocess__( __params__.model);
}


async function exec_func1tow_cir_node_v69gfhppkb(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

let bbox_ = __modules__.calc.BBox( __params__.model, __modules__.query.Get(__params__.model, 'pg', null) );

let height_ = bbox_[pythonList(2, bbox_.length)][pythonList(2, bbox_[pythonList(2, bbox_.length)].length)] + 0.1;

__modules__.edit.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), 'delete_selected' );

let posi_ = __modules__.make.Position( __params__.model, [-POS_, 0, height_] );

let req_area_ = __modules__.attrib.Get(__params__.model, null, 'total_floor_area')-  __modules__.attrib.Get(__params__.model, null, 'pod_floor_area');

let size_ = 28;

let cen_ = __modules__.attrib.Get(__params__.model, posi_, 'xyz');

let pln_ = plnMake(__debug__, cen_, [1, 0, 0], [0, 1, 0]);

pln_ = plnRot(__debug__, pln_, [cen_, [0, 0, 1]], degToRad(__debug__, ROT_));

let tri_ = __modules__.pattern.Arc( __params__.model, pln_, size_, SIDES_, null );

let base_ = __modules__.make.Polygon( __params__.model, tri_ );

let area_ = __modules__.calc.Area( __params__.model, base_ );

let num_floors_ = round(__debug__, req_area_ / area_);

if (num_floors_ > 0){

let base2_ = __modules__.make.Polygon( __params__.model, base_ );

let div_ = __modules__.edit.Divide( __params__.model, base2_, 8, 'by_min_length' );

let tow_ = __modules__.make.Extrude( __params__.model, base2_, num_floors_ * 3, num_floors_, 'quads' );

__modules__.edit.Delete( __params__.model, base2_, 'delete_selected' );

let roof_ = __modules__.make.Extrude( __params__.model, tow_[pythonList(-1, tow_.length)], 1.5, 1, 'quads' );

__modules__.attrib.Set(__params__.model, base_, 'type',  "tow_base" );

__modules__.attrib.Set(__params__.model, base_, 'floors',  num_floors_ );

__modules__.attrib.Set(__params__.model, tow_.slice(0,-1), 'type',  "facade" );

__modules__.attrib.Set(__params__.model, tow_[pythonList(-1, tow_.length)], 'type',  "ceiling" );

__modules__.attrib.Set(__params__.model, roof_, 'type',  "roof" );
}
__modules__._model.__postprocess__( __params__.model);
}


async function exec_func1tow_cir_node_7f3xgu2ax28(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

let pln_ = [[88.07455076308419, -42.6381323841523, 0], [-0.6819816424103936, 0.7313692907247489, 0], [-0.7313692907247489, -0.6819816424103936, 0]];

__modules__.modify.XForm( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), JSON.parse(JSON.stringify(XY)), pln_ );

let towers_ = __modules__.collection.Create( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), "tower" );
__modules__._model.__postprocess__( __params__.model);
}


async function exec_func1tow_cir_node_a5n8eeqkcnv(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

__modules__.visualize.Color( __params__.model, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "roof"), [0.7, 0.9, 0.7] );

__modules__.visualize.Color( __params__.model, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "core"), [0.7, 0.7, 0.7] );

__modules__.visualize.Color( __params__.model, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "facade"), [0.7, 0.7, 0.9] );
__modules__._model.__postprocess__( __params__.model);
}


async function exec_func1tow_cir_node_z69nug710do(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

let facade_pgons_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "facade");

for (let  pgon_ of facade_pgons_){

let nor_ = __modules__.calc.Normal( __params__.model, pgon_, 1 );

let cen_ = __modules__.calc.Centroid( __params__.model, pgon_, 'ps_average' );

let ray_ = rayMake(__debug__, cen_, nor_);

__modules__.attrib.Set(__params__.model, pgon_, 'ray',  ray_ );
}
__modules__._model.__postprocess__( __params__.model);
}


async function exec_func1tow_cir_node_wk553zzw0bq(__params__, POS_, FLOORS_POD_, ROT_, SIDES_){
__modules__._model.__preprocess__( __params__.model);

await __modules__.io.Export( __params__.model, null, "evo_paper_model.gi", 'gi', 'Save to Local Storage' );

return null;
}

var merged;
let ssid_exec_func1tow_cir_node_0t6yv0qhdpzk = __params__.model.getActiveSnapshot();

let ssid_exec_func1tow_cir_node_hejny1aesj = ssid_exec_func1tow_cir_node_0t6yv0qhdpzk;

await exec_func1tow_cir_node_hejny1aesj(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);

let ssid_exec_func1tow_cir_node_udt6l0ktm9 = ssid_exec_func1tow_cir_node_hejny1aesj;

await exec_func1tow_cir_node_udt6l0ktm9(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);

let ssid_exec_func1tow_cir_node_z24djsc168q = ssid_exec_func1tow_cir_node_udt6l0ktm9;

await exec_func1tow_cir_node_z24djsc168q(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);

let ssid_exec_func1tow_cir_node_sllarl26b6k = ssid_exec_func1tow_cir_node_z24djsc168q;

await exec_func1tow_cir_node_sllarl26b6k(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);

let ssid_exec_func1tow_cir_node_v69gfhppkb = __params__.model.nextSnapshot([ssid_exec_func1tow_cir_node_sllarl26b6k]);

await exec_func1tow_cir_node_v69gfhppkb(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);

let ssid_exec_func1tow_cir_node_7f3xgu2ax28 = ssid_exec_func1tow_cir_node_v69gfhppkb;

await exec_func1tow_cir_node_7f3xgu2ax28(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);

let ssid_exec_func1tow_cir_node_a5n8eeqkcnv = __params__.model.nextSnapshot([ssid_exec_func1tow_cir_node_sllarl26b6k, ssid_exec_func1tow_cir_node_7f3xgu2ax28]);

await exec_func1tow_cir_node_a5n8eeqkcnv(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);

let ssid_exec_func1tow_cir_node_z69nug710do = ssid_exec_func1tow_cir_node_a5n8eeqkcnv;

await exec_func1tow_cir_node_z69nug710do(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);

let ssid_exec_func1tow_cir_node_wk553zzw0bq = __params__.model.nextSnapshot([ssid_exec_func1tow_cir_node_z69nug710do]);

return await exec_func1tow_cir_node_wk553zzw0bq(__params__, POS_, FLOORS_POD_, ROT_, SIDES_);
}


function pythonList(x, l){
    if (x < 0) {
        return x + l;
    }
    return x;
}

function mergeInputs(models){
    let result = null;
    if (models.length === 0) {
        result = __modules__._model.__new__();
    } else if (models.length === 1) {
        result = models[0].clone();
    } else {
        result = models[0].clone();
        for (let i = 1; i < models.length; i++) {
            __modules__._model.__merge__(result, models[i]);
        }
    }
    try {
        result.debug = __debug__;
    } catch (ex) {}
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
__modules__.io._importGI(__params__["model"], __model__);
}
__params__["model"].debug = __debug__;
__params__["console"] = [];
__params__["modules"] = __modules__;
__params__["curr_ss"] = {};
const result = await exec_func1tow_cir(__params__, POS, FLOORS_POD, ROT, SIDES);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

module.exports = func1tow_cir;

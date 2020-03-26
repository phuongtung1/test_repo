/**
 * to use this code: import Example_1_using_DivPgons_function from this js file as well as the GI module
 * run Example_1_using_DivPgons_function with the GI module as input along with other start node input
 * e.g.:
 * const Example_1_using_DivPgons_function = require('./Example_1_using_DivPgons_function.js').Example_1_using_DivPgons_function
 * const module = require('gi-module')
 * const result = Example_1_using_DivPgons_function(module, start_input_1, start_input_2, ...);
 *
 * returns: a json object:
 *   _ result.model -> gi model of the flowchart
 *   _ result.result -> returned output of the flowchart, if the flowchart does not return any value, result.result is the model of the flowchart
 */

// Parameter: {"name":"segments","value":6,"type":1,"min":"4","max":"12","step":"1"}
// Parameter: {"name":"slices","value":4,"type":1,"min":"4","max":"12","step":"1"}


function Example_1_using_DivPgons_function(__modules__, segments, slices) {

/** * **/
PI = Math.PI;
XY = __modules__._constants.XY;
YZ = __modules__._constants.YZ;
ZX = __modules__._constants.ZX;
YX = __modules__._constants.YX;
ZY = __modules__._constants.ZY;
XZ = __modules__._constants.XZ;
approx = __modules__._util.approx;
min = __modules__._math.min;
max = __modules__._math.max;
pow = Math.pow;
sqrt = Math.sqrt;
exp = Math.exp;
log = Math.log;
round = Math.round;
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
distance = __modules__._calc.distance;
intersect = __modules__._calc.intersect;
project = __modules__._calc.project;
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
colFalse = __modules__._colors.colFalse;
colScale = __modules__._colors.colScale;
radToDeg = __modules__._conversion.radToDeg;
degToRad = __modules__._conversion.degToRad;
rand = __modules__._rand.rand;
randInt = __modules__._rand.randInt;
randPick = __modules__._rand.randPick;
setattr = __modules__._model.__setAttrib__;
getattr = __modules__._model.__getAttrib__;


function exec_Example_1_using_DivPgons_function_DivPgons(__params__, pgons_, num_u_, num_v_){



function exec_Example_1_using_DivPgons_function_DivPgons_node_pac4eluffj(__params__, pgons_, num_u_, num_v_){
__modules__._model.__preprocess__( __params__.model);


let pgons_list_ = pgons_;

if (!isList(pgons_)){


pgons_list_ = [pgons_];
}

for (let  pgon_to_divide_ of pgons_list_){


let edges_ = __modules__.query.Get( __params__.model, '_e', pgon_to_divide_ );

let pl1_ = __modules__.make.Polyline( __params__.model, edges_[pythonList(0, edges_.length)], 'open' );

let pl2_ = __modules__.make.Polyline( __params__.model, edges_[pythonList(2, edges_.length)], 'open' );

__modules__.modify.Reverse( __params__.model, pl2_ );

let div1_ = __modules__.make.Divide( __params__.model, [pl1_, pl2_], num_v_, 'by_number' );

__modules__.attrib.Set(__params__.model, null, 'divided_pgons',  __modules__.make.Loft( __params__.model, [pl1_, pl2_], num_u_, 'open_quads' ) );

__modules__.modify.Delete( __params__.model, [pgon_to_divide_, pl1_, pl2_], 'delete_selected' );
}
__modules__._model.__postprocess__( __params__.model);
return __params__.model;
}




function exec_Example_1_using_DivPgons_function_DivPgons_node_ih4784mnjwo(__params__, pgons_, num_u_, num_v_){
__modules__._model.__preprocess__( __params__.model);


let __return_value__ = __modules__._Output.Return(__params__.model, __modules__.attrib.Get(__params__.model, null, 'divided_pgons'));
return __return_value__;
}

var merged;
let result_exec_Example_1_using_DivPgons_function_DivPgons_node_7uh0a4c9e1u = __params__.model;

__params__.model = mergeInputs([result_exec_Example_1_using_DivPgons_function_DivPgons_node_7uh0a4c9e1u]);
let result_exec_Example_1_using_DivPgons_function_DivPgons_node_pac4eluffj = exec_Example_1_using_DivPgons_function_DivPgons_node_pac4eluffj(__params__, pgons_, num_u_, num_v_);

__params__.model = mergeInputs([result_exec_Example_1_using_DivPgons_function_DivPgons_node_pac4eluffj]);
let result_exec_Example_1_using_DivPgons_function_DivPgons_node_ih4784mnjwo = exec_Example_1_using_DivPgons_function_DivPgons_node_ih4784mnjwo(__params__, pgons_, num_u_, num_v_);

return result_exec_Example_1_using_DivPgons_function_DivPgons_node_ih4784mnjwo;
}

function exec_Example_1_using_DivPgons_function(__params__, segments_, slices_){



function exec_Example_1_using_DivPgons_function_node_ibvr4fs0p4d(__params__, segments_, slices_){
__modules__._model.__preprocess__( __params__.model);


let cir_ = __modules__.pattern.Arc( __params__.model, JSON.parse(JSON.stringify(YZ)), 20, segments_, null );

__modules__.modify.Move( __params__.model, cir_, [0, 50, 0] );

let cir_pl_ = __modules__.make.Polyline( __params__.model, cir_, 'close' );

let circs_ = [];

let num_ = slices_;

for (let  i_ of range(0, num_)){


let cir_pl2_ = __modules__.make.Copy( __params__.model, cir_pl_, [0, 0, 0] );

__modules__.modify.Rotate( __params__.model, cir_pl2_, [0, 0, 1], (2 * JSON.parse(JSON.stringify(PI)) / num_) * -i_ );

__modules__.list.Add( circs_, cir_pl2_, 'to_end' );
}

let skin_ = __modules__.make.Loft( __params__.model, circs_, 1, 'closed_quads' );

let pgons_div_ = exec_Example_1_using_DivPgons_function_DivPgons(__params__, skin_, 8, 2);
__modules__._model.__postprocess__( __params__.model);
return __params__.model;
}




function exec_Example_1_using_DivPgons_function_node_vu6h2nekica(__params__, segments_, slices_){
__modules__._model.__preprocess__( __params__.model);


return null;
}

var merged;
let result_exec_Example_1_using_DivPgons_function_node_83vbo0hi668 = __params__.model;

__params__.model = mergeInputs([result_exec_Example_1_using_DivPgons_function_node_83vbo0hi668]);
let result_exec_Example_1_using_DivPgons_function_node_ibvr4fs0p4d = exec_Example_1_using_DivPgons_function_node_ibvr4fs0p4d(__params__, segments_, slices_);

__params__.model = mergeInputs([result_exec_Example_1_using_DivPgons_function_node_ibvr4fs0p4d]);
let result_exec_Example_1_using_DivPgons_function_node_vu6h2nekica = exec_Example_1_using_DivPgons_function_node_vu6h2nekica(__params__, segments_, slices_);

return result_exec_Example_1_using_DivPgons_function_node_vu6h2nekica;
}


function pythonList(x, l){
    if (x < 0) {
        return x + l;
    }
    return x;
}

function mergeInputs(models){
    let result = __modules__._model.__new__();
    for (let model of models){
        __modules__._model.__merge__(result, model);
    }
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
                __value_strings__.push('\"' + __item__ + '\"' + ': ' + __value__);
                continue;
            }
            if (__value__.constructor === [].constructor || __value__.constructor === {}.constructor) {
                __list_check__ = true;
            }
            __value_strings__.push('\"' + __item__ + '\"' + ': ' + JSON.stringify(__value__).replace(/,/g, ', '));
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
__params__["model"]= __modules__._model.__new__();
__params__["modules"]= __modules__;
const result = exec_Example_1_using_DivPgons_function(__params__, segments, slices);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

module.exports = Example_1_using_DivPgons_function;

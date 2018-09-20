import { Injectable } from '@angular/core';

import { IModule, IFunction } from '@models/procedure';
import { IArgument } from '@models/code';
import * as Modules from '@modules';

// todo: bug fix for defaults
function extract_params(func: Function): IArgument[] {
    let fnStr = func.toString().replace( /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
    let result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).split(",")//.match( /([^\s,]+)/g);
    if(result === null || result[0]==""){
         result = [];
    }

    let final_result = result.map(function(r){ 
        r = r.trim();
        let r_value = r.split("=");

        if (r_value.length == 1){
            return { name: r_value[0].trim(), value: r_value[0].trim(), default: r_value[0].trim() }
        }
        else{
            return { name: r_value[0].trim(), value: r_value[1].trim(), default: r_value[1].trim() }
        }

    });

    return final_result;
}


export function ModuleAware(constructor: Function) {
    let module_list = [];
    for( let m_name in Modules ){
        
        let modObj = <IModule>{};
        modObj.module = m_name;
        modObj.functions = [];
        
        for( let fn_name of Object.keys(Modules[m_name])){
            
            let func = Modules[m_name][fn_name];

            let fnObj = <IFunction>{};
            fnObj.module = m_name;
            fnObj.name = fn_name;
            fnObj.argCount = func.length;
            fnObj.args = extract_params(func);
            
            modObj.functions.push(fnObj);
        }
    
        module_list.push(modObj);
    }


    constructor.prototype.Modules = module_list;
}
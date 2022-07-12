/**
 * filter objects by property key names.
 * @param  {[{}]} objects single object or list of objects with key value pairs
 * @param  {[string]} keyNames list of key names to filter. 
 * @return {[{}]}      filtered objects with specified key names and their values. 
 */
 export function filterObject(objects: any, keyNames: string[]) {
    //if single object is given
    if (!Array.isArray(objects)) {
        objects = [objects]
    }

    let filteredArr = objects.map((property: any) => {
        let filteredObj: any = {}

        //add key value pair to filteredObj for each key name from keyNames param
        keyNames.forEach(keyName => {
            // if key name to be included
            if (typeof keyName != 'string') {
                //throw error
            } else {
                filteredObj[keyName] = property[keyName]
            }
        });
        return filteredObj;
    })
    //remove duplicates
    let cleanSet = [...new Set(filteredArr.map((obj:any) => JSON.stringify(obj)))];
    let cleanArray = cleanSet.map((strObj:any) => JSON.parse(strObj));
    return cleanArray;
}
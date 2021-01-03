

export function setFlagToggleCon(newFlag){
    return{
        type:'SET_IS_OPEN_CON',
        payload:newFlag
    }
}
export function setFlagthumbtack(newFlag){
    return{
        type:'SET_THUMBTACK',
        payload:newFlag
    }
}

// export function setCollapseOpen(collapse,id){
//     return{
//         type:'SET_COLLAPSE_OPEN',
//         collapse:collapse,
//         id:id
//     }
// }


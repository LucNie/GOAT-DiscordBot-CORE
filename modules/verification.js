const fs = require('fs');
export function levelVerif(id, alevel) {
    const jsonUser = "../users/user_"+id+".json";
    const user_data_row  = require(jsonUser);
    const user_data = JSON.parse(JSON.stringify(user_data_row));

    if (user_data.level >= alevel){
        return true;
    }else{
        return false;
    }
}

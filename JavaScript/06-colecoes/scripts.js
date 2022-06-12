function getAdmin(map){
        let admins = [];
        for ([key, value] of map) {
                if (value === 'Admin'){
                        admins.push(key);
             }   
        }
        return admins;
}

const usuarios = new Map();

usuarios.set('Lois', 'Admin');
usuarios.set('Ellie', 'User');
usuarios.set('Jen', 'User');
usuarios.set('Sam', 'Admin');
usuarios.set('Rita', 'Admin');

console.log(getAdmin(usuarios))

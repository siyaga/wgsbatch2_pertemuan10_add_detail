const fs = require('fs');

// Membuat folder data jika belom ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belom ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf8');
    
}
// Ambil semua data di contact.json
const loadContact = ()=> {

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

// Cari contact berdasarkan nama untuk detail
const findDetailContact =(name)=> {
    const contacts = loadContact();

    const contact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    return contact;
}

module.exports = {loadContact, findDetailContact}
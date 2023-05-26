const hit = sessionStorage.getItem("hit");

if(hit !== true){
    sessionStorage.setItem("hit", true);
}

async function getHits() {
    const response = await fetch(new Request(`https://api.airtable.com/v0/appJ4NKPmNMlwWP6N/tblHy5Qbk7cFUJCin`, {method: 'GET', headers: {'Authorization': `Bearer ${import.meta.env.HIT_COUNTER}`}}));
    return response.json();
}
const hits = await getHits();
console.log(hits);
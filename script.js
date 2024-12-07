// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

function ricerca(title, location) { 
  let arrLocation = location.toLowerCase(); 
  let arrTitle = title.toLowerCase(); result = [];
  
  for (let i = 0; i < jobs.length; i++) { 
    let job = jobs[i]; 
    if (job.title.toLowerCase().includes(arrTitle) && job.location.toLowerCase().includes(arrLocation)) { result.push(job);
 } 
}
  
  count = result.length; 
  return { 
    result: result, 
    count: count 
  }; 
}

/* Test della funzione ricerca
let titleTest = "marketing"; 
let locationTest = ""; 
let risultatiRicerca = ricerca(titleTest, locationTest); 

console.log(risultatiRicerca.result); 
console.log(risultatiRicerca.count);
*/




  window.onload = function() {
     let bottoneRicerca = document.querySelector('.tastoCerca'); 
     bottoneRicerca.addEventListener('click', function(event) { 
      event.preventDefault() /* senza preventDefault non lascia il risultato a schermo ma scompare immediatamente */
      
      let title = document.getElementById("lavoro").value; 
      let location = document.getElementById("città").value; 
      let risultatiRicercati = ricerca(title, location); 
      let output = document.getElementById("risultati"); 
      output.innerHTML = ""; 

      /* if noRisultato aggiunto in un secondo momento nello specifico dopo l'ultima lezione teorica dove veniva consigliato di dare un feed anche in caso di esito negativo*/

      if (risultatiRicercati.result.length === 0) { 
        let noRisultato = document.createElement("p"); 
        noRisultato.textContent = "Nessun risultato trovato."; output.appendChild(noRisultato); } else {
          
      for (let i = 0; i < risultatiRicercati.result.length; i++) 
        { 
          let lavoriTrovati = risultatiRicercati.result[i]; 
          let listItem = document.createElement("ul"); 
          listItem.textContent = lavoriTrovati.title + " - " + lavoriTrovati.location; 
          output.appendChild(listItem); 
        } 
      }
    });

    let bottoneResetta = document.querySelector('.pulisci'); 
    bottoneResetta.addEventListener('click', function(event) {
      event.preventDefault()
   
     let title = document.getElementById("lavoro").value = '' 
     let location = document.getElementById("città").value = '' 
     let output = document.getElementById("risultati"); 
     output.innerHTML = "";
  });
}

document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value.toLowerCase();
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = `Team Name: ${data.name}`
  document.querySelector("#personStatus").textContent = `Established: ${data.status}`
  document.querySelector("#personOccupation").textContent = `Stadium: ${data.currentOccupation}`
}
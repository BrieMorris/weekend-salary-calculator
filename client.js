let firstName = '';
let lastName = '';
let idNumber = 0;
let title = '';
let annualSalary = 0;
let monthlyCost = 41667;

function handleSubmit(event){
  event.preventDefault();
  let firstVal = document.querySelector('#first-name').value;
  console.log(firstVal);
  let lastVal = document.querySelector('#last-name').value;
  console.log(lastVal);
  let idVal = document.querySelector('#id-number').value;
  console.log(idVal);
  let titleVal = document.querySelector('#job-title').value;
  console.log(titleVal);
  let salaryVal = document.querySelector('#annual-salary').value;
  console.log(salaryVal);

  let employeeTable = document.querySelector('#employees-info');
  employeeTable.innerHTML +=`
    <tr>
      <td>${firstVal}</td>
      <td>${lastVal}</td>
      <td>${idVal}</td>
      <td>${titleVal}</td>
      <td>${salaryVal}</td>
      <td><button onclick="removeRow(event)">Delete</button></td>
   </tr>
  `;
  monthlyCost += Number(salaryVal) / 12;
 document.querySelector('#monthly-cost').innerHTML = monthlyCost;


}
//write remove row function
function removeRow(event){
  event.target.closest('tr').remove();
}


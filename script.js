//your JS code here. If required.
document.getElementById("submitBtn").addEventListener("click", function() {
    document.querySelector(".table").style.display="block";

    // Use querySelector to get input values correctly
    const firstname = document.querySelector(".firstname")?.value.trim();
    const lastname = document.querySelector(".lastname")?.value.trim();
    const phonenumber = document.querySelector(".phonenumber")?.value.trim();
    const email = document.querySelector(".email")?.value.trim();

    // Validate input
    if (!firstname || !lastname || !phonenumber || !email) {
        alert("All fields are required!");
        return;
    }
	alert(`First Name:${firstname} Last Name:${lastname} Phone Number:${phonenumber} Email ID:${email}`);
	

    // Get tbody
    const tablebody = document.querySelector("tbody");
    if (!tablebody) {
        console.error("No tbody found!");
        return;
    }

    // Create and insert new row
    const newrow = document.createElement("tr");
    newrow.innerHTML = `
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${phonenumber}</td>
          <td style="border-right: none;"><a href="mailto:${email}">${email}</a></td>
    `;
 
    tablebody.appendChild(newrow);
	document.querySelector(".firstname").value="";
		document.querySelector(".lastname").value="";
		document.querySelector(".phonenumber").value="";
		document.querySelector(".email").value="";
});

 
	



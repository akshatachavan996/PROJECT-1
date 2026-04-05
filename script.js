const experiments = {
  physics: [
    {
      name: "RESOLVING POWER OF TELESCPOPE",
      video: "https://www.youtube.com/embed/9BhFHDCFlTE?si=VtusMkKccdfMJeiY",
      pdf: ""
    },
     {
      name: "CYLINDRICAL OBSTACLE",
      video: "",
      pdf: ""
    },
     {
      name: "He Ne LASER",
      video: "",
      pdf: ""
    },
     {
      name: "SPECIFIC ROTATION OF SUGAR SOLUTION",
      video: "",
      pdf: ""
    },
     {
      name: "PLANCK'S CONSTANT",
      video: "",
      pdf: ""
    },
     {
      name: "COLPITT'S OSCILLATOR",
      video: "",
      pdf: ""
    },
     {
      name: "PLANE DIFFRACTION GRATING",
      video: "",
      pdf: ""
    },
     {
      name: "KUNDT'S TUBE",
      video: "",
      pdf: ""
    },
  ],

  chemistry: [
    {
      name: "",
      video: "",
      pdf:""
    },
     {
      name: "",
      video: "",
      pdf:""
    },
     {
      name: "",
      video: "",
      pdf:""
    },
     {
      name: "",
      video: "",
      pdf:""
    },
     {
      name: "",
      video: "",
      pdf:""
    },
     {
      name: "",
      video: "",
      pdf:""
    },
    
  ]
};


// NAVIGATION
function goTo(page){
  window.location.href = page;
}

function goBack(){
  window.history.back();
}


// SEARCH
function searchExp(subject, text){
  let list = experiments[subject].filter(e =>
    e.name.toLowerCase().includes(text.toLowerCase())
  );
  showData(list);
}


// SHOW UI
function showData(list){
  let html = "";

  list.forEach(exp => {
    html += `
      <div class="exp">
        <h3>${exp.name}</h3>

        <!-- VIDEO -->
        <iframe src="${exp.video}" allowfullscreen></iframe>

        <!-- PDF -->
        ${exp.pdf ? `
          <div class="links">
            <a href="${exp.pdf}" target="_blank">Open PDF</a>
            <a href="${exp.pdf}" download>Download</a>
          </div>
        ` : ""}
      </div>
    `;
  });

  document.getElementById("content").innerHTML = html;
}


// AUTO LOAD
window.onload = function(){

  if(document.title === "Physics"){
    showData(experiments.physics);
  }

  if(document.title === "Chemistry"){
    showData(experiments.chemistry);
  }

};
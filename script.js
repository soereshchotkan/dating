let userView = document.querySelector("#userView");
let searchDate = document.querySelector(".searchDate");
let form = document.querySelector("form");

let img_avatar;
const dbData = [];
let dbName;
let dbAge;
let dbGender;
let dbLocation;
let dbGenderInterest;

let showData;

let userInt;

searchDate.addEventListener("click", () => {
  form.style.display = "block";
  userView.innerHTML = "";
  location.reload();
});
let fname;
function formValidate() {
  let error = document.querySelector(".error");

  fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let age = document.querySelector("#age").value;
  let minAge = document.querySelector("#minage").value;
  let maxAge = document.querySelector("#maxage").value;
  let gender = document.querySelector("#gender").value;
  let genderInterest = document.querySelector("#genderInterest").value;
  let place = document.querySelector("#place").value;

  console.log(
    `Gender: ${gender}
     Gender interesse: ${genderInterest}
      Locatie: ${place}
       Minimum lf: ${minAge}
        Maximum lf: ${maxAge}`
  );

  if (fname.length < 2) {
    error.textContent = "Firstname must greater than 2 character";
    return false;
  } else if (lname.length < 2) {
    error.textContent = "Lastname must greater than 2 character";
    return false;
  } else if (age < 18) {
    error.textContent = "Age must above 18 years";
    return false;
  } else if (minAge < 18) {
    error.textContent = "min age must above 18 years";
    return false;
  } else if (maxAge < minAge) {
    error.textContent = `max age must be older than ${minAge} years`;
    return false;
  } else {
    error.textContent = "";

    data.map((e) => {
      userInt = genderInterest;
      switch (userInt) {
        /************************************************************/
        /* 1                      M interesse F                     */
        /************************************************************/
        case "F":
          if (
            genderInterest === e.gender &&
            gender === "M" &&
            e.gender_interest === "M" &&
            e.gender === "F" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });

            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "F" ? "images/woman.jpg" : "images/man.jpg";
              return `<div class="dynamicDiv">
                <img src=${img_avatar} height="150" width="150" >
                <div class="textBody">
                <p>${item.dbName}</p>
                <div class="dbLocationDbAge">
                 <p>${item.dbLocation} * </p>
                  <p>${item.dbAge}</p>
                  </div>
              </div>
            </div>`;
            });
          }
          /************************************************************/
          /* 2                       F interesse F                    */
          /************************************************************/
          if (
            genderInterest === e.gender &&
            e.gender_interest === "F" &&
            gender === "F" &&
            e.gender === "F" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });
            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "F" ? "images/woman.jpg" : "images/man.jpg";
              return `<div class="dynamicDiv">
                <img src=${img_avatar} height="150" width="150" >
                <div class="textBody">
                <p>${item.dbName}</p>
                <div class="dbLocationDbAge">
                 <p>${item.dbLocation} * </p>
                  <p>${item.dbAge}</p>
                  </div>
              </div>
            </div>`;
            });
          }

          /************************************************************/
          /* 3                       X interesse F                    */
          /************************************************************/
          if (
            genderInterest === e.gender &&
            e.gender_interest === "X" &&
            gender === "X" &&
            e.gender === "F" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });
            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "F" ? "images/woman.jpg" : "images/man.jpg";
              return `<div class="dynamicDiv">
                <img src=${img_avatar} height="150" width="150" >
                <div class="textBody">
                    <p>${item.dbName}</p>
                    <div class="dbLocationDbAge">
                     <p>${item.dbLocation} * </p>
                      <p>${item.dbAge}</p>
                      </div>
                  </div>
            </div>`;
            });
          }
          break;

        /************************************************************/
        /* 4                      F interesse M                     */
        /************************************************************/
        case "M":
          if (
            genderInterest === e.gender &&
            gender === "F" &&
            e.gender_interest === "F" &&
            e.gender === "M" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });
            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "F" ? "images/woman.jpg" : "images/man.jpg";
              return `<div class="dynamicDiv">
                <img src=${img_avatar} height="150" width="150" >
                <div class="textBody">
                    <p>${item.dbName}</p>
                    <div class="dbLocationDbAge">
                     <p>${item.dbLocation} * </p>
                      <p>${item.dbAge}</p>
                      </div>
                  </div>
            </div>`;
            });
          }
          /************************************************************/
          /* 5                       M interesse M                    */
          /************************************************************/
          if (
            genderInterest === e.gender &&
            e.gender_interest === "M" &&
            gender === "M" &&
            e.gender === "M" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });
            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "F" ? "images/woman.jpg" : "images/man.jpg";
              return `<div class="dynamicDiv">
                <img src=${img_avatar} height="150" width="150" >
                <div class="textBody">
                    <p>${item.dbName}</p>
                    <div class="dbLocationDbAge">
                     <p>${item.dbLocation} * </p>
                      <p>${item.dbAge}</p>
                      </div>
                  </div>
            </div>`;
            });
          }
          /************************************************************/
          /* 6                     X interesse M                      */
          /************************************************************/
          if (
            genderInterest === e.gender &&
            e.gender_interest === "X" &&
            gender === "X" &&
            e.gender === "M" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });
            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "F" ? "images/woman.jpg" : "images/man.jpg";
              return `<div class="dynamicDiv">
                <img src=${img_avatar} height="150" width="150" >
                <div class="textBody">
                    <p>${item.dbName}</p>
                    <div class="dbLocationDbAge">
                     <p>${item.dbLocation} * </p>
                      <p>${item.dbAge}</p>
                      </div>
                  </div>
            </div>`;
            });
          }
          break;
        /************************************************************/
        /* 7                       F interesse X                    */
        /************************************************************/
        case "X":
          if (
            genderInterest === e.gender &&
            gender === "F" &&
            e.gender_interest === "F" &&
            e.gender === "X" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });
            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "X"
                  ? "images/shemale.png"
                  : "images/shemale.png";
              return `<div class="dynamicDiv">
                  <img src=${img_avatar} height="150" width="150" >
                  <div class="textBody">
                    <p>${item.dbName}</p>
                    <div class="dbLocationDbAge">
                     <p>${item.dbLocation} * </p>
                      <p>${item.dbAge}</p>
                      </div>
                  </div>
              </div>`;
            });
          }

          /************************************************************/
          /* 8                       M interesse X                    */
          /************************************************************/

          if (
            genderInterest === e.gender &&
            e.gender_interest === "M" &&
            gender === "M" &&
            e.gender === "X" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });
            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "X"
                  ? "images/shemale.png"
                  : "images/shemale.png";
              return `<div class="dynamicDiv">
                  <img src=${img_avatar} height="150" width="150" >
                  <div class="textBody">
                    <p>${item.dbName}</p>
                    <div class="dbLocationDbAge">
                     <p>${item.dbLocation} * </p>
                      <p>${item.dbAge}</p>
                      </div>
                  </div>
              </div>`;
            });
          }

          /************************************************************/
          /* 9                       X interesse X                    */
          /************************************************************/
          if (
            genderInterest === e.gender &&
            e.gender_interest === "X" &&
            gender === "X" &&
            e.gender === "X" &&
            place === e.location &&
            minAge < e.age &&
            maxAge > e.age
          ) {
            dbData.push({
              dbName: e.first_name,
              dbAge: e.age,
              dbLocation: e.location,
              dbGender: e.gender,
              dbGenderInterest: e.gender_interest,
            });
            showData = dbData.map((item) => {
              img_avatar =
                item.dbGender === "F" ? "images/shemale.png" : "images/man.jpg";
              return `<div class="dynamicDiv">
                <img src=${img_avatar} height="150" width="150" >
                <div class="textBody">
                    <p>${item.dbName}</p>
                    <div class="dbLocationDbAge">
                     <p>${item.dbLocation} * </p>
                      <p>${item.dbAge}</p>
                      </div>
                  </div>
            </div>`;
            });
          }
          break;

        /************************************************************/
        /* 10                      M interesse B                    */
        /************************************************************/
        case "B":
          if (gender === "M") {
            if (
              (gender === "M" &&
                e.gender === "M" &&
                e.gender_interest === "M" &&
                place === e.location &&
                minAge < e.age &&
                maxAge > e.age) ||
              (e.gender === "F" &&
                e.gender_interest === "M" &&
                place === e.location &&
                minAge < e.age &&
                maxAge > e.age)
            ) {
              dbData.push({
                dbName: e.first_name,
                dbAge: e.age,
                dbLocation: e.location,
                dbGender: e.gender,
                dbGenderInterest: e.gender_interest,
              });

              showData = dbData.map((item) => {
                img_avatar =
                  item.dbGender === "F" ? "images/woman.jpg" : "images/man.jpg";
                return `<div class="dynamicDiv">
                  <img src=${img_avatar} height="150" width="150" >
                  <div class="textBody">
                  <p>${item.dbName}</p>
                  <div class="dbLocationDbAge">
                   <p>${item.dbLocation} * </p>
                    <p>${item.dbAge}</p>
                    </div>
                </div>
              </div>`;
              });
            }
          }
          /************************************************************/
          /* 11                    F interesse B                      */
          /************************************************************/
          if (gender === "F") {
            if (
              (gender === "F" &&
                e.gender === "F" &&
                e.gender_interest === "F" &&
                place === e.location &&
                minAge < e.age &&
                maxAge > e.age) ||
              (e.gender === "M" &&
                e.gender_interest === "F" &&
                place === e.location &&
                minAge < e.age &&
                maxAge > e.age)
            ) {
              dbData.push({
                dbName: e.first_name,
                dbAge: e.age,
                dbLocation: e.location,
                dbGender: e.gender,
                dbGenderInterest: e.gender_interest,
              });

              showData = dbData.map((item) => {
                img_avatar =
                  item.dbGender === "F" ? "images/woman.jpg" : "images/man.jpg";
                return `<div class="dynamicDiv">
                  <img src=${img_avatar} height="150" width="150" >
                  <div class="textBody">
                    <p>${item.dbName}</p>
                    <div class="dbLocationDbAge">
                     <p>${item.dbLocation} * </p>
                      <p>${item.dbAge}</p>
                      </div>
                  </div>
              </div>`;
              });
            }
          }
          break;
      }
    });

    if (dbData.length > 0) {
      userView.innerHTML = showData;
      form.style.display = "none";
      return false;
    } else {
      userView.innerHTML = innerHTML = `<div class="dynamicDivNoData">
      <h1>Sorry, no match</h1>
      <h3>Try an other time!</h3>
    </div>`;
      form.style.display = "none";
      return false;
    }
  }
}

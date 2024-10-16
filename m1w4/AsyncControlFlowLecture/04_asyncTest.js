const higherOrderFunc = function (callback) {
  const data = { initials: "BG" };

  console.log("BEFORE TIMEOUT CALL");
  setTimeout(() => {
    data.initials = "BPG";
    console.log(data.initials);
    callback();
  });
  // Server calls

  console.log("AFTER TIMEOUT CALL");
};

console.log("BEFORE MAIN CALL");

const result = higherOrderFunc(() => {
  console.log("INSIDE CALLBACK");
});

console.log("AFTER MAIN CALL");

//14-4-11-20-7-17
// BEFORE MAIN CALL
// AFTER MAIN CALL - BEFORE TIMEOUT CALL

// INSIDE CALLBACK - "BPG"
// AFTER TIMEOUT CALL - "BPG"
// AFTER MAIN CALL - "AFTER TIMEOUT CALL"
// "BPG" - "AFTER MAIN CALL
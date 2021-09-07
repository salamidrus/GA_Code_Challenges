// demo
function greeting1() {
  setTimeout(() => console.log("Mau beli apa mbak?"), 3000);
}

function greeting2() {
  setTimeout(() => {
    console.log("Sampai ketemu lagi!");
  }, 2000);
}

// greeting1();
// greeting2();

// Non-blocking I/O di nodejs
// greeting1 executed
// greeting2 executed
// greeting2 finished
// greeting1 finished
// greeting1 returned
// greeting2 returned

// promise
// status: pending, resolve, reject
function request(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500 + 500);
    console.log(delay, "--delay");

    setTimeout(() => {
      if (delay > 4000) {
        reject(
          "Request Timeout: More than four seconds loading. Please try again!"
        );
      } else {
        resolve(`Request Success to ${url}`);
      }
    }, delay);
  });
}

console.log(request("riski.com"))

// process flow
// register > email confirmation > sms verification > success register
// then catch
// request("karina.com/register")
//   .then((data) => {
//     console.log(data, "--data 1");
//     return request("karina.com/email_confirmation");
//   })
//   .then((data) => {
//     console.log(data, "--data 2");
//     return request("karina.com/sms_verification");
//   })
//   .then((data) => {
//     console.log(data, "---data 3");
//     return request("karina.com/success_register");
//   })
//   .then((data) => {
//     console.log(data, "---data 4");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await
let executeFunc = async () => {
  try {
    let data1 = await request("karina.com/register");
    let data2 = await request("karina.com/email_confirmation");
    let data3 = await request("karina.com/sms_verification");
    let data4 = await request("karina.com/success_register");
    console.log(data4);
  } catch (err) {
    console.log(err);
  }
};

// executeFunc();

async function tesFunc() {
  return "Tess";
}

// console.log(tesFunc());

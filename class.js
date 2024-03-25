function goToCostco() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve();
      else reject();
    }, 2000);
  });
}
function getMeat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve();
      else reject("Could not get the meat, Costco was closed!");
    }, 1500);
  });
}
function cook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve();
      else reject("Cooking did not go well!");
    }, 3000);
  });
}
function serve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve();
      else reject("Plates Broke");
    }, 1000);
  });
}
function eat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!true) resolve();
      else reject("Too full");
    }, 500);
  });
}

async function test() {
  try {
    await goToCostco();
    await getMeat();
    await cook();
    await serve();
    await eat();
  } catch (err) {
    console.log(err);
  }
}

function test1() {
  goToCostco()
    .then((data) => {
      getMeat()
        .then((data) => {
          cook()
            .then((data) => {
              serve()
                .then((data) => {
                  eat()
                    .then((data) => {})
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

test1();

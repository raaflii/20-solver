let hasil = new Set();
const op = ["+", "-", "*", "/"];

function algoritma20Solver(angka) {
  hasil.clear();
  for (let i = 0; i < angka.length; i++) {
    for (let j = 0; j < angka.length; j++) {
      if (j !== i) {
        for (let k = 0; k < angka.length; k++) {
          if (k !== i && k !== j) {
            for (let l = 0; l < angka.length; l++) {
              if (l !== i && l !== j && l !== k) {
                for (let op1 = 0; op1 < op.length; op1++) {
                  for (let op2 = 0; op2 < op.length; op2++) {
                    for (let op3 = 0; op3 < op.length; op3++) {
                      cekBentukOperasi(
                        angka[i],
                        angka[j],
                        angka[k],
                        angka[l],
                        op[op1],
                        op[op2],
                        op[op3]
                      );
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function cekBentukOperasi(a, b, c, d, op1, op2, op3) {
  const bentukOperasi = [
    `${a} ${op1} (${b} ${op2} (${c} ${op3} ${d}))`,
    `${a} ${op1} ((${b} ${op2} ${c}) ${op3} ${d})`,
    `((${a} ${op1} ${b}) ${op2} ${c}) ${op3} ${d}`,
    `(${a} ${op1} (${b} ${op2} ${c})) ${op3} ${d}`,
    `(${a} ${op1} ${b}) ${op2} (${c} ${op3} ${d})`,
  ];

  bentukOperasi.forEach((bentukOperasi) => {
    try {
      if (eval(bentukOperasi) === 20) {
        hasil.add(bentukOperasi);
      }
    } catch (e) {}
  });
}

function solve() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);
  const num4 = parseInt(document.getElementById("num4").value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    alert("Masukkan Angka yang Valid");
    return;
  }

  const angka = [num1, num2, num3, num4];
  algoritma20Solver(angka);

  const resultDiv = document.getElementById("result");
  if (hasil.size === 0) {
    resultDiv.innerHTML = "<p>Tidak ada solusi</p>";
  } else {
    resultDiv.innerHTML = `<p>Terdapat solusi sebanyak: ${hasil.size}</p>`;
    hasil.forEach((element) => {
      resultDiv.innerHTML += `<p>${element}</p>`;
    });
  }
}

function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("num3").value = "";
  document.getElementById("num4").value = "";
  document.getElementById("result").innerHTML = "";
}

function generateRandom() {
  document.getElementById("num1").value = Math.floor(Math.random() * 30) + 1;
  document.getElementById("num2").value = Math.floor(Math.random() * 30) + 1;
  document.getElementById("num3").value = Math.floor(Math.random() * 30) + 1;
  document.getElementById("num4").value = Math.floor(Math.random() * 30) + 1;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("solveBtn").addEventListener("click", solve);
  document.getElementById("resetBtn").addEventListener("click", reset);
  document
    .getElementById("randomBtn")
    .addEventListener("click", generateRandom);
});

function evaluarEjercicio6() {
    const z = parseFloat(document.getElementById("z").value);
    const a = 0.4 * z**4 + 3.1 * z**2 - 162.3 * z - 80.7;
    const b = (z**3 - 23) / Math.sqrt(3 * (z**2 + 17.5));
    document.getElementById("res6").innerHTML =
      `<p>(a): ${a.toFixed(2)}<br>(b): ${b.toFixed(2)}</p>`;
  }
  
  function evaluarEjercicio7() {
    const t = parseFloat(document.getElementById("t").value);
    const a = 0.5 * Math.exp(2 * t) - 3.8 * Math.log(t);
    const b = (6 * t**2 + 6 * t - 2) / (t**2 - 1);
    document.getElementById("res7").innerHTML =
      `<p>(a): ${a.toFixed(2)}<br>(b): ${b.toFixed(2)}</p>`;
  }
  
  function evaluarEjercicio8() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const a = Math.pow(x**2 + y**2, 2/3) + (x * y) / (y - x);
    const b = Math.sqrt(x + y) / Math.pow(x - y, 2) + 2 * x**2 - x * y**2;
    document.getElementById("res8").innerHTML =
      `<p>(a): ${a.toFixed(2)}<br>(b): ${b.toFixed(2)}</p>`;
  }
  
  function evaluarEjercicio9() {
    const d = parseFloat(document.getElementById("d").value);
    const c = parseFloat(document.getElementById("c").value);
    const a = c * d**2;
    const b = (c + a) / (c - d);
  
    const parteA = Math.exp(-d * b) + Math.cbrt(c + a - Math.pow((c * a), d));
    const parteB = d / c + Math.pow((c * t) / b, 2) - Math.pow(c, d) - a / b;
  
    document.getElementById("res9").innerHTML =
      `<p>(a): ${parteA.toFixed(2)}<br>(b): ${parteB.toFixed(2)}</p>`;
  }
  
  function evaluarEjercicio10() {
    const x = parseFloat(document.getElementById("x10").value); // en radianes
    const ladoIzqA = Math.cos(x)**2 - Math.sin(x)**2;
    const ladoDerA = 1 - 2 * Math.sin(x)**2;
  
    const ladoIzqB = Math.tan(x) / (Math.sin(x - 2) * Math.tan(x));
    const ladoDerB = 1 / Math.cos(x - 2);
  
    document.getElementById("res10").innerHTML =
      `<p>(a): ${ladoIzqA.toFixed(3)} = ${ladoDerA.toFixed(3)}<br>
       (b): ${ladoIzqB.toFixed(3)} ≈ ${ladoDerB.toFixed(3)}</p>`;
  }
  
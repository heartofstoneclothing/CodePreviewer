(function () {
  const output = document.createElement('div');
  output.id = 'log-output';
  output.style.padding = '10px';
  output.style.borderTop = '1px solid #ccc';
  output.style.background = '#f9f9f9';
  output.innerHTML = `
    <strong>STDOUT</strong>
    <pre id="stdout" style="color: green;"></pre>
    <strong>STDERR</strong>
    <pre id="stderr" style="color: red;"></pre>
  `;
  document.body.appendChild(output);

  const logStdout = document.getElementById('stdout');
  const logStderr = document.getElementById('stderr');

  const origLog = console.log;
  const origErr = console.error;

  console.log = function (...args) {
    origLog(...args);
    logStdout.textContent += args.join(' ') + '\n';
  };

  console.error = function (...args) {
    origErr(...args);
    logStderr.textContent += args.join(' ') + '\n';
  };

  window.addEventListener("error", function (e) {
    console.error(e.message);
  });
})();

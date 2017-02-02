<template>
  <div>
    <div class="row">
      <div class="one-half column">
        <h4>Shortcuts</h4>
        <div class="shortcut"><code>Command + P</code>: Show arguments</div>
        <div class="shortcut"><code>Command + Click</code>: Go to definition / Show usages</div>
        <div class="shortcut"><code>Command + /</code>: Toggle comment on highlighted lines</div>
        <div class="shortcut"><code>"sout" + Tab</code>: Quick print statement</div>
        <div class="shortcut"><code>Command + 1</code>: Show the (left) project sidebar</div>
      </div>
      <div class="one-half column">
        <h4>Debugger</h4>
        <div class="diagram">
          <img class="u-max-full-width" src="static/img/debugger.png">
          <div class="diagram-overlay"></div>
          <div id="continue" class="circle"></div>
          <div id="stepover" class="circle"></div>
          <div id="stepinto" class="circle"></div>
          <div id="stepout" class="circle"></div>
          <div id="eval" class="circle"></div>
        </div>
        <div class="labels">
          <div id="continue" class="label"><strong><i class="fa fa-play" aria-hidden="true"></i> Continue</strong> - Run until next breakpoint</div>
          <div id="stepover" class="label"><strong><i class="fa fa-arrow-down" aria-hidden="true"></i> Step Over</strong> - Run until next line</div>
          <div id="stepinto" class="label"><strong><i id="rot-down" class="fa fa-arrow-right" aria-hidden="true"></i> Step Into</strong> - Go inside function definition</div>
          <div id="stepout" class="label"><strong><i id="rot-up" class="fa fa-arrow-right" aria-hidden="true"></i> Step Out</strong> - Run until exit current function</div>
          <div id="eval" class="label"><strong><i class="fa fa-calculator" aria-hidden="true"></i> Evaluate Expression</strong> - Simulate running a line of code</div>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <h4>Start a new assigment</h4>
      <ol>
        <li>File -> New -> <strong>Project from Existing Sources...</strong></li>
        <li>Find and click where assignment folder is</li>
        <li>Click <strong>Next</strong> until <strong>"Please select project SDK"</strong> / a list of <code>.jar</code> stuff</li>
        <li>Click <strong>"1.8"</strong>, Finish</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intellij'
}
</script>

<style scoped>
.qr-spacer {
  margin-top: 2rem;
}
.shortcut {
  margin-bottom: 1rem;
}
.diagram {
  position: relative;
  margin-bottom: 1rem;
}
.diagram-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 77.7px;
  width: 100%;
  background-color: rgba(40, 40, 40, 0.4);
}
.circle {
  z-index: 1010;
  height: 32px;
  width: 32px;
  border-width: 6px;
  border-style: solid;
  border-radius: 50%;
  position: absolute;
}
.diagram #continue, .labels #continue {
  border-color: #c0392b;
}
.diagram #continue {
  left: -2px;
  top: 40px;
}
.diagram #stepover, .labels #stepover {
  border-color: #f39c12;
}
.diagram #stepover{
  left: 164px;
  top: -5px;
}
.diagram #stepinto, .labels #stepinto {
  border-color: #f1c40f;
}
.diagram #stepinto {
  left: 198px;
  top: -5px;
}
.diagram #stepout, .labels #stepout {
  border-color: #27ae60;
}
.diagram #stepout {
  left: 268px;
  top: -5px;
}
.diagram #eval, .labels #eval {
  border-color: #8e44ad;
}
.diagram #eval {
  left: 379px;
  top: -5px;
}
.label {
  border-width: 2px;
  border-style: solid;
  border-radius: 2px;
  padding: 3px 6px;
  margin: 10px 0;
}
#rot-down {
  transform: rotate(45deg);
}
#rot-up{
  transform: rotate(-45deg);
}
</style>
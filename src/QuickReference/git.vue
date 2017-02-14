<template>
  <div class="bordered-code">
    <div class="row">
      <h4>Always</h4>
      <code>git status</code>
    </div>
    <br><br>
    <div class="row">
      <h4>Saving work</h4>
      <code>git add .</code> ( Everything in this folder ) OR <code>git add folder</code> OR <code>git add File.java</code><br>
      <code>git commit -m "a useful commit message"</code><br>
      <code>git push</code><br>
    </div>
    <br><br>
    <div class="row">
      <h4>Useful</h4>
      <p>(Section on resetting soon -- but you should always ask a TA!)</p>
      <p><strong>Telling Git to ignore / not track things:</strong> You can use a <code>.gitignore</code> file to tell it what to ignore!
      <br>There are <a href="https://github.com/github/gitignore">many examples</a> online, <a href="https://github.com/github/gitignore/blob/master/Global/JetBrains.gitignore">eg. one for Intellij</a> (we've already included this in skeleton)
      <p><code>git log</code> - See my timeline of commits (<code>j  k</code> to scroll, <code>q</code> to exit)</p>
      <p><code>git diff</code> - See the changes I've made since the last commit (on <em>unstaged</em> files)
      <br><code>git diff &lt;file or folder&gt;</code> - diff but for just the things in the folder / the file
      <br><code>git diff HEAD~3 HEAD</code> - diff between now and three commits ago
      <br><code>git diff HEAD~3 HEAD -- &lt;file or folder&gt;</code> - same as above but for the file / folder. <em>Note the double dashes.</em></p>
      <p><code>git stash</code> - Temporarily <strong>reset but remember</strong> all the changes I've made
      <br><code>git stash pop</code> - Bring back the changes that I stashed</p>
      <p><code>git remote -v</code> - List remote repositories (eg. to check if <code>origin</code> / <code>skeleton</code> is correct URL)</p>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'git'
}
</script>

<style scoped>
</style>
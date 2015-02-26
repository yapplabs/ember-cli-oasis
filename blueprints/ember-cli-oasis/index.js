module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject(
      'oasis.js', 'master'
    );
  }
};

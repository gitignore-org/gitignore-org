<template>
    <div class="generate">
        <el-form :inline="true" :model="generate_from" class="form-generate">
            <el-form-item label="I USE">
                <el-select value-key="name" v-model="generate_from.editor" ilterable filterable placeholder="PLEASE INPUT">
                    <el-option v-for="item in editor" :key="item.name" :label="item.name" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="WRITE">
                <el-select value-key="name" v-model="generate_from.language" ilterable filterable placeholder="PLEASE INPUT">
                    <el-option v-for="item in language" :key="item.name" :label="item.name" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="ON">
                <el-select value-key="name" v-model="generate_from.platform" ilterable filterable placeholder="PLEASE INPUT">
                    <el-option v-for="item in platform" :key="item.name" :label="item.name" :value="item"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div class="language- extra-class">
            <pre class="language-text"><code v-text="generate_from.editor.content + generate_from.language.content + generate_from.platform.content"></code></pre>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      editor: [],
      platform: [],
      language: [],
      generate_from: {
        editor: {
          name: "Xcode",
          path: "gitignore-master/Global/Xcode.gitignore",
          content:
            "# Xcode\n#\n# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore\n\n## User settings\nxcuserdata/\n\n## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)\n*.xcscmblueprint\n*.xccheckout\n\n## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)\nbuild/\nDerivedData/\n*.moved-aside\n*.pbxuser\n!default.pbxuser\n*.mode1v3\n!default.mode1v3\n*.mode2v3\n!default.mode2v3\n*.perspectivev3\n!default.perspectivev3\n",
        },
        language: {
          name: "Swift",
          path: "gitignore-master/Swift.gitignore",
          content:
            "# Xcode\n#\n# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore\n\n## Build generated\nbuild/\nDerivedData/\n\n## Various settings\n*.pbxuser\n!default.pbxuser\n*.mode1v3\n!default.mode1v3\n*.mode2v3\n!default.mode2v3\n*.perspectivev3\n!default.perspectivev3\nxcuserdata/\n\n## Other\n*.moved-aside\n*.xccheckout\n*.xcscmblueprint\n\n## Obj-C/Swift specific\n*.hmap\n*.ipa\n*.dSYM.zip\n*.dSYM\n\n## Playgrounds\ntimeline.xctimeline\nplayground.xcworkspace\n\n# Swift Package Manager\n#\n# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.\n# Packages/\n# Package.pins\n# Package.resolved\n.build/\n\n# CocoaPods\n#\n# We recommend against adding the Pods directory to your .gitignore. However\n# you should judge for yourself, the pros and cons are mentioned at:\n# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control\n#\n# Pods/\n#\n# Add this line if you want to avoid checking in source code from the Xcode workspace\n# *.xcworkspace\n\n# Carthage\n#\n# Add this line if you want to avoid checking in source code from Carthage dependencies.\n# Carthage/Checkouts\n\nCarthage/Build\n\n# fastlane\n#\n# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the\n# screenshots whenever they are needed.\n# For more information about the recommended setup visit:\n# https://docs.fastlane.tools/best-practices/source-control/#source-control\n\nfastlane/report.xml\nfastlane/Preview.html\nfastlane/screenshots/**/*.png\nfastlane/test_output\n\n# Code Injection\n#\n# After new code Injection tools there's a generated folder /iOSInjectionProject\n# https://github.com/johnno1962/injectionforxcode\n\niOSInjectionProject/\n",
        },
        platform: {
          name: "macOS",
          path: "gitignore-master/Global/macOS.gitignore",
          content:
            "# General\n.DS_Store\n.AppleDouble\n.LSOverride\n\n# Icon must end with two \\r\nIcon\r\r\n\n# Thumbnails\n._*\n\n# Files that might appear in the root of a volume\n.DocumentRevisions-V100\n.fseventsd\n.Spotlight-V100\n.TemporaryItems\n.Trashes\n.VolumeIcon.icns\n.com.apple.timemachine.donotpresent\n\n# Directories potentially created on remote AFP share\n.AppleDB\n.AppleDesktop\nNetwork Trash Folder\nTemporary Items\n.apdisk\n",
        },
      },
    };
  },
  computed: {
    code() {
      this.generate_from.editor.content;
    },
  },
  created: function() {
    this.$http.get("/data.json").then(
      response => {
        this.editor = response.data.editor;
        this.language = response.data.language;
        this.platform = response.data.platform;
      },
      response => {}
    );
  },
  methods: {},
};
</script>
<style scoped>
.generate {
  margin-top: 80px;
}
</style>
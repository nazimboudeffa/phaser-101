module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadTasks('./tasks');

  grunt.initConfig({
    compile_dir: 'dist',
    src: {
      phaser: [
        'src/Intro.js',
        'src/pixi/Pixi.js',
        'src/Phaser.js',
        'src/utils/Utils.js',
        'src/pixi/core/Matrix.js',
        'src/pixi/core/Point.js',
        'src/pixi/core/Rectangle.js',
        'src/pixi/display/DisplayObject.js',
        'src/pixi/display/DisplayObjectContainer.js',
        'src/pixi/display/Sprite.js',
        'src/pixi/display/Stage.js',
        'src/pixi/extras/CustomRenderable.js',
        'src/pixi/extras/Strip.js',
        'src/pixi/extras/Rope.js',
        'src/pixi/extras/TilingSprite.js',
        'src/pixi/filters/FilterBlock.js',
        'src/pixi/filters/MaskFilter.js',
        'src/pixi/primitives/Graphics.js',
        'src/pixi/renderers/canvas/CanvasGraphics.js',
        'src/pixi/renderers/canvas/CanvasRenderer.js',
        'src/pixi/renderers/webgl/WebGLBatch.js',
        'src/pixi/renderers/webgl/WebGLGraphics.js',
        'src/pixi/renderers/webgl/WebGLRenderer.js',
        'src/pixi/renderers/webgl/WebGLRenderGroup.js',
        'src/pixi/renderers/webgl/WebGLShaders.js',
        'src/pixi/text/BitmapText.js',
        'src/pixi/text/Text.js',
        'src/pixi/textures/BaseTexture.js',
        'src/pixi/textures/Texture.js',
        'src/pixi/textures/RenderTexture.js',
        'src/pixi/utils/EventTarget.js',
        'src/pixi/utils/Polyk.js',
        'src/core/Camera.js',
        'src/core/State.js',
        'src/core/StateManager.js',
        'src/core/LinkedList.js',
        'src/core/Signal.js',
        'src/core/SignalBinding.js',
        'src/core/Plugin.js',
        'src/core/PluginManager.js',
        'src/core/Stage.js',
        'src/core/Group.js',
        'src/core/World.js',
        'src/core/Game.js',
        'src/input/Input.js',
        'src/input/Key.js',
        'src/input/Keyboard.js',
        'src/input/Mouse.js',
        'src/input/MSPointer.js',
        'src/input/Pointer.js',
        'src/input/Touch.js',
        'src/input/InputHandler.js',
        'src/gameobjects/Events.js',
        'src/gameobjects/GameObjectFactory.js',
        'src/gameobjects/Sprite.js',
        'src/gameobjects/TileSprite.js',
        'src/gameobjects/Text.js',
        'src/gameobjects/BitmapText.js',
        'src/gameobjects/Button.js',
        'src/gameobjects/Graphics.js',
        'src/gameobjects/RenderTexture.js',
        'src/system/Canvas.js',
        'src/system/StageScaleMode.js',
        'src/system/Device.js',
        'src/system/RequestAnimationFrame.js',
        'src/math/RandomDataGenerator.js',
        'src/math/Math.js',
        'src/math/QuadTree.js',
        'src/geom/Circle.js',
        'src/geom/Point.js',
        'src/geom/Rectangle.js',
        'src/net/Net.js',
        'src/time/Time.js',
        'src/animation/AnimationManager.js',
        'src/animation/Animation.js',
        'src/animation/Frame.js',
        'src/animation/FrameData.js',
        'src/animation/AnimationParser.js',
        'src/loader/Cache.js',
        'src/loader/Loader.js',
        'src/loader/LoaderParser.js',
        'src/utils/Debug.js',
        'src/utils/Color.js',
        'src/physics/arcade/ArcadePhysics.js',
        'src/physics/arcade/Body.js',
        'src/PixiPatch.js'
      ]
    },
    pkg: grunt.file.readJSON('package.json'),
    clean: ['<%= compile_dir %>'],
    concat: {
      phaser: {
        options: {
          process: {
            data: {
              version: '<%= pkg.version %>',
              buildDate: '<%= grunt.template.today() %>'
            }
          }
        },
        src: ['<%= src.phaser %>'],
        dest: '<%= compile_dir %>/phaser.js'
      }
    },
    umd: {
      phaser: {
        src: '<%= concat.phaser.dest %>',
        dest: '<%= umd.phaser.src %>'
      }
    },
    uglify: {
      phaser: {
        options: {
          banner: '/*! Phaser v<%= pkg.version %> | (c) 2013 Photon Storm Ltd. */\n'
        },
        src: ['<%= umd.phaser.dest %>'],
        dest: '<%= compile_dir %>/phaser.min.js'
      }
    },
    connect: {
      root: {
        options: {
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean', 'concat', 'umd', 'uglify']);

};

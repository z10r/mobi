const meme = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA5CAYAAACfz8NxAAACbElEQVRoQ+1Y7W7CQAyj7//QnYp2VTDOd5iYdPwZYr1cHDtO4DjP83z889exQXwJg5uJLyHisZnYTAxWYMtpsJitUJuJVvkGD28mBovZCrWZaJVv8PBmYrCYrVAtJo7jeHS+GHbPL+RtEFegLJArefnKnkfaSiBYEtGq4tkJMCUQ18Ur6WxVNRAdNlogVhWvBFZyVjIWC1FZyhjrrhIIxkK0kh05sbPPAlZ+ssGqR/thyVDz0wyLkv0UCMnATWXSZqs9YTGYBsG0G2XiEwCe7GbkJJPV3jOpMJARI7iHGcwVtOUUCGmt+D6zN2QASCCyD+R9aRCd5FllI67mWXMaRFT/L5USza8NRy2uZE0D8ycg3nYdcLSIvLQZEW5sOiWT1ipnBE54DYQ63H7vvi0/4064M0X1LGfKsmgsDMoJ3e/NkX4dKzyxu2vGqjz+lYBkQdh9KMmX5yNMaD4fYUJzJGxYBoLZqyzE/f8ICEwkmjwbiJb+WdxQ02dAVGeEZqvY7KxYYyAqPSHPoFS0XqhuBO6cQADV7dWSJFabOZO5pkflxCxxJRbpEcaMNf0zm4HLhLZJokt4l7KBie7jTXZtyUyBYFsksmDtQChFreEjzZzaYr3BQ33bWElY4tmk3xjzesIDsZxG2qX8jElEk4V1zjrjygknqzb+NRergPD6q8QELm3sd6bMxSgp6XKZOKm1w9MxXmw1tyWLj8uJXR6ZDy8uYnzhz8yckpzYCq31hldpNAD5fLYoLTl1AGggqgCe8TyLtS6tNCHKq5N8iokFhLlSRD6ffibEBPP6iQpOgSuBmLp8Ks4GMVXJbpwfNRTkhvghe/4AAAAASUVORK5CYII='

class pingas {
  constructor() {}
  getInfo() {
    return {
      id: 'pingas',
      name: 'THEIGNORELIST',
      color1: '#00daee',
      color2: '#00daee',
      color3: '#00747f',
      menuIconURI: meme,
      blockIconURI: meme,
      blocks: [
        {
          opcode: 'testReporter',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'P22i222n222g222a222s',
            },
          },
          text: 'P22i2222n22ga22s [A]',
        },
        {
          opcode: 'testHat',
          blockType: Scratch.BlockType.HAT,
          text: 'P4er3erfwrfngas',
        },
        {
          opcode: 'testCommand',
          blockType: Scratch.BlockType.COMMAND,
          text: 'rdngerassdr [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Piwdqngc das',
            },
          },
        },
        {
          opcode: 'testVar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'udufed',
        },
      ],
    }
  }
  testReporter({ A }) {
    return A
  }
  testHat() {
    return
  }
  testCommand({ A }) {
    return
  }
  testVar() {
    return '00'
  }
}
Scratch.extensions.register(new pingas())

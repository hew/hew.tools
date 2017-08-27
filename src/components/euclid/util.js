const styleTree = (color) => {
  return {
    block: {
      height: '166px',
      width: '166px',
      position: 'absolute',
      border: '1px solid black',
      transition: 'background-color 1230ms linear',
      willChange: 'auto'
    },
    base () {
      return {
        ...this.block,
        bottom: '0',
        left: 'calc(50% - 86px)',
        transform: 'rotate(180deg)'
      }
    },
    branch () {
      return {
        ...this.block,
        top: '100%'
      }
    },
    left () {
      return {
        ...this.branch(),
        right: '50%',
        transform: 'scale(0.70710678) rotate(45deg)'
      }
    },
    right () {
      return {
        ...this.branch(),
        left: '50%',
        transform: 'scale(0.70710678) rotate(-45deg)'
      }
    }
  }
}

export default styleTree

import React, { useState, useEffect } from 'react'

const USE_STORYBOOK = false

export function ToggleStorybook(props) {
  const [showStorybook, setShowStorybook] = useState(false)
  const [StorybookUIRoot, setStorybookUIRoot]: any = useState(null)

  useEffect(() => {
    if (USE_STORYBOOK) {
      setStorybookUIRoot(() => require('./storybook').StorybookUIRoot)
      setShowStorybook(true)
    }
  }, [])

  if (showStorybook) {
    return StorybookUIRoot ? <StorybookUIRoot /> : null
  } else {
    return props.children
  }
}

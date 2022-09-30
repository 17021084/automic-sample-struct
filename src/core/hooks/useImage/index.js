import React, { useCallback, useState } from 'react'
import Sizer from 'react-image-file-resizer'

const useImage = () => {
  const [uri, setUri] = useState(null)

  const getUri = useCallback(uri => setUri(uri), [])

  const resizeImage = React.useCallback(file => {
    const execute = async () => {
      const image = await Sizer.imageFileResizer(
        file,
        1200,
        1200,
        ['BLOB', 'JPEG', 'PNG'],
        70,
        0,
        getUri,
        'file',
        50,
        50
      )

      return image
    }

    return execute()
  }, [])

  return { resizeImage, preview: uri }
}

export default useImage

import axios from 'axios'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import { cdn } from './url'

export const saveMultipleFiles = (urls: string[], archiveName: string = 'archive') => {
  const zip = new JSZip()

  urls.forEach((url) => {
    const { pathname } = new URL(url)
    const fileName = pathname.split('/').pop() as string
    zip.file(
      fileName,
      axios.get(cdn(url)).then((response) => response.data),
    )
  })

  return zip.generateAsync({ type: 'blob' }).then((blob) => {
    saveAs(blob, `${archiveName}.zip`)
  })
}

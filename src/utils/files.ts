import axios from 'axios'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import { cdn } from './url'

export const saveMultipleFiles = (urls: string[], archiveName: string = 'archive') => {
  const zip = new JSZip()

  urls.forEach((url) => {
    const fileName = getFilenameFromUrl(url)
    zip.file(
      fileName,
      fetch(cdn(url)).then((response) => response.blob()),
    )
  })

  return zip.generateAsync({ type: 'blob' }).then((blob) => {
    saveAs(blob, `${archiveName}.zip`)
  })
}

export const saveFile = (url: string) => {
  const fileName = getFilenameFromUrl(url)
  saveAs(cdn(url), fileName)
}

export const getFilenameFromUrl = (url: string) => {
  const { pathname } = new URL(url)
  return pathname.split('/').pop() as string
}
